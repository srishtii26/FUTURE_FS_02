import Sidebar from "../components/Sidebar";

import {
  useState,
} from "react";

export default function Calendar() {

  const [meetings, setMeetings] =
    useState([

      {
        title: "Client Meeting",
        time: "10:00 AM",
        date: "Monday",
        priority: "High",
        client: "Pixel Studio",
      },

      {
        title: "Sales Follow-up",
        time: "1:30 PM",
        date: "Tuesday",
        priority: "Medium",
        client: "Growthly",
      },

      {
        title: "Proposal Discussion",
        time: "4:00 PM",
        date: "Wednesday",
        priority: "Low",
        client: "Nova Agency",
      },

    ]);

  const addEvent = () => {

    const title =
      prompt(
        "Enter meeting title"
      );

    if (!title) return;

    const client =
      prompt(
        "Enter client name"
      );

    const date =
      prompt(
        "Enter day"
      );

    const time =
      prompt(
        "Enter time"
      );

    const priority =
      prompt(
        "Priority: High / Medium / Low"
      );

    const newMeeting = {

      title,
      client,
      date,
      time,
      priority,

    };

    setMeetings([
      ...meetings,
      newMeeting,
    ]);
  };

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">

          <div>

            <h1>
              Calendar
            </h1>

            <p>
              Schedule meetings & tasks
            </p>

            <button
              className="calendar-btn"
              onClick={addEvent}
            >
              + Add Event
            </button>

          </div>

        </div>

        {/* CALENDAR GRID */}
        <div className="calendar-grid">

          {meetings.map(
            (meeting, index) => (

              <div
                className="calendar-card"
                key={index}
              >

                <div className="meeting-top">

                  <h2>
                    {meeting.title}
                  </h2>

                  <span
                    className={`priority-badge ${meeting.priority.toLowerCase()}`}
                  >
                    {meeting.priority}
                  </span>

                </div>

                <p>
                  {meeting.date}
                </p>

                <h4>
                  {meeting.client}
                </h4>

                <span>
                  {meeting.time}
                </span>

              </div>

            )
          )}

        </div>

      </main>

    </div>

  );
}