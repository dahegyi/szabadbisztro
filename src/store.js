import { configureStore } from "@reduxjs/toolkit";
import languageSwitchReducer from "./reducers/language-switcher";

export default configureStore({
  reducer: {
    languageSwitch: languageSwitchReducer,
  },
});
