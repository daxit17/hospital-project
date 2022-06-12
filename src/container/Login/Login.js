import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';
import {Button , Form , FormGroup , Label , Input} from 'reactstrap'
 
function Login(props) {
    return (
        <div>
             <Form className='login-form'>
                <h1>
                    <span className='font-weight-bold'>Login Page</span>
                </h1>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type='email' placeholder='Email'></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' placeholder='password'></Input>
                </FormGroup>
                <Button className='btn-lg btn-dark btn-block'>
                    Log in
                </Button>
                <div className='text-center'>
                    <Link>Sign up</Link>
                    <span className='p-2'>|</span>
                    <Link >Forgot password</Link>
                </div>
             </Form>
        </div>
    );
}

export default Login;