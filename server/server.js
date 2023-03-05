const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const axios = require('axios');
const multer = require('multer');
const upload = multer({
  dest: __dirname + '/uploads/',
});
const FormData = require('form-data');
const fs = require('fs');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

const payloadString = (payload) =>
  Object.entries(payload)
    .map((e) => e.join('='))
    .join('&');

const proxyLogic = async (req, res) => {
  const token =
    req?.cookies?.kilometer_session ?? req?.headers?.authorization ?? null;

  try {
    const request = await axios({
      url: `${process.env.BACK_URL}${req.path}${
        req.query ? '?' + payloadString(req.query) : ''
      }`,
      method: req.method,
      data: req.body,
      query: req.query,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.headers['content-type'].includes('json')) {
      res.json(request.data);
    } else {
      console.log('please check content-type. we can accept json only');
      res.json({});
    }
  } catch (err) {
    if (err.response.status === 400 || err.response.status === 404) {
      res.status(err.response.status).send(err.response.data);
    } else {
      console.log(err);
      res.status(err.response.status).send({});
    }
  }
};

const fileProxy = async (req, res) => {
  const token =
    req?.cookies?.kilometer_session ?? req?.headers?.authorization ?? null;
  const formData = new FormData();
  formData.append('file', fs.createReadStream(req.file.path), {
    filename: req.file.originalname,
  });

  try {
    const request = await axios({
      url: `${process.env.BACK_URL}${req.path}`,
      method: req.method,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        ...formData.getHeaders(),
      },
    });

    if (request.headers['content-type'].includes('json')) {
      res.json(request.data);
    } else {
      console.log('please check content-type. we can accept json only');
      res.json({});
    }
  } catch (err) {
    if (err.response.status === 400) {
      res.status(err.response.status).send(err.response.data);
    } else {
      console.log(err);
      res.status(err.response.status).send({});
    }
  }
};

app.prepare().then(() => {
  const server = express();

  server.use(cookieparser());
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get('/api/login', (req, res) => {
    const client_id = process.env.NAVER_CLIENT_ID;
    const env_redirect_uri = process.env.NAVER_REDIRECT_URI;
    res.clearCookie('kilometer_session');
    res.cookie('redirect', req.query.redirect ?? '/mypage');

    const finalRedirected = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${env_redirect_uri}&state=test`;
    res.redirect(finalRedirected);
  });

  server.get('/naver/callback', async (req, res) => {
    const code = req.query.code;
    const state = req.query.state;
    const { redirect } = req.cookies;
    res.clearCookie('redirect');

    const client_id = process.env.NAVER_CLIENT_ID;
    const client_secret = process.env.NAVER_SECRET_KEY;
    const env_redirect_uri = process.env.NAVER_REDIRECT_URI;

    const naver_api_url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&response_type=code&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${env_redirect_uri}&code=${code}&state=${state}`;

    try {
      const result = await axios({
        method: 'GET',
        url: naver_api_url,
        headers: {
          'X-Naver-Client-Id': client_id,
          'X-Naver-Client-Secret': client_secret,
        },
      });

      const token = result.data.access_token;

      const info_options = {
        url: 'https://openapi.naver.com/v1/nid/me',
        headers: { Authorization: 'Bearer ' + token },
      };

      const info_result = await axios(info_options);

      const naverUserData = info_result?.data?.response ?? {};

      const newUser = {
        providerId: naverUserData.id,
        provider: 'naver',
        email: naverUserData.email,
        profileImage: naverUserData.profile_image,
        gender: naverUserData.gender,
        birthday: naverUserData.birthday,
        birthYear: naverUserData.birthYear,
        phoneNumber: naverUserData.mobile,
      };

      const request = await axios({
        url: `${process.env.BACK_URL}/api/authentication`,
        method: 'POST',
        data: newUser,
      });

      if (!request?.data) {
        res.redirect('/mypage');
      }

      if (request?.data?.accessToken) {
        res.cookie('kilometer_session', request.data.accessToken);
      }

      if (!request?.data?.firstJoined) {
        if (!redirect) {
          res.redirect('/mypage');
        }
        res.redirect(redirect);
      } else {
        res.redirect('/welcome');
      }
    } catch (_) {
      console.log(_);
      res.redirect('/mypage');
    }
  });

  server.get('/api/logout', (req, res) => {
    res.clearCookie('kilometer_session');
    res.redirect('/');
  });

  server.get('/api/login/sucess', (req, res) => {
    // TODO: HOST에 따라서 확인해봐야함.
    res.cookie('kilometer_session', req.query.token, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: true,
    });
    res.redirect(req.query.redirect_uri);
  });

  server.all('/hello-example', proxyLogic);
  server.post('/api/image', upload.single('file'), fileProxy);
  server.put('/api/users/profile', upload.single('file'), fileProxy);
  server.all('/api/*', proxyLogic);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
