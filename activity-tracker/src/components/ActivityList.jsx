import React, { useState } from 'react'
import AddActivityModal from '../modals/AddActivityModal'
import 'bootstrap-icons/font/bootstrap-icons.css'
import EditActivityModal from '../modals/EditActivityModal'
function ActivityList({activities, setActivities, selectedDate}){
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
  const selectedDateString = selectedDate.getFullYear() + '-' +
  String(selectedDate.getMonth() + 1).padStart(2, '0') + '-' +
  String(selectedDate.getDate()).padStart(2, '0');
  return (
    <div>
      <ul>
        {
          activities
            .filter(activity => {
              const activityDate = new Date(activity.dateTime);
              const activityDateString = activityDate.getFullYear() + '-' +
                String(activityDate.getMonth() + 1).padStart(2, '0') + '-' +
                String(activityDate.getDate()).padStart(2, '0');
              return activityDateString === selectedDateString;
            })
            .map((activity, index) => (
              <li className="activity-item" key={index}>
                <div className='activity-row'>
                  <span className='activity-name'>{activity.name}</span>
                  <span className='activity-time'>
                    {new Date(activity.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className='activity-second-row'>
                  <span className='activity-notes'>{activity.notes}</span>
                  <div className='activity-icons'>
                    <i onClick={() => removeActivity(index)} className="bi bi-trash"></i>
                    <i onClick={() => handleEdit(index)} className="bi bi-pencil"></i>
                  </div>
                </div>
              </li>
            ))
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