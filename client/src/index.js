import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

// ReactDOM.render(<App />, document.getElementById("root"));

const store = createStore();

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(<App />, rootEl);
};

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
