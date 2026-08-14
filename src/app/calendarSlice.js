import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      id: "1",
      title: "Instagram Post",
      date: "2026-08-15",
    },
    {
      id: "2",
      title: "LinkedIn Post",
      date: "2026-08-18",
    },
    {
      id: "3",
      title: "Twitter Post",
      date: "2026-08-20",
    },
  ],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },

    updateEventDate: (state, action) => {
      const { id, date } = action.payload;

      const event = state.events.find(
        (event) => event.id === id
      );

      if (event) {
        event.date = date;
      }
    },

    deleteEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const {
  addEvent,
  updateEventDate,
  deleteEvent,
} = calendarSlice.actions;

export default calendarSlice.reducer;