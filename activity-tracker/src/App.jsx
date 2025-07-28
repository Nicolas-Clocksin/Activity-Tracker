import React, { useState } from 'react'
import ChangeDateModal from './modals/ChangeDateModal';
import ActivityList from './components/ActivityList';
import Header from './components/Header'
function App() {
  const timestamp = Date.now();
  const [selectedDate, setSelectedDate] = useState(new Date(timestamp));
  const [activities, setActivities]= useState([]);
  return(
    <div className='activity-tracker-container'>
    <Header selectedDate = {selectedDate} setSelectedDate = {setSelectedDate} />
    <ActivityList activities={activities} setActivities={setActivities} selectedDate={selectedDate} />
    </div>
  );
}

export default App
