import React from "react";

import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS } from "date-fns/locale";

// Setup date-fns localization
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Design Conference",
    start: new Date(2023, 9, 23, 8, 0),
    end: new Date(2023, 9, 23, 9, 0),
    resource: { color: "bg-purple-200" },
  },
  {
    title: "Event Name",
    start: new Date(2023, 9, 23, 9, 0),
    end: new Date(2023, 9, 23, 10, 0),
    resource: { color: "bg-orange-200" },
  },
  // Add more events as needed
];

const MyCalendar = () => {
  return (
    <div className="my-calendar-container mx-auto p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.DAY}
        views={{ day: true, week: true, month: true }}
        style={{ height: 600 }}
        components={{
          event: EventComponent,
        }}
        className="bg-white shadow-lg rounded-lg border border-gray-200"
      />
    </div>
  );
};

// Custom Event Component for styling individual events
const EventComponent = ({ event }) => (
  <div className={`rounded-lg p-2 ${event.resource.color} text-sm font-medium`}>
    <p className="text-indigo-600">{event.title}</p>
    <p>{format(event.start, "hh:mm a")}</p>
  </div>
);

const Schedule = () => {
  const scheduleData = [
    {
      title: "Lesson with Emma K.",
      time: "Today 08:00 AM",
      address: "56 Davion Mission Suite 157",
      location: "Sydney",
      image:
        "https://images.unsplash.com/photo-1719937206589-d13b6b008196?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
    },
    {
      title: "Test Prep with Liam",
      time: "Today 09:00 AM",
      address: "853 Moore Flats Suite 158",
      location: "Sweden",
      image:
        "https://images.unsplash.com/photo-1719937206589-d13b6b008196?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Rescheduled Lesson - Olivia",
      time: "Today 10:45 AM",
      address: "646 Walter Road Apt. 571",
      location: "Turks and Caicos Islands",
      image:
        "https://images.unsplash.com/photo-1719937206589-d13b6b008196?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Break",
      time: "Today 11:30 AM to 01:30 PM",
      address: "506 Satterfield Tunnel Apt. 963",
      location: "San Marino",
      image:
        "https://images.unsplash.com/photo-1719937206589-d13b6b008196?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="p-6 max-w-xs sm:max-w-sm lg:max-w-md  bg-white rounded-lg shadow-lg border border-solid border-slate-200">
        <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
        <div className="space-y-4">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.time}</p>
                <p className="text-sm text-gray-500">{item.address}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          See More
        </button>
      </div>
      <MyCalendar />
    </div>
  );
};

export default Schedule;
