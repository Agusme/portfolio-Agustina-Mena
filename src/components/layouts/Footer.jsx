import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";
import {
  FiFolder,
  FiHeart,
  FiHome,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const { t } = useTranslation();
  const { projects, about, contact } = t("navbar");
  const {
    navigation,
    contactTitle,
    cel,
    email,
    location,
    social,
    description,
    cta,
    projectTitle,
    projectText,
    rights,
    madeWith,
  } = t("footerPage");

  const navItems = [
    { label: about, target: "about", icon: FiHome, color: "teal" },
    { label: projects, target: "projects", icon: FiFolder, color: "pink" },
    { label: contact, target: "contact", icon: FiMail, color: "yellow" },
  ];

  const contactItems = [
    {
      label: cel,
      value: "+54 381 563 3405",
      href: "tel:+543815633405",
      icon: FiPhone,
      color: "teal",
    },
    {
      label: email,
      value: "agusmena60@gmail.com",
      href: "mailto:agusmena60@gmail.com",
      icon: FiMail,
      color: "yellow",
    },
    {
      label: location,
      value: "Tucumán, Argentina",
      href: "https://www.google.com/maps/place/Tucum%C3%A1n,+Argentina",
      icon: FiMapPin,
      color: "pink",
    },
  ];

  const socialItems = [
    {
      label: "GitHub",
      href: "https://github.com/Agusme",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/agustina-mena-169298204/",
      icon: FaLinkedin,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/agusmena97/",
      icon: FaFacebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/agusmenaa/",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="portfolio-footer">
      <Container>
        <div className="portfolio-footer-card">
          <div className="footer-shape footer-shape-teal" aria-hidden="true" />
          <div className="footer-shape footer-shape-yellow" aria-hidden="true" />

          <Row className="portfolio-footer-main g-4">
            <Col lg={4} md={6}>
              <div className="footer-brand-block">
                <ScrollLink
                  to="main"
                  smooth={true}
                  duration={500}
                  offset={-90}
                  className="footer-brand-link"
                >
                  <span className="footer-brand-burst" aria-hidden="true" />
                  <span className="portfolio-brand-mark">AM</span>
                  <span className="portfolio-brand-text">
                    <strong>Agustina Mena</strong>
                    <small>{t("navbar.role")}</small>
                  </span>
                </ScrollLink>

                <p className="footer-description">
                  {description} <strong>{t("description.profession2")}</strong>.
                </p>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-90}
                  className="portfolio-talk-button footer-talk-button"
                >
                  <FiSend aria-hidden="true" />
                  {cta}
                </ScrollLink>
              </div>
            </Col>

            <Col lg={2} md={6}>
              <section className="footer-column">
                <h3>{navigation}</h3>
                <ul className="footer-nav-list">
                  {navItems.map(({ label, target, icon: Icon, color }) => (
                    <li key={target}>
                      <ScrollLink
                        to={target}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className="footer-nav-link"
                      >
                        <Icon className={`footer-inline-icon ${color}`} />
                        <span>{label}</span>
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </section>
            </Col>

            <Col lg={3} md={6}>
              <section className="footer-column footer-contact-column">
                <h3>{contactTitle}</h3>
                <ul className="footer-contact-list">
                  {contactItems.map(({ label, value, href, icon: Icon, color }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <span className={`footer-contact-icon ${color}`}>
                          <Icon aria-hidden="true" />
                        </span>
                        <span>
                          <strong>{label}</strong>
                          <small>{value}</small>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </Col>

            <Col lg={3} md={6}>
              <section className="footer-column footer-social-column">
                <h3>{social}</h3>
                <div className="footer-social-list">
                  {socialItems.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <div className="footer-project-card">
                  <FaRocket aria-hidden="true" />
                  <div>
                    <strong>{projectTitle}</strong>
                    <small>{projectText}</small>
                  </div>
                </div>
              </section>
            </Col>
          </Row>

          <div className="portfolio-footer-bottom">
            <FiHeart aria-hidden="true" />
            <p>&copy; 2026 Agustina Mena. {rights}</p>
            <small>{madeWith}</small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
