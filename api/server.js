const express = require('express');
const app = express();
const port = 3002;

app.get('/api/data', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))