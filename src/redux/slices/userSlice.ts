import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  latitude: number;
  longitude: number;
}

const initialState: userState = {
  latitude: 0,
  longitude: 0,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<userState>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocation } = userSlice.actions;

export default userSlice.reducer;
