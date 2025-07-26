import React, { useState } from 'react'

import ActivityList from './ActivityList';
import Header from './Header'
function App() {
  const timestamp = Date.now();
  const dateObject = new Date(timestamp);
  const [activities, setActivities]= useState([
    {
        name: 'Activity Name',
        day: new Date().getDay(),
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        time: dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        notes: 'notes about an activity'
    },
    {
        name: 'Activity Name',
        day: new Date().getDay(),
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        time: '05:00 PM',
        notes: 'notes about an activity'
    },
    {
        name: 'Activity Name',
        day: 10,
        year: 2025,
        month: 3,
        time: '05:00 PM',
        notes: 'notes about an activity'
    }
]);
  return(
    <div className='activity-tracker-container'>
    <Header />
    <ActivityList activity={activities}/>
    </div>
  );
}

export default App
