import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "@/store/reducers/spotifyReducer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    spotifyReducer: spotifyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
