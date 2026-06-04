import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      es: {
        translation: {
          greeting: "¡ H O L A !",
          description: {
            im: "Soy",
            profession:
              "Desarrollo aplicaciones web modernas enfocadas en performance y experiencia de usuario.",
            cv: "Ver CV",
           benefits: [
  "React, Next.js y TypeScript",
  "Interfaces modernas y responsive",
  "Código limpio y escalable",
],
          },
          navbar: {
            projects: "Proyectos",
            contact: "Contacto",
            about: "Sobre mi",
            role: "Developer Full Stack",
            cta: "Hablemos",
          },
          aboutDescription: {
            aboutme: "Sobre mí",
            about1:
              "Soy Agustina Mena, Desarrolladora Full Stack con foco en Frontend 💅🏽",
            about2:
              "Especializada en React, trabajo con foco en la experiencia de usuario, el orden del código y la construcción de interfaces claras y funcionales.",
            about3:
              "Tengo experiencia integrando frontend con backend y trabajando en entornos reales de desarrollo junto a equipos colaborativos.",
            about4:
              "Me interesa participar en proyectos bien pensados, donde pueda aportar valor y seguir creciendo como Frontend Developer.",
            about5:
              "Actualmente busco nuevas oportunidades para continuar desarrollándome profesionalmente en el área de Frontend.",
          },
          projects: "Proyectos",
          stack: "Mi Stack Tecnológico",
          pageContact: {
            contactTittle: "Contacto",
            contact1: "¡Gracias por visitar mi Portfolio!",
            contact2:
              "¡Me emociona la posibilidad de poder conocer y trabajar con ustedes!",
            contact3:
              "Si está interesado, puede ponerse en contacto conmigo a través del formulario o utilizar la información alternativa.",
            form1: "Nombre o Compañia ",
            form2: "Mail",
            form3: "Mensaje",
            submitContact: "Enviar",
          },

          certificationTittle: "Certificaciones",
          footerPage: {
            pages: "Páginas",
            info: "Más información",
            cel: "Celular",
            social: "Redes Sociales",
            navigation: "Navegación",
            contactTitle: "Contacto",
            email: "Email",
            emailValue: "agusmena60@gmail.com",
            location: "Ubicación",
            locationValue: "Tucumán, Argentina",
            phoneValue: "+54 381 563 3405",
            description:
              "Desarrollo páginas web enfocadas en generar clientes y",
            cta: "Hablemos",
            projectTitle: "¿Tienes un proyecto en mente?",
            projectText: "Hablemos y lo hacemos realidad.",
            rights: "Todos los derechos reservados.",
            madeWith: "Hecho con ❤ y mucho código",
            servicesTitle: "Servicios",
            services: [
              "Desarrollo Web",
              "Sitios Responsivos",
              "SEO Básico",
              "Mantenimiento",
            ],
          },
          modal: {
            title: "Consulta enviada",
            body: "¡Gracias por tu consulta!",
            close: "Cerrar",
          },
        },
      },
      en: {
        translation: {
          greeting: " H E L L O !",

         description: {
  im: "I'm",
  profession:
    "I build modern web applications focused on performance and user experience.",
  cv: "View Resume",
  benefits: [
    "React, Next.js & TypeScript",
    "Modern responsive interfaces",
    "Clean and scalable code",
  ],
},
          navbar: {
            projects: "Projects",
            contact: "Contact",
            about: "About me",
            role: "Frontend Developer",
            cta: "Let's talk",
          },
          aboutDescription: {
            aboutme: "About Me",
            about1:
              "I’m Agustina Mena, a Full Stack Developer with a strong focus on Frontend 💅🏽",
            about2:
              "Specialized in React, I focus on user experience, clean and maintainable code, and building clear, functional interfaces.",
            about3:
              "I have experience integrating frontend with backend services and working in real development environments within collaborative teams.",
            about4:
              "I’m interested in working on well-designed projects where I can contribute value and continue growing as a Frontend Developer.",
            about5:
              "I’m currently open to new opportunities to further develop my career in Frontend development.",
          },
          projects: "Projects",
          stack: "My Technology Stack",
          pageContact: {
            contactTittle: "Contact",
            contact1: " Thank you for visiting my portfolio!",
            contact2:
              "I am excited about the possibility of meeting and collaborating on your professional projects.",
            contact3:
              "If you are interested, you can contact me via the form provided or  use the alternative information - I look forward to the  opportunity to work with you!",
            form1: " Name or Company Name ",
            form2: "Email",
            form3: "Your message",
            submitContact: "Submit",
          },
          certificationTittle: "Certifications",
          footerPage: {
            pages: "Pages",
            info: "More Information",
            cel: "Phone",
            social: "Social media",
            navigation: "Navigation",
            contactTitle: "Contact",
            email: "Email",
            emailValue: "agusmena60@gmail.com",
            location: "Location",
            locationValue: "Tucumán, Argentina",
            phoneValue: "+54 381 563 3405",
            description: "I develop websites designed to attract customers and",
            cta: "Let's talk",
            projectTitle: "Do you have a project in mind?",
            projectText: "Let's talk and make it real.",
            rights: "All rights reserved.",
            madeWith: "Made with ❤ and lots of code",
            servicesTitle: "Services",
            services: [
              "Web Development",
              "Responsive Sites",
              "Basic SEO",
              "Maintenance",
            ],
          },
          modal: {
            title: "Query submitted",
            body: "Thank you for your inquiry!",
            close: "Close",
          },
        },
      },
    },
  });
