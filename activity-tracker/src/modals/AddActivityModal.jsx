import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import Alerts from '../components/Alerts'
import 'bootstrap/dist/css/bootstrap.min.css'

function AddActivityModal({setActivities}){
    const [activityName, setActivityName] = useState('');
    const [activityNote, setActivityNote] = useState('');
    const [activityDateTime, setActivityDateTime] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function updateActivityName(event){
       setActivityName(event.target.value);
    }
    function updateDateTime(event){
        setActivityDateTime(event.target.value);
    }
    function updateNote(event){
        setActivityNote(event.target.value);
    }
    function addActivity() {
      const [date, time] = activityDateTime.split('T');
      const [year, month, day] = date.split('-').map(Number);
      const [hour, minute] = time.split(':').map(Number);
    
      const localDate = new Date(year, month - 1, day, hour, minute);
      console.log(localDate);
      if(activityName === '' || activityDateTime === ''){
        console.log('was empty');
      }
      else{
        setActivities(prev => [
          ...prev,
          {
            name: activityName,
            dateTime: localDate,
            notes: activityNote,
          }
        ]);
        handleClose();
      }
    }
     
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Add Activity
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a New Activity</Modal.Title>
            </Modal.Header>
            <Form className="p-4 shadow-sm">
                <Form.Group className="mb-3" >
                    <Form.Label>Activity</Form.Label>
                    <Form.Control type="text" onChange={(event)=>updateActivityName(event)} placeholder="Enter new activity" />
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
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addActivity}>
                Add Activity
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default AddActivityModal