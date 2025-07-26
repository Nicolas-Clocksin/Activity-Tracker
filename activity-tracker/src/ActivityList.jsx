import React, { useState } from 'react'
import AddActivityModal from './modals/AddActivityModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditActivityModal from './modals/EditActivityModal';
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
                    
                      <li className="activity-item" key={index}>
                        <div className='activity-row'>
                          <span className='activity-name'>{activity.name} </span>
                          <span className='activity-time'>{new Date(activity.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className='activity-second-row'>
                          <span className='activity-notes'>{activity.notes}</span>
                          <div className='activity-icons'>
                            <i onClick={()=> removeActivity(index)} className="bi bi-trash"></i>
                            <i onClick={()=> handleEdit(index)} className="bi bi-pencil"></i>
                          </div>
                        </div>
                      </li>
                   
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