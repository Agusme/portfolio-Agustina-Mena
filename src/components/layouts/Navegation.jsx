import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';


const Navigation = () => {
  const{t} = useTranslation();
  const {projects, about, contact}= t("navbar")

  return (
    <>
      <Navbar expand="lg" bg="black" variant="dark" fixed="top" className="">
        <Container>
          <Navbar.Brand>
            <ScrollLink to="main" smooth={true} duration={500}>
              Agustina Mena
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="fw-bold">
            <Nav className="ms-auto" navbarScroll>
              <ScrollLink to="projects" smooth={true} duration={500} className='m-2 text-white text-decoration-none'>
                <li className='linkhover fw-bold'>{projects}</li>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className='m-2 text-white text-decoration-none'>
              <li className='linkhover fw-bold'>{about} </li>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className='m-2 text-white text-decoration-none'>
              <li className='linkhover fw-bold'>{contact} </li>
              </ScrollLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
