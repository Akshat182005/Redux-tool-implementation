import { describe, it, expect } from "vitest";

import calendarReducer, {
  addEvent,
  updateEventDate,
} from "../app/calendarSlice";

describe("Calendar Redux", () => {
  
  it("should add a new scheduled post", () => {
    
    const initialState = {
      events: [],
    };

    const newPost = {
      id: "10",
      title: "Test Post",
      date: "2026-08-25",
    };

    const state = calendarReducer(
      initialState,
      addEvent(newPost)
    );

    expect(state.events).toHaveLength(1);
    expect(state.events[0].title).toBe("Test Post");
    expect(state.events[0].date).toBe("2026-08-25");
  });


  it("should update the post date", () => {

    const initialState = {
      events: [
        {
          id: "1",
          title: "Instagram Post",
          date: "2026-08-15",
        },
      ],
    };

    const state = calendarReducer(
      initialState,
      updateEventDate({
        id: "1",
        date: "2026-08-20",
      })
    );

    expect(state.events[0].date).toBe(
      "2026-08-20"
    );
  });

});