const NodeRSA = require('node-rsa');
const key = new NodeRSA();

key.generateKeyPair(2048, 65537);

// Encrypt any data type using Node RSA encryption
exports.encryptData = (dataToEncrypt) => {
  key.exportKey("pkcs8-public-pem");
  const encData = key.encrypt(JSON.stringify(dataToEncrypt), 'base64');
  return encData;
};

// Decrypt any data type using Node RSA encryption
exports.decryptData = (dataToDecrypt) => {
  key.exportKey("pkcs8-private-pem");
  const decData = key.decrypt(dataToDecrypt, 'utf8');
  return JSON.parse(decData);
};
