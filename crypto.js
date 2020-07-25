const crypto = require("crypto");

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096
});

// Encrypt any data type using RSA encryption
exports.encryptData = (dataToEncrypt) => {
  const encryptedData = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256"
  },
    Buffer.from(JSON.stringify(dataToEncrypt)))
  return encryptedData.toString("base64");
};

// Decrypt any data type using RSA encryption
exports.decryptData = (dataToDecrypt) => {
  const decryptedData = crypto.privateDecrypt({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256"
  },
    Buffer.from(dataToDecrypt, "base64"))
  return JSON.parse(decryptedData.toString('utf8'));
};
