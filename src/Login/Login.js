import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/Authprovider/Authprovider';


const Login = () => {
    const {googleProviderLogin, singinlogin}=useContext(authContext)
   

    const provider =new GoogleAuthProvider();
    const location=useLocation();
    
    const from = location.state?.from?.pathname || '/';
    const navigate=useNavigate();
    
    
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        singinlogin(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
           navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error(error)
        })
       

    }
    const handleGoogleLogin=()=>{
        googleProviderLogin(provider)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error(error)
        })
    }
    
    return (
        <Form className='mt-5 mx-auto' onSubmit={handleLogin} style={{ width: '300px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br></br>
        
        
        <Button variant="outline-primary" className='mt-5' onClick={handleGoogleLogin} >Login With Google</Button>
        <p>if you are not register go to <Link to='/register'>Register</Link></p>
   
      
      </Form>
    );
};

export default Login;