import React, { useState } from "react";
import quranicReminders from "./quranicReminder";

const ReminderComponent = () => {
  const [randomReminder, setRandomReminder] = useState(null);

  const generateRandomReminder = () => {
    const randomIndex = Math.floor(Math.random() * quranicReminders.length);
    setRandomReminder(quranicReminders[randomIndex]);
  };
  return (
    <main className="flex flex-col items-center justify-center h-screen lg:bg-[url('/medina.webp')] bg-[url('/mobile.jpeg')] bg-no-repeat bg-cover bg-center">
      <div className="p-4 rounded-md lg:w-3/6 lg:h-3/4 flex flex-col items-center justify-center lg:relative">
        <h2 className="text-4xl font-bold absolute lg:top-20 lg:mt-10 top-10">Quranic Reminders</h2>
        {randomReminder ? (
          <div className="flex flex-col items-center justify-center bg-slate-500 bg-opacity-50 p-4 rounded shadow-md text-slate-50">
            <p className="text-2xl font-bold text-center mb-4">{randomReminder.reminder}</p>
            <p className="text-center text-sm">{randomReminder.verse}</p>
          </div>
        ) : (
          <p className="text-center text-xl text-slate-50">Click the button to get a Quranic Reminder</p>
        )}
        <button onClick={generateRandomReminder} className="border-2 rounded-md border-slate-50 px-4 py-2 mt-16 font-medium bg-slate-500 bg-opacity-50 text-slate-50">Get Reminder</button>
      </div>
      <p className="absolute bottom-0 w-full text-center text-sm text-white py-2">Built with &hearts; by Sahil</p>
    </main>
  );
};

export default ReminderComponent;
