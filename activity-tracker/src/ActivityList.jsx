import AddActivityModal from './AddActivityModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
function ActivityList({activities, setActivities}){
  function removeActivity(index){
    setActivities(prev => prev.filter((_, i) => i !== index));
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
                        <div className='activity-second-row'>
                          <span className='activity-notes'>{activity.notes}</span>
                          <div className='activity-icons'>
                            <i onClick={()=> removeActivity(index)}class="bi bi-trash"></i>
                            <i class="bi bi-pencil"></i>
                          </div>
                        </div>
                      </li>
                    ) : null
                  )
                }
            </ul>
            <AddActivityModal activities={activities} setActivities={setActivities}/>
        </div>
    )
}

export default ActivityList