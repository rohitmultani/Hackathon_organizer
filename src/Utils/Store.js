import { configureStore } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit");
const noteSlice = createSlice({
  name: "Notes",
  initialState: { data: 0, name: 0, reset: false },
  reducers: {
    upDateData(state, action) {
      state.data = action.payload;
    },
    upDateName(state, action) {
      state.name = action.payload;
    },
    resetState(state, action) {
      state.reset = action.payload;
    },
  },
});
const dataSlice = createSlice({
  name: "Data",
  initialState: {},
  reducers: {
    upDate(state, action) {
      // state.push(action.payload);
      state.data = action.payload;
    },
  },
});
const store = configureStore({
  reducer: { Notes: noteSlice.reducer, Data: dataSlice.reducer },
});
export const { upDateData, upDateName, resetState } = noteSlice.actions;
export const { upDate } = dataSlice.actions;
export default store;