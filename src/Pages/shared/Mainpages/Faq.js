import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Frequently Asked Question</h1>
            <Container>
                <Row>
               
                    <Col lg="6">
                    <h3 className='text-primary'>What this site about?</h3>
                    <p>Web development refers to the building, creating, and maintaining of websites. 
                        It includes aspects such as web design, web publishing, web programming, and database
                         management. It is the creation of
                         an application that works over the internet i.e. websites.</p>
                    <h3 className='text-primary'>Why learning Web-development?</h3>
                    <p>Web development refers to the building, creating, and maintaining of websites. It includes 
                        aspects such as web design, web publishing, web programming, and database management. It is 
                        the creation of an application 
                        that works over the internet i.e. websites.</p>
                    </Col>
                    <Col lg="6">
                        <h3 className='text-primary'>How Many videos are there?</h3>
                        <p>Well each courses have 400+ videos,12 assignment weekly zoom conference,24/7 support session,quickly video etc</p>
                        <h3 className='text-primary'>what is web-development?</h3>
                        <p>Web development refers to the building, creating, and maintaining of websites. It includes aspects
                             such as web design, web publishing
                            , web programming, and database management. It is the creation of an application that works over
                             the internet i.e. websites.</p>
                    
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Faq;