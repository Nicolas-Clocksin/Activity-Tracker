import React, { useState } from 'react'

import ActivityList from './ActivityList';
import Header from './Header'
function App() {
  const timestamp = Date.now();
  const dateObject = new Date(timestamp);
  const [selectedDate, setSelectedDate] = useState(dateObject);
  const [activities, setActivities]= useState([]);
  return(
    <div className='activity-tracker-container'>
    <Header selectedDate = {selectedDate} currentDate={dateObject} />
    <ActivityList activities={activities} setActivities={setActivities} />
    </div>
  );
}

export default App
