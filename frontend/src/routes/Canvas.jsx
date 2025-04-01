import { useEffect, useRef } from "react";

const LINES = [
  [[10, 10], [70, 10]],
  [[70, 10], [30, 100]],
  [[80, 40], [80, 45]],
  [[80, 60], [80, 65]],
  [[90, 100], [90, 10]],
  [[90, 10], [120, 40]],
  [[120, 40], [150, 10]],
  [[150, 10], [150, 100]],
  [[160, 30], [160, 100]],
  [[160, 100], [190, 100]],
  [[190, 100], [190, 30]],
  [[200, 100], [230, 100]],
  [[230, 100], [230, 65]],
  [[230, 65], [200, 65]],
  [[200, 65], [200, 30]],
  [[200, 30], [230, 30]],
  [[240, 100], [240, 30]],
  [[280, 100], [250, 100]],
  [[250, 100], [250, 30]],
  [[250, 30], [280, 30]],
];

function Canvas() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <canvas ref={canvasRef} width={290} height={110} className="bg-white" />
    </div>
  );
}

export default Canvas;
