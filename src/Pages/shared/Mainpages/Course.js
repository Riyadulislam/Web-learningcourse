import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {name,title,img,id,uploadDate}=course;
    return (
      
         <div className='mb-4 mt-5'>
             <Card className="text-center"   style={{height:'500px',width:'300px'}}>
      <Card.Header>{name}</Card.Header>
      <Image className='me-4' src={img} 
        style={{height:'200px',width:'300px'}}
        ></Image>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
        <Link to={`/info/${id}`}><Button variant="primary">Get course</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted"> date:{uploadDate}</Card.Footer>
    </Card>  
        </div>
    );
};

export default Course;