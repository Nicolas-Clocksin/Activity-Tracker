import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
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
    function addActivity(){
        setActivities(
            prev => ([...prev, 
                {
                    name: activityName,
                    dateTime: activityDateTime,
                    notes: activityNote,
                }
            ])
        );
        setActivityName('');
        setActivityNote('');
        setActivityDateTime('');
        console.log('Added to list');
        handleClose();
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
                Add Activity
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default AddActivityModal