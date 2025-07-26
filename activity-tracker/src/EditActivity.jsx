import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function EditActivityModal({ index, activities, setActivities, show, onClose}) {
    const [activityName, setActivityName] = useState('');
    const [activityDay, setActivityDay] = useState();
    const [activityMonth, setActivityMonth] = useState();
    const [activityYear, setActivityYear] = useState();
    const [activityNote, setActivityNote] = useState('');
    const [activityTime, setActivityTime] = useState();
    const [activityDateTime, setActivityDateTime] = useState('');

    useEffect(() => {
        if (show && activities[index]) {
          const activity = activities[index];
          setActivityName(activity.name);
          setActivityDay(activity.day);
          setActivityMonth(activity.month);
          setActivityYear(activity.year);
          setActivityNote(activity.notes);
          setActivityTime(activity.time);
          
          const [hourStr, minuteStr] = activity.time.split(':');
          const hour = parseInt(hourStr, 10);
          const minute = parseInt(minuteStr, 10);
      
        
          const date = new Date(activity.year, activity.month - 1, activity.day, hour, minute);
      
         
          const formattedDateTime = date.toISOString().slice(0, 16); 
          setActivityDateTime(formattedDateTime);
        }
      }, [show, index, activities]);

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
     function updateActivity(){
        const updatedActivities = activities.map((activity, i)=>{
                if(i === index){
                    return {...activity, 
                        name: activityName,
                        day: activityDay,
                        month: activityMonth,
                        year: activityYear,
                        time: activityTime,
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
    return(
        <>
  
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Activity</Modal.Title>
          </Modal.Header>
          <Form>
              <Form.Group className="mb-3" >
                  <Form.Label>Activity</Form.Label>
                  <Form.Control type="text" value={activityName} onChange={(event)=>updateActivityName(event)} placeholder="Enter new activity" />
              </Form.Group>

              <Form.Group className="mb-3" >
                  <Form.Label>Date/Time</Form.Label>
                  <Form.Control type="datetime-local" value={activityDateTime} onChange={(event)=> updateDateTime(event)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Control as="textarea" rows={3}
                                value={activityNote}
                                onChange={(event) => updateNote(event)} 
                                placeholder="Add notes about the activity" />
              </Form.Group>
              </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
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
