import React from 'react';
import html from '../../assets/iconos/html.svg'
import { Container } from 'react-bootstrap';
const StackMern = () => {
    return (
        <div className='bg-verde py-5'>
          <Container>
          <h1 className='text-center text-white fs-1 pb-1 fw-semibold'>Mi Stack tecnologico</h1>

    <div className='bg-grey'>
                  <img src={html} alt="" className='img-fluid'/>

    </div>
          </Container>
        </div>
    );
};

export default StackMern;