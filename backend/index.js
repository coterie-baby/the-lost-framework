const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getWord, decodeSecretWord } = require("./services/word-service");
const { wordMiddleware } = require("./middlewares/word-middleware");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/word", wordMiddleware, (req, res) => {
  return res.json({ number: 10, word: getWord(req.index || 3) });
});

app.get("/secret", (req, res) => {
  return res.json({ number: 4, word: decodeSecretWord() });
});

app.listen(9001, () => console.log("✅ Backend running on port 9001"));
