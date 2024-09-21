import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { encrypt, decrypt } from "../encryptionAlgorithm"; // Se implementará el algoritmo aquí

const Content = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncrypt = () => {
    const encrypted = encrypt(plaintext, key);
    setCiphertext(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = decrypt(ciphertext, key);
    setDecryptedText(decrypted);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Symmetric Encryption
      </Typography>

      <TextField
        label="Enter text to encrypt"
        fullWidth
        value={plaintext}
        onChange={(e) => setPlaintext(e.target.value)}
        sx={{ mb: 2 }}
        inputProps={{ maxLength: 100 }}
      />

      <TextField
        label="Enter encryption key (max 16 chars)"
        fullWidth
        value={key}
        onChange={(e) => setKey(e.target.value)}
        sx={{ mb: 2 }}
        inputProps={{ maxLength: 16 }}
      />

      <Button variant="contained" color="primary" onClick={handleEncrypt} sx={{ mb: 2 }}>
        Encrypt
      </Button>

      {ciphertext && (
        <Typography variant="h6" gutterBottom>
          Ciphertext: {ciphertext}
        </Typography>
      )}

      <Button variant="contained" color="secondary" onClick={handleDecrypt}>
        Decrypt
      </Button>

      {decryptedText && (
        <Typography variant="h6" gutterBottom>
          Decrypted Text: {decryptedText}
        </Typography>
      )}
    </Box>
  );
};

export default Content;

