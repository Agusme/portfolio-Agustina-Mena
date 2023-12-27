import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
const Navigation = () => {
    return (
       
       <>
    <Navbar expand="lg" bg='white' fixed="top"> 
      <Container >
      <Navbar.Brand>
          <p
            className="d-inline-block align-top color-cemento fw-bold"
          >Agustina Mena </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='fw-bold color-cemento'>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">PROYECTOS</Nav.Link>
            <Nav.Link href="#action2">SOBRE MI</Nav.Link>
            <Nav.Link href="#action2">CONTACTO</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    );
};

export default Navigation;