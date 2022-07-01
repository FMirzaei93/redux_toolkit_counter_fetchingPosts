import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "general",
  // Everytime that one of these actions are dispatched(from App.js), the generated type will be: name/actionName, e.g. general/hasStarted

  initialState: {
    isActive: false,
    isPaused: false,
    count: 0,
  },
  reducers: {
    hasStarted: (state) => {
      state.isActive = true;
      state.isPaused = false;
    },
    changePause: (state) => {
      state.isPaused = !state.isPaused;
    },
    increment: (state, action) => {
      state.count += action.payload.number;
    },
  },
});

export const { hasStarted, changePause, increment } = counterSlice.actions;

export default counterSlice.reducer;
