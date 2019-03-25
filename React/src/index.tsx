import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root") as HTMLElement;

const render = () => {
  ReactDOM.render(
    <App header="lelelele" initialCount={5} />,
    root,
  );
};

render();