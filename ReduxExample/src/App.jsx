import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";

/**
 *
 */
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img
          src={`${process.env.PUBLIC_URL ?? ""}/logo.svg`}
          className="app-logo"
          alt="logo"
        />
        <Counter />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="app-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="app-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="app-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="app-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
