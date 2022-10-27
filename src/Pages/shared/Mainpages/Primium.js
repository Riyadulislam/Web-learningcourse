import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Primium = () => {
    const course=useLoaderData()
    const {name,title,img,rating,id,uploadDate}=course

    return (
        <div>
         <h1 className='text-primary'>{name}</h1>
         <p>{title}</p>
        </div>
    );
};

export default Primium;