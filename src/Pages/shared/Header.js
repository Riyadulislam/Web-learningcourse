import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { authContext } from '../../Context/Authprovider/Authprovider';
import { FaEdgeLegacy } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import './Header.css'


const Header = () => {
    const {user,logout}=useContext(authContext)
    const handle=()=>{
        console.log(user?.displayName)
    }
    const handlesingout=()=>{
        logout()
        .then(()=>{})
        .catch(error=>console.error(error))
      }
    console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg"  className='header'>
      <Container>
       <FaEdgeLegacy className='headerc me-4' style={{width:'30px'}}></FaEdgeLegacy>
        <Navbar.Brand href="#home" ><h4 className='headerc'>Web Development Course</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features" >
            <Link className='headerc'  to='/'>Home</Link>
           
            </Nav.Link>
            <Nav.Link href="#features">
            <Link className='headerc' to='/info'>Courses</Link>
            </Nav.Link>
            <Nav.Link href="#pricing"><Link className='headerc' to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link href="#pricing">  <Link className='headerc' to='/blog'>Blog</Link></Nav.Link>
          
            
          </Nav>

          <Nav>
            {
                user?.uid?
                <>
                <div className='d-flex align-items-center justify-content-between'>
                 <Image data-tip={user.displayName} style={{height:'50px'}} roundedCircle src={user?.photoURL} onClick={handle}></Image>
                 <Link className='headerc'  onClick={handlesingout}>Logout</Link>
                 </div>
                 <ReactTooltip place="top" type="dark" effect="float"/>
           
                </>
               
                : <Link className='me-2 headerc' to='/login'>Login</Link>

            }
           
                
           {/* {
            user?.uid ?
            <>
              <span> {user?.displayName}</span>
              <Button  onClick={handlesingout}>Logout</Button>
            </>
          
            : <>
            <Link to='/login'> Login </Link>
          
            </>


           } */}
          
        
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;