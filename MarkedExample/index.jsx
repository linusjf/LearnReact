import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);
root.render(
  <StrictMode>
    <Markdown># Hello *world*!</Markdown>
  </StrictMode>
);
