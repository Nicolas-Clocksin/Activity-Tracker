import React, { useState } from 'react'

function ActivityList({activity}){
    const [activities, setActivities] = useState(activity);
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
            {/* <div className='add-activity'>
                <input type="text" placeholder='Name of activity' value={activityName} onChange={updateActivityName}/>
                <input id="time" value={activityDateTime} onChange={(event)=> updateDateTime(event)} type="datetime-local"/>
                <textarea value={activityNote} onChange={(event) => updateNote(event)} placeholder='Add Notes for Activity'></textarea>
            <button onClick={addActivity}>Add Activity</button>
            </div> */}
        </div>
    )
}

export default ActivityList