import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemeGenerator } from "./hw-10/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemeGenerator />
  </StrictMode>
);
