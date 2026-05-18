import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FiCode,
  FiDownload,
  FiFolder,
  FiHeart,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiSearch,
  FiSend,
  FiSmartphone,
  FiTool,
  FiUser,
} from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const { t } = useTranslation();
  const { projects, about, contact } = t("navbar");
  const {
    cta,
    description,
    emailValue,
    locationValue,
    madeWith,
    navigation,
    phoneValue,
    projectText,
    projectTitle,
    rights,
    services,
    servicesTitle,
  } = t("footerPage");

  const navItems = [
    { label: about, target: "about", icon: FiUser },
    { label: projects, target: "projects", icon: FiFolder },
    { label: t("stack"), target: "stack", icon: FiCode },
    { label: contact, target: "contact", icon: FiSend },
  ];

  const serviceIcons = [FiMonitor, FiSmartphone, FiSearch, FiTool];

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
      label: "Instagram",
      href: "https://www.instagram.com/agusmenaa/",
      icon: FaInstagram,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/agusmena97/",
      icon: FaFacebook,
    },
    {
      label: "Email",
      href: "mailto:agusmena60@gmail.com",
      icon: FiMail,
    },
  ];

  return (
    <footer className="portfolio-footer portfolio-footer--cta">
      <Container>
        <div className="footer-cta-card">
          <div className="footer-cta-icon" aria-hidden="true">
            <FiSend />
          </div>
          <div>
            <h2>{projectTitle}</h2>
            <p>{projectText}</p>
          </div>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
            className="portfolio-talk-button footer-cta-button"
          >
            <FiSend aria-hidden="true" />
            {cta}
          </ScrollLink>
        </div>

        <div className="portfolio-footer-panel">
          <div className="footer-panel-shape" aria-hidden="true" />

          <div className="footer-panel-grid">
            <section className="footer-brand-block">
              <ScrollLink
                to="main"
                smooth={true}
                duration={500}
                offset={-90}
                className="footer-brand-link"
              >
                <span className="portfolio-brand-mark">AM</span>
                <span className="portfolio-brand-text">
                  <strong>Agustina Mena</strong>
                  <small>{t("navbar.role")}</small>
                </span>
              </ScrollLink>

              <p className="footer-description">
                {description}.
              </p>

              <div className="footer-social-list" aria-label="Redes sociales">
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
            </section>

            <section className="footer-panel-column">
              <h3>{navigation}</h3>
              <ul>
                {navItems.map(({ label, target, icon: Icon }) => (
                  <li key={target}>
                    <ScrollLink
                      to={target}
                      smooth={true}
                      duration={500}
                      offset={-90}
                    >
                      <Icon aria-hidden="true" />
                      {label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </section>

            <section className="footer-panel-column">
              <h3>{servicesTitle}</h3>
              <ul>
                {services.map((service, index) => {
                  const Icon = serviceIcons[index] || FiCode;

                  return (
                    <li key={service}>
                      <span>
                        <Icon aria-hidden="true" />
                        {service}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="footer-panel-column footer-contact-panel">
              <h3>{cta}</h3>
              <ul>
                <li>
                  <a href="mailto:agusmena60@gmail.com">
                    <FiMail aria-hidden="true" />
                    {emailValue}
                  </a>
                </li>
                <li>
                  <a href="tel:+543815633405">
                    <FiSmartphone aria-hidden="true" />
                    {phoneValue}
                  </a>
                </li>
                <li>
                  <span>
                    <FiMapPin aria-hidden="true" />
                    {locationValue}
                  </span>
                </li>
              </ul>

              <a
                href="https://drive.google.com/file/d/17NsYBkLT48pNiz5h29egDGSbC4tS_HN1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="footer-cv-button"
              >
                <FiDownload aria-hidden="true" />
                {t("description.cv")}
              </a>
            </section>
          </div>

          <div className="footer-panel-bottom">
            <p>&copy; 2026 Agustina Mena. {rights}</p>
            <small>
              <FiHeart aria-hidden="true" />
              {madeWith}
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
