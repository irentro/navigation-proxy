const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const httpProxy = require('http-proxy');

app.use(express.json())
app.use(express.static('public'));
app.use(cors());

const proxy = httpProxy.createProxyServer({});

//Route to recommendations module
app.all('/app1', (req, res) => {
  console.log('redirecting to recommendations static');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});

app.all('/recommendations', (req, res) => {
  console.log('redirecting to recommendations');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});

app.all('/recommendations/save', (req, res) => {
  console.log('redirecting to recommendations save');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});

app.all('/recommendations/unsave', (req, res) => {
  console.log('redirecting to recommendations unsave');
  proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
});


//Route to checkout module
app.all('/listings', (req, res) => {
  console.log('redirecting to checkout listings');
  proxy.web(req, res, {target: 'http://127.0.0.1:3000', changeOrigin: true})
});

app.all('/bookings', (req, res) => {
  console.log('redirecting to checkout bookings');
  proxy.web(req, res, {target: 'http://127.0.0.1:3000', changeOrigin: true})
});

app.all('/bookings/available/:listingId', (req, res) => {
  console.log('redirecting to listingID');
  proxy.web(req, res, {target: 'http://127.0.0.1:3000', changeOrigin: true})
});


//Route to gallery module
app.all('/gallery/:listingid', (req, res) => {
  console.log('redirecting to gallery listingId');
  proxy.web(req, res, {target: 'http://127.0.0.1:3009', changeOrigin: true})
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})