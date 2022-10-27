import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';

const Infocourse = () => {
    const [courses,setCourses]=useState([])
    
  
    useEffect(()=>{
        fetch('http://localhost:7000/course')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <div>
            
            <Container>
                <Row>
               
                    <Col lg="4">
                    {
                        courses.map(course=><p><Link to={`/info/${course.id}`}>{course.name}</Link></p>)
                    }
                    </Col>
                    <Col lg="8">
                        {
                            courses.map(course=><Course key={course.id} course={course}></Course>)
                        }
                       
                    </Col>
                    
                </Row>
            </Container>

        </div>
    );
};

export default Infocourse;