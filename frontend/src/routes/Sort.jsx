const images = [
  { number: 1, from: 5, to: 1 },
  { number: 2, from: 3, to: 4 },
  { number: 3, from: 7, to: 2 },
  { number: 4, from: 1, to: 1 },
  { number: 5, from: 8, to: 2 },
  { number: 6, from: 6, to: 8 },
  { number: 7, from: 2, to: 2 },
  { number: 8, from: 5, to: 3 },
  { number: 9, from: 1, to: 7 },
  { number: 10, from: 2, to: 9 },
  { number: 11, from: 6, to: 5 },
  { number: 12, from: 3, to: 3 },
  { number: 13, from: 6, to: 1 },
  { number: 14, from: 4, to: 2 },
  { number: 15, from: 3, to: 7 },
];

// Sort the images array by pythagorean theorem
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
