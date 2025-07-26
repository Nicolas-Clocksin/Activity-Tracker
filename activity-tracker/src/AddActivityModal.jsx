import React, { useState } from 'react'

function ActivityList({activity}){
    const [activityName, setActivityName] = useState('');
    const [activityDay, setActivityDay] = useState();
    const [activityMonth, setActivityMonth] = useState();
    const [activityYear, setActivityYear] = useState();
    const [activityNote, setActivityNote] = useState('');
    const [activityTime, setActivityTime] = useState();
    const [activityDateTime, setActivityDateTime] = useState('');
    const [activities, setActivities]= useState(activity);
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
            
        </div>
    )
}

export default ActivityList