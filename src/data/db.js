import rollingMovies from "../assets/proyectos/rollingMovies.jpg";
import turismo from "../assets/proyectos/turismo.jpg";
import veterinaria from "../assets/proyectos/veterinaria.jpg";
import bmz from "../assets/proyectos/bmz.jpg";
import bmzV2 from "../assets/proyectos/bmzV2.jpg";
import guitar from "../assets/proyectos/guitar.jpg";
import proManage from "../assets/proyectos/proManage.jpg";
import appRestoran from "../assets/proyectos/app-restoran.jpg";
import contadorCalorias from "../assets/proyectos/contadorCalorias.png";
import controlGastos from "../assets/proyectos/controlGastos.png";
import seguimientoTurnos from "../assets/proyectos/seguimientoTurnos.png";
import reactIcon from "../assets/iconos/react.svg";
import html5 from "../assets/iconos/html5.svg";
import css3 from "../assets/iconos/css3.svg";
import js from "../assets/iconos/js.svg";
import github from "../assets/iconos/github.svg";
import nodejs from "../assets/iconos/nodejs.svg";
import express from "../assets/iconos/express.svg";
import mongodb from "../assets/iconos/mongodb.svg";
import bootstrap from "../assets/iconos/bootstrap.svg";
import figma from "../assets/iconos/figma.svg";
import materialui from "../assets/iconos/materialui.svg";
import corelDr from "../assets/iconos/corelDr.svg";
import tailwind from "../assets/iconos/TAILWIND.svg";
import typescrypt from "../assets/iconos/typescript.svg";
import prof from "../assets/certificados/prof.jpg";
import certCodo from "../assets/certificados/certCodo.jpg";
import google from "../assets/certificados/googlw.jpg";
import alura from "../assets/certificados/alura.jpg";
import uxResearch from "../assets/certificados/ux-research.png";
import certBackend from "../assets/certificados/cert-Backend.png";
import certRolling from "../assets/certificados/certRolling.jpg";
import linkedin from "../assets/certificados/linkedin.png";

export const itemsProjects = [
  {
    name: "Inmobiliaria Bmz Propiedades v2",
    url: "https://inmobiliaria-bmzpropiedades.vercel.app/",
    img: bmzV2,
    width: 1877,
    height: 852,
    technologies: "REACT.JS | TYPESCRIPT | TAILWIND.CSS",
    descripcion: {
      es: "Sitio web inmobiliario moderno y diseño responsivo.",
      en: "Modern real estate website and responsive design.",
    },
    github: "https://github.com/Agusme/bmz-inmobiliaria-v2",
  },
  {
    name: "Inmobiliaria Bmz Propiedades",
    url: "https://bmzpropiedades.netlify.app/",
    img: bmz,
    width: 1855,
    height: 844,
    technologies: "REACT.JS | MONGODB | NODE.JS | EXPRESS.JS",
    descripcion: {
      es: "Plataforma para gestión de propiedades y contacto con clientes.",
      en: "Platform for property management and client contact.",
    },
    github: "https://github.com/Agusme/inmobiliaria",
  },
  {
    name: "Veterinaria Rolling",
    url: "https://veterinariarolling.netlify.app/",
    img: veterinaria,
    width: 1876,
    height: 868,
    technologies: "BOOTSTRAP | REACT | MONGO DB | NODE.JS | EXPRESS.JS",
    descripcion: {
      es: "Sistema para turnos y gestión veterinaria.",
      en: "System for appointments and veterinary management.",
    },
    github: "https://github.com/maxigiordani/ProyectoVeterinaria",
  },
  {
    name: "Rolling Movies+",
    url: "https://rollingmoviesplus.netlify.app/",
    img: rollingMovies,
    width: 1885,
    height: 865,
    technologies: "HTML | CSS | BOOTSTRAP | JS VANILLA",
    descripcion: {
      es: "Catálogo de películas con búsqueda y detalles.",
      en: "Movie catalog with search and details.",
    },
    github: "https://github.com/Agusme/rollingMovies-",
  },
  {
    name: "Seguimiento de Turnos",
    url: "https://veterinariaagus.netlify.app/",
    img: seguimientoTurnos,
    width: 1789,
    height: 811,
    technologies: "REACT | ZUSTAND | TYPESCRIPT | REDUX DEVTOOLS ",
    descripcion: {
      es: "App para seguimiento de turnos médicos y veterinarios.",
      en: "App for tracking medical and veterinary appointments.",
    },
    github: "https://github.com/Agusme/veterinaria-pacientes",
  },
  {
    name: "Control de Gastos💰",
    url: "https://control-gastos-agus.netlify.app/",
    img: controlGastos,
    width: 1884,
    height: 849,
    technologies: "REACT | VITE | TAILWINDCSS | CONTEXT API",
    descripcion: {
      es: "Aplicación para registrar y analizar gastos personales.",
      en: "Application to record and analyze personal expenses.",
    },
  },
  {
    name: "Contador de Calorias🏃🏽‍♀️",
    url: "https://caloriestrackerbyagus.netlify.app/",
    img: contadorCalorias,
    width: 1847,
    height: 850,
    technologies: "REACT | VITE | TAILWINDCSS | USEREDUCER",
    descripcion: {
      es: "Herramienta para llevar control de calorías diarias.",
      en: "Tool to keep track of daily calories.",
    },
  },
  {
    name: "App para Restorán🍽️",
    url: "https://consumptionandtips.netlify.app/",
    img: appRestoran,
    width: 1862,
    height: 869,
    technologies: "REACT | VITE | TAILWINDCSS | CUSTOM HOOKS",
    descripcion: {
      es: "Gestión de consumos y propinas en restaurantes.",
      en: "Management of consumption and tips in restaurants.",
    },
  },
  {
    name: "ProManage",
    url: "https://pro-manage-three.vercel.app/",
    img: proManage,
    width: 1881,
    height: 867,
    technologies: "REACT.JS | MATERIAL UI",
    descripcion: {
      es: "Organizador de tareas y proyectos personales.",
      en: "Personal task and project organizer.",
    },
  },
  {
    name: "GuitarLA 🎸",
    url: "https://guitarla-practice.netlify.app/",
    img: guitar,
    width: 1861,
    height: 857,
    technologies: "REACT | BOOTSTRAP | LOCALSTORAGE",
    descripcion: {
      es: "E-commerce de guitarras con carrito de compras.",
      en: "Guitar e-commerce with shopping cart.",
    },
  },
  {
    name: "Turismo NOA",
    url: "https://turismonoa2023.netlify.app/",
    img: turismo,
    width: 1890,
    height: 859,
    technologies: "HTML | CSS | BOOTSTRAP",
    descripcion: {
      es: "Sitio informativo sobre turismo en el norte argentino.",
      en: "Informative site about tourism in northern Argentina.",
    },
  },
];

