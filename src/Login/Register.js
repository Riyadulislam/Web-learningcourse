import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../Context/Authprovider/Authprovider';

const Register = () => {
    const [error,setError]=useState(' ')
  const {createUser,updateuser}=useContext(authContext)

    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photourl.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password,name,photoURL)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user) 
            setError(' ')
            form.reset();
            updateuser(name,photoURL);
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })

    }
    return (
        <Form className='mt-5 mx-auto' onSubmit={handleRegister} style={{ width: '300px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name="photourl" type="text" placeholder="Enter your photo url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Register
        </Button>
         <h1>{error}</h1>
      </Form>
    );
};

export default Register;