import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import { MemeGenerator } from "./hw-10/App"; */
import { ReservationForm } from "./hw-11/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MemeGenerator /> */}
    <ReservationForm />
  </StrictMode>
);
