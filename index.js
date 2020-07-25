const express = require('express');
const bodyParser = require('body-parser');

const cryptoController = require('./crypto');
const rsaController = require('./rsa');
const cryptoJSController = require('./crypto-js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 3000;

// API to encrypt data using RSA Scheme
app.post('/crypto/enc', function (req, res) {
  const encData = cryptoController.encryptData(req.body.message);
  res.send({ code: 200, data: encData });
})

// API to decrypt data using RSA Scheme
app.post('/crypto/dcp', function (req, res) {
  const decData = cryptoController.decryptData(req.body.message);
  res.send({ code: 200, data: decData });
})

// API to encrypt data using Node RSA Scheme
app.post('/rsa/enc', function (req, res) {
  const encData = rsaController.encryptData(req.body.message);
  res.send({ code: 200, data: encData });
})

// API to decrypt data using Node RSA Scheme
app.post('/rsa/dcp', function (req, res) {
  const decData = rsaController.decryptData(req.body.message);
  res.send({ code: 200, data: decData });
})

// API to encrypt data using AES Scheme
app.post('/aes/enc', function (req, res) {
  const encData = cryptoJSController.encryptDataAES(req.body.message);
  res.send({ code: 200, data: encData });
})

// API to decrypt data using AES Scheme
app.post('/aes/dcp', function (req, res) {
  const decData = cryptoJSController.decryptDataAES(req.body.message);
  res.send({ code: 200, data: decData });
})

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
