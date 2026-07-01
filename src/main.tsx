import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TombRaiderLanding } from "./app/TombRaiderLanding";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/motion.css";
import "./styles/utilities.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TombRaiderLanding />
  </StrictMode>,
);
