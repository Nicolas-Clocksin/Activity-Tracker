import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpModal from '../modals/SignUpModal';

function Login({users, setUsers, setSelectedUser}){
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
            <SignUpModal setUsers={setUsers}/>
      </Form>
    )
}
export default Login