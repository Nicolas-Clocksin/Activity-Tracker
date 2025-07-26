import React, { useState } from 'react'

function ActivityList(){
    const timestamp = Date.now();
    const dateObject = new Date(timestamp);
    const [activityName, setActivityName] = useState('');
    const [activityDay, setActivityDay] = useState();
    const [activityMonth, setActivityMonth] = useState();
    const [activityYear, setActivityYear] = useState();
    const [activityNote, setActivityNote] = useState('');
    const [activityTime, setActivityTime] = useState();
    const [activityDateTime, setActivityDateTime] = useState('');

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
    function updateActivityName(event){
       setActivityName(event.target.value)
    }
    function updateDateTime(event){
        const dayTimeSubmitted = event.target.value;
        const date = new Date(dayTimeSubmitted);

        setActivityDay(date.getDay());
        setActivityMonth(date.getMonth()+1);
        setActivityYear(date.getFullYear());
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setActivityTime(time);
        setActivityDateTime(event.target.value);
    }
    function updateNote(event){
        setActivityNote(event.target.value);
    }
    function addActivity(){
        console.log('add activity');
        setActivities(
            prev => ([...prev, 
                {
                    name: activityName,
                    day: activityDay,
                    time: activityTime,
                    month: activityMonth,
                    year: activityYear,
                    notes: activityNote
                }
            ])
        );
        setActivityName('');
        setActivityNote('');
        setActivityTime('');
        setActivityDateTime('');
    }
    return(
        <div>
            <ul>
                {
                
                activities.map((activity, index) =>
                    (activity.day === new Date().getDay() &&
                     activity.month === new Date().getMonth() + 1 &&
                     activity.year === new Date().getFullYear()) ? (
                      <li className="activity-item" key={index}>
                        <div className='activity-row'>
                          <span className='activity-name'>{activity.name} </span>
                          <span className='activity-time'>{activity.time}</span>
                        </div>
                        <span className='activity-notes'>{activity.notes}</span>
                      </li>
                    ) : null
                  )
                }
            </ul>
            <div className='add-activity'>
                <input type="text" placeholder='Name of activity' value={activityName} onChange={updateActivityName}/>
                <input id="time" value={activityDateTime} onChange={(event)=> updateDateTime(event)} type="datetime-local"/>
                <textarea value={activityNote} onChange={(event) => updateNote(event)} placeholder='Add Notes for Activity'></textarea>
            <button onClick={addActivity}>Add Activity</button>
            </div>
        </div>
    )
}

export default ActivityList