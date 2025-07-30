import sentimientos from '../assets/sentimientos.jpg';
import medicusCare from '../assets/medicusCare.png';
const projects = [
  {
    title: "Análisis de Sentimientos en Textos",
    description:
      "Modelo de machine learning para analizar sentimientos en reseñas de productos.",
    image:sentimientos,
    technologies: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/tuusuario/proyecto1",
    demo: "https://huggingface.co/spaces/brayang6264/SentimientosGRUPO3"
  },
  {
    title: "App para la administracion de medicamentos",
    description:
      "Aplicación web con React y Node.js medicamentos, lanzar notificaciones y terner un seguimiento oportuno de la ingesta de medicamentos.",
    image:medicusCare,
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/brayan6264/MedicusCare-BackEnd",
    demo: "https://front-medicus-care.vercel.app/"
  },
  {
    title: "Dashboard de Datos",
    description:
      "Dashboard interactivo para visualizar datos financieros en tiempo real.",
    image: "/assets/proyectos/dashboard.jpg",
    technologies: ["Power BI", "SQL"],
    github: "https://github.com/tuusuario/proyecto3",
    demo: ""
  }
];

export default projects;