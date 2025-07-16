import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import flagEs from "../../assets/spain2.png";
import flagEn from "../../assets/usa.png";

const Navigation = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", flag: flagEn },
    { code: "es", flag: flagEs },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();
  const { projects, about, contact } = t("navbar");


  
  return (
    <>
      <Navbar expand="lg" fixed="top" bg="light">
        <Container className="pointer">
          <Navbar.Brand>
            <ScrollLink
              to="main"
              smooth={true}
              duration={500}
              className="text-secondary link-underline link-underline-opacity-0 underline-navbar "
            >
              AM
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="fw-bold">
            <Nav className="ms-auto" navbarScroll>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="m-4  text-secondary text-decoration-none underline-navbar yellow"
              >
                <li className=" fw-bold">{about} </li>
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="m-4  text-secondary text-decoration-none underline-navbar"
              >
                <li className=" fw-bold">{projects}</li>
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="m-4  text-secondary text-decoration-none underline-navbar"
              >
                <li className=" fw-bold">{contact} </li>
              </ScrollLink>
                  {languages.map((lng) => {
                return (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`custom-button  mx-4  me-auto`}
                  >
                    {lng.lang}
                    <img
                      src={lng.flag}
                      alt={lng.code}
                      className={`${
                        lng.code === i18n.language ? "selected" : ""
                      }  flag-size`}
                    />
                  </button>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
