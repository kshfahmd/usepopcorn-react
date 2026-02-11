import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import AppV1 from "./AppV1.jsx";
import StarRating from "./StarRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppV1 />
  </StrictMode>,
);
