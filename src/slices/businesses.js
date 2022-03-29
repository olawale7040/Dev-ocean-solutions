import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  business: [],
};

const slice = createSlice({
  name: "business",
  initialState,
  reducers: {},
});

export const reducer = slice.reducer;
// export const { } = slice.actions;

export default slice;
