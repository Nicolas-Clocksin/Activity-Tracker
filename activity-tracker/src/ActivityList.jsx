import React, { useState } from 'react'
import AddActivityModal from './AddActivityModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditActivityModal from './EditActivity';
function ActivityList({activities, setActivities}){
  const [editingIndex, setEditingIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  function removeActivity(index){
    setActivities(prev => prev.filter((_, i) => i !== index));
  }
  function handleEdit(index){
    setEditingIndex(index);
    setShowEditModal(true);
  }
  function handleCloseEditModal() {
    setShowEditModal(false);
    setEditingIndex(null);
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
                            <i onClick={()=> removeActivity(index)} class="bi bi-trash"></i>
                            <i onClick={()=> handleEdit(index)} class="bi bi-pencil"></i>
                          </div>
                        </div>
                      </li>
                    ) : null
                  )
                }
            </ul>
            <AddActivityModal setActivities={setActivities}/>
            {showEditModal && (
                <EditActivityModal
                  index={editingIndex}
                  activities={activities}
                  setActivities={setActivities}
                  show={true}
                  onClose={handleCloseEditModal}
                  
                />
              )}
        </div>
    )
}

export default ActivityList