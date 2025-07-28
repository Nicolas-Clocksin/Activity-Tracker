import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({users, setSelectedUser}){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function updateEmail(event){
        setUserEmail(event.target.value);
    }
    function updatePassword(event){
        setUserPassword(event.target.value);
    }
    function loginUser(){
        users.map((user)=>{
            if(user.email === userEmail && user.password === userPassword){
                setSelectedUser(user)
            }
            else{
                return null;
            }
        })
    }
    return(
      <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    value={userEmail}
                    onChange={(event)=> updateEmail(event)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={userPassword}
                    onChange={(event)=>updatePassword(event)}
                    />
            </Form.Group>
            <Button variant='primary' onClick={loginUser}>Login</Button>
      </Form>
    )
}
export default Login