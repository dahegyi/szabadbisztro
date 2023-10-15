import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

import store from "./store";
import App from "./App";
import "./assets/main.scss";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </Provider>
  </React.StrictMode>,
);
