const getWord = (epoch) => {
  const thirteenth = Math.floor((epoch || 3971947961228) / 13);
  const pairs = String(thirteenth).match(/.{1,2}/g).map(p => Number(p));

  const word = [
    String.fromCharCode(pairs[0] + 57),
    String.fromCharCode(pairs[1] + 59),
    String.fromCharCode(pairs[2] + 77),
    String.fromCharCode(pairs[3] + 65),
    String.fromCharCode(pairs[4] + 18),
    String.fromCharCode(pairs[5] + 70),
  ].join("");

  return "Word 6: " + word;
};

function NextHalloween() {
  const word = getWord();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {word}
    </div>
  );
}

export default NextHalloween;
