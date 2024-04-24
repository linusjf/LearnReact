import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { useState } from "react";

let App = function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
};

/**
 *
 */
function MyButton() {
  const [count, setCount] = useState(0);

  /**
   *
   */
  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
