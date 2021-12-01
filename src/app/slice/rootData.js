import { createSlice } from "@reduxjs/toolkit";

const rootData = createSlice({
  name: "rootData",
  initialState: {
    data: { expiry: -1, data: null },
    isPending: true,
    error: null,
    isDataChanged: false,
    position: {},
    databaseLink: 'https://docs.google.com/spreadsheets/d/1yRLGaQk3-9UlopftPr5e8F-X3pKkjwLlZWcTwai6_Ds/gviz/tq?tqx=out:json&sheet=published',
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setIsPending: (state, action) => {
      state.isPending = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsDataChanged: (state, action) => {
      state.isDataChanged = action.payload;
    },
  }
})

export const {
  setData,
  setPosition,
  setIsPending,
  setError,
  setIsDataChanged
} = rootData.actions
export default rootData.reducer