import React, { useState } from 'react'
import ChangeDateModal from './modals/ChangeDateModal';
import ActivityList from './components/ActivityList';
import Login from './components/Login';
import Header from './components/Header'
function App() {
  const timestamp = Date.now();
  const [selectedDate, setSelectedDate] = useState(new Date(timestamp));
  const [activities, setActivities]= useState([]);
  const [user, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([{
      id: 1,
      email: 'useremail@test.com',
      password: 'password'
    },
    {
      id: 2,
      email: 'test@user.com',
      password: 'password'
    }
  ])
  
  if(user){
  return(
    <div className='activity-tracker-container'>
    <Header selectedDate = {selectedDate} setSelectedDate = {setSelectedDate} />
    <ActivityList activities={activities} setActivities={setActivities} selectedDate={selectedDate} />
    </div>
  );
}
else{
  return(
    <Login users={users} setUsers={setUsers} setSelectedUser={setSelectedUser}/>
  )
}
}

export default App
