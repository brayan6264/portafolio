import sentimientos from '../assets/sentimientos.jpg';
import medicusCare from '../assets/medicusCare.png';
import rusiaUcrania from '../assets/rusiavsucrania.png';
import cnn from '../assets/cnn.png';
import ethereo from '../assets/ethereo.png';
import dailyWord from '../assets/dailyWord.png';
const projects = [
  {
    title: "Análisis de Sentimientos en Textos",
    description:
      "Modelo de Machine Learning diseñado para el análisis de sentimientos en reseñas de productos. Permite clasificar automáticamente los textos en categorías como positivas, negativas o neutrales, facilitando la interpretación de opiniones y la toma de decisiones basadas en la experiencia de los usuarios.",
    image:sentimientos,
    technologies: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/brayan6264/Analisis-de-sentimientos",
    demo: "https://huggingface.co/spaces/brayang6264/SentimientosGRUPO3"
  },
  {
    title: "App para la administracion de medicamentos",
    description:
      "Aplicación web para la administración y seguimiento de medicamentos, desarrollada con React y Node.js. Permite gestionar el registro de medicamentos, programar recordatorios y enviar notificaciones para garantizar un seguimiento oportuno en la ingesta, ayudando a mejorar la adherencia a los tratamientos.",
    image:medicusCare,
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/brayan6264/MedicusCare-BackEnd",
    demo: "https://front-medicus-care.vercel.app/"
  },
  {
    title: "Análisis de sentimientos sobre la guerra Rusia-Ucrania",
    description:
      "Proyecto de análisis de sentimientos en redes sociales sobre la guerra entre Rusia y Ucrania. Se procesaron publicaciones mediante técnicas de Procesamiento de Lenguaje Natural (NLP) y Machine Learning para clasificar opiniones en positivas, negativas o neutrales, identificando tendencias y percepciones del conflicto.",
    image: rusiaUcrania,
    technologies: ["Python", "Scikit-learn", "Pandas", "Fine Tuning"],
    github: "https://github.com/brayan6264/Grupo3RusiaVSUcrania",
    demo: "https://huggingface.co/spaces/brayang6264/SentimentPredictUKRvsRUS"
  },
  {
    title: "Ethereo Contable",
    description:
      "Aplicación de escritorio desarrollada en C# con base de datos SQL para la gestión integral de inventarios y operaciones contables. Incluye módulos para el control de ventas y compras, generación de reportes de ingresos y egresos, y administración de roles de usuario, facilitando la organización y análisis de la información en pequeñas y medianas empresas.",
    image: ethereo,
    technologies: ["C#", "MySQL", "MailSender"],
    github: "",
    demo: ""
  },
  {
    title: "CNN para clasificación de imágenes de celulares.",
    description:
      "Este proyecto implementa una Red Neuronal Convolucional (CNN) para la clasificación automática de pantallas de celulares en dos categorías: \"rotas\" y \"no rotas\". El objetivo principal es desarrollar un modelo capaz de analizar imágenes y determinar de manera precisa si un dispositivo móvil presenta daños visibles en su pantalla, apoyando así procesos de diagnóstico automatizado.",
    image: cnn,
    technologies: ["Python", "TensorFlow / Keras", "OpenCV y Matplotlib", "Pandas"],
    github: "https://github.com/brayan6264/CNN-celulares",
    demo: "https://huggingface.co/spaces/brayang6264/CNNGRUPO3"
  },
  {
    title: "Daily Spanish Word App",
    description:
      "Aplicación Android desarrollada en Kotlin que muestra una palabra nueva en español cada día, junto con su significado, tipo gramatical y ejemplo. Permite guardar palabras en favoritos, consultar el historial y utiliza Firebase Firestore para almacenar los datos.",
    image: dailyWord,
    technologies: ["Kotlin", "Firebase Firestore", "Android Studio"],
    github: "",
    demo: ""
  }
];

export default projects;