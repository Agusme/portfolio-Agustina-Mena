import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fotoperfil from '../../assets/fotoperfil.png'
const Main = () => {
    return (
      <div>
    <Container fluid className='marginTop'>
        <Row>
       <Col  className='bg-grey p-2' lg={6} md={6} sm={12}>

       <div className='d-flex align-items-center justify-content-center mt-4 pb-5'>
       <img src={fotoperfil} alt="fotoPerfil"  className='d-flex justify-content-center img-fluid w-50' />
</div>

</Col >
<Col  className='bg-brown p-2 px-5 text-center' lg={6} md={6} sm={12}>
<h1 className='fw-bold display-1 text-white mt-4'>&lt;HOLA a todos&gt;</h1>
<p className='fw-bold color-aqua fs-1'>Soy Agustina Mena</p>
<p className='text-white fw-semibold mt-2'>Developer FullStack MERN y Psicopedagoga</p>
</Col >
        </Row>
    </Container>
      </div>
    );
};

export default Main;