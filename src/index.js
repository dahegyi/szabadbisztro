import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
