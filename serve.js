const express = require('express');
const proxy = require('http-proxy-middleware');
const data = require('./api/data');
const app = express();
const port = 3002;

app.get('/api/data', data);
app.use('/nextjs', proxy({
  target: 'http://localhost:3001',
  changeOrigin: true,
  pathRewrite: { '^/nextjs': '' }, // e.g. /nextjs/index -> /index
}));
app.use('/', proxy({
  target: 'http://localhost:3000',
  changeOrigin: true,
}))

app.listen(port, () => console.log(`Listening on port ${port}!`))