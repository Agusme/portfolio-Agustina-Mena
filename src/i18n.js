import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
fallbackLng: "en",
returnObjects: true,
    resources: {
      es: {
        translation: {
          greeting: "<H O L A>",
          description: {
            im: "Soy Agustina Mena",
            profession: " Fullstack Mern Web Developer | Psicopedagoga",
            cv: "Ver CV"
          },
          navbar:{
            projects:"Proyectos",
            contact: "Contacto",
            about: "Sobre mi"
          },
          aboutDescription:{
            aboutme: "Sobre mi",
            about1: "Hola, Soy Agustina Mena, Fullstack Web Developer y Psicopedagoga.",
           about2: "Me apasiona crear sitios web, sobre todo la parte del diseño. Podría pasarme un día entero codificando y diseñando.",
            about3:"También me esfuerzo por aprender y aplicar nuevos conocimientos constantemente, ya que creo que el aprendizaje es esencial para seguir creciendo y desarrollándose, tanto personal como profesionalmente.",
            about4:"Con una sólida formación en psicopedagogía, combino las habilidades técnicas con un profundo conocimiento del aprendizaje humano. Mi objetivo es crear experiencias web visualmente atractivas, centradas en el usuario.",
            about5: "¡Estoy lista para enfrentarme a nuevos desafios y emocionada por lo que se viene!🚀"
        },
        projects: "Proyectos",
        stack: "Mi Stack Tecnológico",
        pageContact: {
            contactTittle:"Contacto",
            contact1: "¡Gracias por visitar mi Portfolio!",
            contact2: "¡Me emociona la posibilidad de poder conocer y trabajar con ustedes!",
            contact3: "Si está interesado, puede ponerse en contacto conmigo a través del formulario o utilizar la información alternativa.",
               form1: "Nombre o Compañia ",
               form2: "Mail",
               form3: "Mensaje",
               submitContact: "Enviar"
        },

        certificationTittle: "Certificaciones",
        footerPage:{
            pages:"Páginas",
            info: "Más información",
            cel: "Celular",
            social: "Redes Sociales"
        }

        },
      },
      en: {
        translation: {
          greeting: "<H E L L O>",

          description: {
            im: "I`m Agustina Mena",
            profession: " Fullstack Mern Web Developer | Psychopedagogue",
            cv: "View CV",
          },
          navbar:{
            projects:"Projects",
            contact:"Contact",
            about: "About me"
          },
          aboutDescription:{
            aboutme: "About me",
            about1: "Hi, I'm Agustina Mena, Fullstack Web Developer and Psychopedagogue.",
            about2: "I'm passionate about creating websites, especially the design part. I could spend a whole day coding and designing.",
            about3: "I also strive to learn and apply new knowledge constantly, as I believe that learning is essential to keep growing and developing, both personally and professionally.",
            about4:"With a strong background in psycho-pedagogy, I combine technical skills with a deep understanding of human learning. My goal is to create web experiences that are both visually engaging and user-centred.",
            about5: "I'm ready to take on new challenges and excited for what's ahead!🚀"
        }, 
        projects:"Projects",
        stack: "My Technology Stack",
        pageContact: {
            contactTittle:"Contact",
            contact1: " Thank you for visiting my portfolio!",
            contact2: "   I am excited about the possibility of meeting and collaborating on your professional projects.",
            contact3: "  If you are interested, you can contact me via the form provided or  use the alternative information - I look forward to the  opportunity to work with you!",
               form1: " Name or Company Name ",
               form2: "Email",
               form3: "Your message",
               submitContact: "Submit"
        },        certificationTittle: "Certifications",
        footerPage:{
            pages:"Pages",
            info: "More Information",
            cel: "Phone",
            social: "Social media"
        }
     
        },
      },
    },
  });
