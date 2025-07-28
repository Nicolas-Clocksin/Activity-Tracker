import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function EditActivityModal({ index, activities, setActivities, show, onClose}) {
    const [activityName, setActivityName] = useState('');
    const [activityNote, setActivityNote] = useState('');
    const [activityDateTime, setActivityDateTime] = useState(null);

    useEffect(() => {
        if (show && activities[index]) {
          const activity = activities[index];
          setActivityName(activity.name);
          setActivityNote(activity.notes);
          formatDate(activity.dateTime);
        }
      }, [show, index, activities]);

    function formatDate(dateTime){
      const date = new Date(dateTime);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const formatted = `${year}-${month}-${day}T${hours}:${minutes}`;
      setActivityDateTime(formatted);
    }
    function updateActivityName(event){
        setActivityName(event.target.value);
     }
     function updateDateTime(event){
         setActivityDateTime(event.target.value);
     }
     function updateNote(event){
         setActivityNote(event.target.value);
     }
     function updateActivity(){
        const updatedActivities = activities.map((activity, i)=>{
                if(i === index){
                    return {...activity, 
                        name: activityName,
                        dateTime: activityDateTime,
                        notes: activityNote
                    }
               }
               else{
                return activity;
               }
        })
        setActivities(updatedActivities);
        onClose();
     }
     function closeOut(){
      setActivityName('');
      setActivityNote('');
      setActivityDateTime(null);
      onClose();
     }
    return(
        <>
  
        <Modal show={show} onHide={closeOut}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Activity: {activityName}</Modal.Title>
          </Modal.Header>
          <Form>
              <Form.Group className="mb-3" >
                  <Form.Label>Activity</Form.Label>
                  <Form.Control 
                    type="text"
                    value={activityName} 
                    onChange={(event)=>updateActivityName(event)} 
                    placeholder="Enter new activity" 
                    />
              </Form.Group>

              <Form.Group className="mb-3" >
                  <Form.Label>Date/Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={activityDateTime || ''}
                    onChange={updateDateTime}
                  />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Control as="textarea" 
                                rows={3}
                                value={activityNote}
                                onChange={(event) => updateNote(event)} 
                                placeholder="Add notes about the activity" />
              </Form.Group>
              </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeOut}>
              Close
            </Button>
            <Button variant="primary" onClick={updateActivity}>
              Update Activity
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default EditActivityModal
