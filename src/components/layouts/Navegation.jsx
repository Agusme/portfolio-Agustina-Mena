import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FiSend } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const { i18n } = useTranslation();
  const languages = ["es", "en"];
  const currentLanguage = i18n.language?.split("-")[0] || "en";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();
  const { projects, about, contact, role, cta } = t("navbar");

  return (
    <header className="portfolio-navbar-wrapper">
      <Navbar expand="lg" fixed="top" className="portfolio-navbar">
        <Container className="portfolio-navbar-container">
          <Navbar.Brand className="portfolio-brand">
            <ScrollLink
              to="main"
              smooth={true}
              duration={500}
              className="portfolio-brand-link"
            >
              <span className="portfolio-brand-mark">AM</span>
              <span className="portfolio-brand-text">
                <strong>Agustina Mena</strong>
                <small>{role}</small>
              </span>
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="portfolio-navbar-toggle"
          />
          <Navbar.Collapse id="navbarScroll" className="portfolio-navbar-collapse">
            <Nav className="portfolio-nav-links" navbarScroll>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-90}
                className="portfolio-nav-link underline-navbar yellow"
              >
                {about}
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-90}
                className="portfolio-nav-link underline-navbar pink"
              >
                {projects}
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-90}
                className="portfolio-nav-link underline-navbar"
              >
                {contact}
              </ScrollLink>
            </Nav>

            <div className="portfolio-navbar-actions">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-90}
                className="portfolio-talk-button"
              >
                <FiSend aria-hidden="true" />
                {cta}
              </ScrollLink>

              <div className="portfolio-language-switch" aria-label="Language selector">
                {languages.map((lng, index) => (
                  <React.Fragment key={lng}>
                    <button
                      type="button"
                      onClick={() => changeLanguage(lng)}
                      className={lng === currentLanguage ? "active" : ""}
                      aria-label={`Change language to ${
                        lng === "en" ? "English" : "Spanish"
                      }`}
                    >
                      {lng.toUpperCase()}
                    </button>
                    {index < languages.length - 1 && <span>|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
