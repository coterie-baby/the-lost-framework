import CryptoJS from "crypto-js";

const encryptedMessage =
  "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";

// regular AES decrypt function
function decrypt(transitmessage, pass) {
  try {
    const salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    const iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
    const encrypted = transitmessage.substring(64);
  
    const key = CryptoJS.PBKDF2(pass, salt, {
      keySize: 256 / 32,
      iterations: 100,
    });
  
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
      hasher: CryptoJS.algo.SHA256,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return null;
  }
}

function SecretMessage({ words }) {
  const password = words.join("");
  const decrypted = decrypt(encryptedMessage, password);
  const isDecrypted = decrypted && decrypted.trim()[0] === "<";

  return (
    <>
      {isDecrypted ? (
        <div
          className="p-4 bg-gray-800/50 text-white text-sm overflow-auto absolute left-2 right-2 z-50 opacity-100 transition-opacity duration-2000 delay-2000"
          dangerouslySetInnerHTML={{ __html: decrypted }}
        />
      ) : (
        <div className="opacity-0" />
      )}
      <i className="mb-1 text-gray-900">The first word is Apple</i>
    </>
  );
}

export default SecretMessage;