export const itemsStackMern = [
  { nameSkill: "HTML5", imgIcon: html5, alt: "HTML5 logo", width: 107, height: 106 },
  { nameSkill: "CSS3", imgIcon: css3, alt: "CSS3 logo", width: 107, height: 106 },
  { nameSkill: "JavaScript", imgIcon: js, alt: "JavaScript logo", width: 106, height: 106 },
  { nameSkill: "GitHub", imgIcon: github, alt: "GitHub logo", width: 106, height: 106 },
  { nameSkill: "React", imgIcon: reactIcon, alt: "React logo", width: 106, height: 106 },
  { nameSkill: "Node.js", imgIcon: nodejs, alt: "Node.js logo", width: 106, height: 106 },
  { nameSkill: "Express.js", imgIcon: express, alt: "Express.js logo", width: 106, height: 106 },
  { nameSkill: "MongoDB", imgIcon: mongodb, alt: "MongoDB logo", width: 106, height: 106 },
  { nameSkill: "Bootstrap", imgIcon: bootstrap, alt: "Bootstrap logo", width: 107, height: 106 },
  { nameSkill: "Material UI", imgIcon: materialui, alt: "Material UI logo", width: 106, height: 106 },
  { nameSkill: "CorelDRAW", imgIcon: corelDr, alt: "CorelDRAW logo", width: 106, height: 106 },
  { nameSkill: "Figma", imgIcon: figma, alt: "Figma logo", width: 106, height: 106 },
  { nameSkill: "Tailwind CSS", imgIcon: tailwind, alt: "Tailwind CSS logo", width: 36, height: 26 },
  { nameSkill: "TypeScript", imgIcon: typescrypt, alt: "TypeScript logo", width: 66, height: 66 },
];

export const itemsCertification = [
  {
    img: certBackend,
    width: 1080,
    height: 783,
    alt: "Certificado Backend Rolling Code",
    institution: "Rolling Code",
    description: "Backend database integration in web applications",
  },
  {
    img: linkedin,
    width: 836,
    height: 644,
    alt: "Certificado React LinkedIn Learning",
    institution: "LinkedIn Learning",
    description: "React Esencial",
  },
  {
    img: certRolling,
    width: 1079,
    height: 785,
    alt: "Certificado Fullstack Rolling Code",
    institution: "Rolling Code",
    description: "Fullstack web programming",
  },
  {
    img: uxResearch,
    width: 1102,
    height: 780,
    alt: "Certificado UX Research",
    institution: "Codo a Codo",
    description: "UX Research",
  },
  {
    img: prof,
    width: 1093,
    height: 773,
    alt: "Certificado Scrum CertiProf",
    institution: "CertiProf",
    description: "Scrum",
  },
  {
    img: certCodo,
    width: 824,
    height: 588,
    alt: "Certificado Codo a Codo",
    institution: "Codo a Codo",
    description: "Initial programming",
  },
  {
    img: alura,
    width: 966,
    height: 656,
    alt: "Certificado Javascript Alura Latam",
    institution: "Alura Latam",
    description: "Javascript",
  },
  {
    img: google,
    width: 1091,
    height: 756,
    alt: "Certificado Google Activate",
    institution: "Google Activate",
    description: "Introduction to web development",
  },
];
