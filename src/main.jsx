import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PrismicProvider } from "@prismicio/react";

import { initializeAnalytics } from "./utils/analytics";
import { client } from "./utils/prismic";
import store from "./utils/store";

import App from "./App";

import "./assets/main.scss";

initializeAnalytics();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </Provider>
  </React.StrictMode>,
);
