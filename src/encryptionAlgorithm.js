// encryptionAlgorithm.js

export const encrypt = (plaintext, key) => {
    let ciphertext = ""; 
    for (let i = 0; i < plaintext.length; i++) {
      ciphertext += String.fromCharCode(plaintext.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return ciphertext;
  };
  
  export const decrypt = (ciphertext, key) => {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      plaintext += String.fromCharCode(ciphertext.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return plaintext;
  };
  