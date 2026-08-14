import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import {
  addEvent,
  updateEventDate,
} from "../app/calendarSlice";

function Calendar() {
  const dispatch = useDispatch();

  // Get events from Redux
  const events = useSelector(
    (state) => state.calendar.events
  );

  // STEP 18: useMemo
  const scheduledEvents = useMemo(() => {
    return events.filter((event) => event.date);
  }, [events]);

  // STEP 19: useCallback
  // Handles dragging a post to another date
  const handleEventDrop = useCallback(
    (info) => {
      dispatch(
        updateEventDate({
          id: info.event.id,
          date: info.event.startStr,
        })
      );

      console.log("Post moved!");
      console.log("Post:", info.event.title);
      console.log("New date:", info.event.startStr);
    },
    [dispatch]
  );

  // STEP 19: useCallback
  // Handles creating a post by clicking a date
  const handleDateClick = useCallback(
    (info) => {
      const title = prompt("Enter post title:");

      if (title) {
        const newEvent = {
          id: Date.now().toString(),
          title: title,
          date: info.dateStr,
        };

        dispatch(addEvent(newEvent));
      }
    },
    [dispatch]
  );

  // STEP 19: useCallback
  // Handles clicking an existing post
  const handleEventClick = useCallback(
    (info) => {
      alert(
        `Post: ${info.event.title}\nDate: ${info.event.startStr}`
      );
    },
    []
  );

  return (
    <div>
      <h1>Post Scheduling Calendar</h1>

      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
        ]}
        initialView="dayGridMonth"
        events={scheduledEvents}
        editable={true}
        selectable={true}
        eventDrop={handleEventDrop}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div>
  );
}

export default Calendar;