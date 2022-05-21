const express = require('express');
const next = require('next');
const dotenv = require('dotenv');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then(() => {
  const server = express();

  server.get('/api/login', (req, res) => {
    const serverUrl = process.env.NEXT_PUBLIC_BACK_URL;
    const frontDomain = process.env.FRONT_URL;
    const redirectUrl = '/';
    res.redirect(
      `${serverUrl}/oauth2/authorization/naver?redirect_uri=${frontDomain}${redirectUrl}`,
    );
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
