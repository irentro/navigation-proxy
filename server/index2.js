const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const httpProxy = require('http-proxy');

app.use(express.static('public'));
app.use(cors());

const proxy = httpProxy.createProxyServer({});

app.use('/', (req, res) => {
  console.log('Hello from app2')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})