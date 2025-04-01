import { useState } from "react";
import { getFromStorage, saveInStorage } from "./utils/storage";
import { isWordValid } from "./utils/validation";
import SecretMessage from "./components/SecretMessage";
import Confetti from "react-confetti";

const WORDS_COUNT = 10;

function App() {
  const [words, setWords] = useState(getFromStorage("words", []));
  const results = words.map((word, i) => isWordValid(i, word));
  const areAllValid = results.length === WORDS_COUNT && results.every((result) => result);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-2">
      <h1 className="text-2xl my-4">Find the 10 Hidden Words</h1>
      <SecretMessage words={words} />

      {areAllValid && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}

      <div className="mb-4">
        {new Array(WORDS_COUNT).fill(null).map((_, i) => (
          <div key={i}>
            <input
              className={`border p-2 mt-2 w-full max-w-64 ${
                results[i] ? "border-green-500" : "border-red-500"
              }`}
              type="text"
              placeholder={"Enter word #" + (i + 1)}
              value={words[i] || ""}
              onChange={(e) => {
                const newWords = [...words];
                newWords[i] = e.target.value;
                setWords(newWords);
                saveInStorage("words", newWords);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
