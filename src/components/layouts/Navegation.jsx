import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logofigm.png'
const Navigation = () => {
    return (
       
       <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top"> 
      <Container >
      <Navbar.Brand>
          <img
            src={logo}
            alt="Logo de la Empresa"
            height="40"
            className="d-inline-block align-top logounico"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='fw-bold'>
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