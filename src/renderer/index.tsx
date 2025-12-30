import React from "react";
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <h1>MyFlock Books</h1>
  </React.StrictMode>
);

