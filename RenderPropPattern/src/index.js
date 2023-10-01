import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppHoc from "./AppHOC";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppHoc />
  </StrictMode>
);
