import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "languageSwitcher",
  initialState: {
    language: localStorage.getItem("language") || "hu",
  },
  reducers: {
    switchLanguage: (state) => {
      state.language === "hu"
        ? (state.language = "en-gb")
        : (state.language = "hu");
      localStorage.setItem("language", state.language);
    },
  },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;
