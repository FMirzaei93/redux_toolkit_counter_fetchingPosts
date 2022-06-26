import { configureStore } from "@reduxjs/toolkit";
import anyName from "./general";
// because it's an export default, so we can call it with any name we'd like

export const store = configureStore({
  reducer: {
    general: anyName,
  },
});
