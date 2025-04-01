import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Canvas from "./routes/Canvas";
import NextHalloween from "./routes/NextHalloween";
import Hidden from "./routes/Hidden";
import Sort from "./routes/Sort";
import Api from "./routes/Api";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/canvas" element={<Canvas />} />
      <Route path="/next-halloween" element={<NextHalloween />} />
      <Route path="/hidden" element={<Hidden />} />
      <Route path="/sort" element={<Sort />} />
      <Route path="/api" element={<Api />} />
    </Routes>
  </BrowserRouter>
);
