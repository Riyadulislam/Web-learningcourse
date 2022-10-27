import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaDev } from 'react-icons/fa';


const Detailspage = () => {
    const course=useLoaderData()
    const {name,title,img,rating,id,uploadDate}=course
    console.log( 'value',course)
    return (
        <div>
          
         <div className='mb-4 mt-5'>
    <Card className="text-center"   style={{height:'500px',width:'300px'}}>
        <div className='d-flex justify-content-between'>
        <Card.Header>{name}</Card.Header>
        <FaDev    style={{height:'40px',width:'40px'}}></FaDev>
        </div>
     
      <Image className='me-4' src={img} 
        style={{height:'200px',width:'300px'}}
        ></Image>
      <Card.Body>
        <Card.Title>{title}</Card.Title> 
        <div className='d-flex justify-content-between '>
            <p>number: {rating.number}</p>
            <p>badge:{rating.badge}</p>
        </div>
        <p> Date:{uploadDate}</p>
        <Link to='/info'><Button variant="primary">Get course</Button></Link>
      </Card.Body>
      
    </Card>  
        </div>
        </div>
    );
};

export default Detailspage;