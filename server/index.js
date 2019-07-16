const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const httpProxy = require('http-proxy');

app.use(express.json())
app.use(express.static('public'));
app.use(cors());

const proxy = httpProxy.createProxyServer({});

app.all('/app1', (req, res) => {
  console.log('redirecting to  the app1');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});

app.all('/recommendations', (req, res) => {
  console.log('redirecting to  the app1');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});

app.all('/recommendations/save', (req, res) => {
  console.log('redirecting to  the app1');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});

app.all('/recommendations/unsave', (req, res) => {
  console.log('redirecting to  the app1');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});

// app.all('/app2', (req, res) => {
//   console.log('redirecting to app2');
//   proxy.web(req, res, {target: 'http://127.0.0.1:3002'})
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})