const crypto = require("crypto");

const decryptionKey = process.env.KEY || "mySecretKey";

const words = [
  "Tea",
  "Coffee",
  "Milk",
  "Juice",
  "Water",
  "Soda",
  "Beer",
  "Wine",
];

const getWord = (num) => {
  const reducedMap = words.reduce((acc, word) => {
    const key = word.length;
    acc[key] = word;
    return acc;
  }, {});
  return reducedMap[num];
};


const decodeSecretWord = () => {
  const word = "2ca14cfc4e7618949d792dfebaaba728";
  const decipher = crypto.createDecipher("aes256", decryptionKey);
  const decrypted = decipher.update(word, 'hex', 'utf8') + decipher.final('utf8');
  return decrypted;
}

module.exports = {
  getWord,
  decodeSecretWord,
};
