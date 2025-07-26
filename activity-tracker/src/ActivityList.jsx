import React, { useState } from 'react'

function ActivityList(){
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
        }
    ]);
    return(
        <div>
            <ul>
                {
                
                activities.map((activity, index)=>
                    <li className="activity-item" key={index}>
                        <div className='activity-row'>
                            <span className='activity-name'>{activity.name} </span>
                            <span className='activity-time'>{activity.time}</span>
                        </div>
                        <span className='activity-notes'>{activity.notes}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ActivityList