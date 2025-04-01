import { useEffect, useState } from "react";
import { getUrl } from "../utils/api";

function Api() {
  const [number, setNumber] = useState(11);
  const [word, setWord] = useState("Fetch");

  useEffect(() => {
    setTimeout(() => {
      setWord("Tea");
    }, 500);

    fetch(getUrl("/word"))
      .then((res) => res.json())
      .then((data) => {
        setWord(word);
        setNumber(data.number);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <p>Fetched from API:</p>
      <p>{`Word #${number}: ${word}`}</p>
    </div>
  );
}

export default Api;
