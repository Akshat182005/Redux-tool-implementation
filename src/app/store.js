import calendarReducer from "./calendarSlice";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    calendar: calendarReducer,
  },
});