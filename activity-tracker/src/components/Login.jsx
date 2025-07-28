import React, { useState } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';
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
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow-sm">
            <h3 className="text-center mb-4">Login</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={userEmail}
                  onChange={updateEmail}
                />
              </Form.Group>
    
              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={userPassword}
                  onChange={updatePassword}
                />
              </Form.Group>
    
              <div className="d-flex justify-content-between">
              <SignUpModal setUsers={setUsers} />
                <Button variant="success" onClick={loginUser}>
                  Login
                </Button>
               
              </div>
            </Form>
          </Card>
        </Container>
      );
}
export default Login