import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface navState {
  active: number;
}

const initialState: navState = {
  active:1,
};

export const navSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<navState>) => {
      state.active = action.payload.active;
    },
  },
});

export const { setActive } = navSlice.actions;

export default navSlice.reducer;
