const CryptoJS = require("crypto-js");

// Encrypt any data type using AES encryption
exports.encryptDataAES = (data) => {
  const ivKey = CryptoJS.enc.Base64.parse("#base64IV#");
  const key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    iv: ivKey,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
  return encryptedData;
};

// Decrypt any data type using AES encryption
exports.decryptDataAES = (data) => {
  const ivKey = CryptoJS.enc.Base64.parse("#base64IV#");
  const key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
  const decryptedData = CryptoJS.AES.decrypt(data, key, {
    iv: ivKey,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
};
