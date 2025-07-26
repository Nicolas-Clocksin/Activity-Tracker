import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddActivityModal({activitites, setActivities}){
    const [activityName, setActivityName] = useState('');
    const [activityDay, setActivityDay] = useState();
    const [activityMonth, setActivityMonth] = useState();
    const [activityYear, setActivityYear] = useState();
    const [activityNote, setActivityNote] = useState('');
    const [activityTime, setActivityTime] = useState();
    const [activityDateTime, setActivityDateTime] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        handleClose();
    }
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a New Activity</Modal.Title>
            </Modal.Header>
            <Form>
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
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default AddActivityModal