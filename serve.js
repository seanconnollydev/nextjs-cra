const express = require('express');
const proxy = require('http-proxy-middleware');
const data = require('./api/data');
const app = express();
const port = 3002;

app.get('/api/data', data);
app.use(['/nextjs', '/_next'], proxy({
  target: 'http://localhost:3001',
  pathRewrite: { '^/nextjs': '' }, // e.g. /nextjs/index -> /index
}));
app.use('/', proxy({
  target: 'http://localhost:3000',
}))

app.listen(port, () => console.log(`Listening on port ${port}!`))