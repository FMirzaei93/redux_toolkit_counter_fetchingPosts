import { configureStore } from "@reduxjs/toolkit";
import anyName from "./slices/general";
import postsReducer from "./webServices/postsSlice";
// because it's an export default, so we can call it with any name we'd like

export const store = configureStore({
  reducer: {
    general: anyName,
    posts: postsReducer,
    //because in postSlice.js, at the end, export defult is exporting the reducer. (for importing a function that is exported defult,
    //we can use any other name while importing it, because anyway, it's the function that gets exported by defult.
    //but for other functions that are not exported default, we need to use the same name with patantheses, unless we use 'as' for assigning
    //it another name.)
  },
});
