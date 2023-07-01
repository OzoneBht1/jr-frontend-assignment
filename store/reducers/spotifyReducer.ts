import { IToken } from "@/types/interface/token";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Partial<IToken> = {};

const spotifySlice = createSlice({
  name: "spotifySecret",
  initialState: initialState,
  reducers: {
    setToken(state, action: PayloadAction<IToken>) {
      state.access_token = action.payload.access_token;
      state.token_type = action.payload.token_type;
      state.expires_in = action.payload.expires_in;
    },
  },
});

export default spotifySlice.reducer;
export const spotifyActions = spotifySlice.actions;
