const images = [
  { number: 1, a: 5, b: 1 },
  { number: 2, a: 3, b: 4 },
  { number: 3, a: 7, b: 2 },
  { number: 4, a: 1, b: 1 },
  { number: 5, a: 8, b: 2 },
  { number: 6, a: 6, b: 8 },
  { number: 7, a: 2, b: 2 },
  { number: 8, a: 5, b: 3 },
  { number: 9, a: 1, b: 7 },
  { number: 10, a: 2, b: 9 },
  { number: 11, a: 6, b: 5 },
  { number: 12, a: 3, b: 3 },
  { number: 13, a: 6, b: 1 },
  { number: 14, a: 4, b: 2 },
  { number: 15, a: 3, b: 7 },
];

// Sort the images array by pithagorean theorem
const sortFunction = () => {

};

function Sort() {
  const sortedImages = images.sort(sortFunction);

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-900 text-white">
      {sortedImages.map((image) => (
        <img
          key={image.number}
          src={"/sort/" + image.number + ".png"}
          alt={`Image ${image.number}`}
        />
      ))}
    </div>
  );
}

export default Sort;
