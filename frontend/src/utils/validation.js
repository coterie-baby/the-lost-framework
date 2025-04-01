import md5 from "crypto-js/md5";
import answers from "../config/answers";

export const isWordValid = (index, word) => {
  return md5(`Word ${index + 1}: ${word}`).toString() === answers[index];
};
