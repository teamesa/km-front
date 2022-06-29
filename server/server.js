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
    if (err.response.status === 400) {
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
    res.clearCookie('kilometer_session');
    const serverUrl = process.env.BACK_URL;
    const frontDomain = process.env.FRONT_URL;
    const redirectUrl = '/mypage';

    const finalRedirected = `${serverUrl}/oauth2/authorization/naver?redirect_uri=${frontDomain}/api/login/sucess?redirect_uri=${redirectUrl}`;
    console.log(finalRedirected);
    res.redirect(finalRedirected);
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
  server.put('/api/image', upload.single('file'), fileProxy);
  server.put('/api/user/profile', upload.single('file'), fileProxy);
  server.all('/api/*', proxyLogic);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
