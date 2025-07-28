import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function SignUpModal({setUsers}){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function updateUserEmail(event){
        setUserEmail(event.target.value);
    }
    function updateUserPassword(event){
        setUserPassword(event.target.value);
    }

    function createNewUser(){
        if(userEmail != null && userPassword != null){
            setUsers(prev => [...prev, {
                id: Math.floor(Math.random() * 100),
                email: userEmail,
                password: userPassword
            }]);
        }
        else{
            console.log("No info entered")
        }
        handleClose();
    }

    return(
        <>
        <Button variant='primary' onClick={handleShow}>
            Sign Up
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Form className='p-4 shadow-sm'>
                <Form.Group className='mb-3'>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type='email'
                        onChange={(event)=>updateUserEmail(event)}
                        value={userEmail}
                    />
                </Form.Group>
                <Form.Group className='mb-4'>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type='password'
                        onChange={(event)=>updateUserPassword(event)}
                        value={userPassword}
                        />
                </Form.Group>
            </Form>
          <Modal.Footer>
            <Button 
                variant='secondary' 
                onClick={handleClose}>
                Close
            </Button>
            <Button 
                variant='primary' 
                onClick={createNewUser}>
                Sign Up
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )

}
export default SignUpModal