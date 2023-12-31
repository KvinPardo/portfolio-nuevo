// nav
export const nav = [
  {
    name: "Home",
    to: "home",
    offset: -100,
  },
  {
    name: "About",
    to: "about",
    offset: -100,
  },
  {
    name: "Educación",
    to: "education",
    offset: 0,
  },
  {
    name: "Experiencia",
    to: "experience",
    offset: 0,
  },

  {
    name: "Proyectos",
    to: "projects",
    offset: -100,
  },
  {
    name: "Contacto",
    to: "contact",
    offset: 0,
  },
];

// const navData = {
//   href: "",
//   items: [
//     { to: "home", name: "Home" },
//     { to: "about", name: "Acerca" },
//     { to: "experience", name: "Experiencia" },
//     { to: "projects", name: "Proyectos" },
//     { to: "contact", name: "Contacto" },
//   ],
// };

const heroData = [
  {
    name: "Hola, me llamo Kevin",
    title: "Soy Programador Analista y",
    subtitle: "Desarrollador Web",
    description:
      "especializado en la creación y desarrollo de la interfaz de usuario de aplicaciones y páginas web. Mi principal objetivo es construir sitios web visualmente atractivos, interactivos y funcionales para los usuarios finales. ",
  },
];

const aboutData = [
  {
    text1:
      "Me llamo Kevin Pardo Veas, tengo 27 años, soy una persona entusiasta y apasionado por mi trabajo. Soy una persona altamente motivada, orientado a resultados y con una mentalidad proactiva. Me considero un solucionador de problemas creativo y analítico, capaz de abordar desafíos con una perspectiva innovadora.",
    text2:
      " Además, poseo excelentes habilidades de comunicación, tanto en forma escrita como verbal, lo que me permite colaborar eficazmente con equipos multidisciplinarios y transmitir ideas de manera clara y concisa.",
    text3:
      "Soy flexible y capaz de adaptarme rápidamente a entornos dinámicos y en constante cambio. Me encanta aprender y estar al tanto de las últimas tendencias y avances en mi campo. Siempre estoy dispuesto a adquirir nuevos conocimientos y habilidades para mejorar mi desempeño profesional.",
    text4:
      "Creo en el desarrollo continuo y estoy dispuesto a asumir nuevos desafíos para crecer profesionalmente.",

    work: [
      {
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        boostrap: "Boostrap",
        tailwind: "Tailwind CSS",
        react: "React Js",
        context: "Context API",
        router: "React Router DOM",
        wordpress: "WordPress",
        elementor: "Elementor",
        ecommerce: "Ecoomerce",
        github: "Github",
      },
    ],
  },
];

const education = [
  {
    name: "CoderHouse",
    year: "2022",
    title: "Certificado React Js",
    url: "https://www.coderhouse.cl/certificados/63d94acf992d73000e71a8b7",
  },
  {
    name: "CoderHouse",
    year: "2021 - 2022",
    title: "Certificado JavaScript",
    url: "https://www.coderhouse.cl/certificados/622cf25f20161b00251e12c4",
  },
];

const projectsData = [
  {
    id: 1,
    image: "landing-algas",
    title: "Landing Algas",
    description: "Landing realizara a Fusion Agency para uno de sus clientes.",
    urlGithub: "https://github.com/KvinPardo/landing-portafolio",
    urlDemo: "https://landing-portafolio.vercel.app/",
    tags: [
      {
        firstTag: "HTML",
        secondTag: "React Js",
        thirdTag: "Tailwind CSS",
        fourthTag: "Framer Motion",
        vite: "Vite",
      },
    ],
  },
  {
    id: 2,
    image: "coder",
    title: "Proyecto Ecommerce CoderHouse",
    urlGithub: "https://github.com/KvinPardo/react-curso-tienda",
    urlDemo: "https://react-curso-tienda.vercel.app/",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia quod id nam voluptas eum eos soluta dolores",
    tags: [
      {
        firstTag: "HTML",
        secondTag: "CSS",
        thirdTag: "Tailwind CSS",
        fourthTag: "Framer Motion",
        vite: "Vite",
      },
    ],
  },
  {
    id: 3,
    image: "",
    title: "React 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia quod id nam voluptas eum eos soluta dolores",
    tags: [
      {
        firstTag: "HTML",
        secondTag: "CSS",
        thirdTag: "Tailwind CSS",
        fourthTag: "Framer Motion",
        vite: "Vite",
      },
    ],
  },
  {
    id: 4,
    image: "",
    title: "React 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia quod id nam voluptas eum eos soluta dolores",
    tags: [
      {
        firstTag: "HTML",
        secondTag: "CSS",
        thirdTag: "Tailwind CSS",
        fourthTag: "Framer Motion",
        vite: "Vite",
      },
    ],
  },
];

const experience = [
  {
    id: 1,
    company: "Fusion Agency",
    position: "Desarrollador FrontEnd",
    year: 2023,
    respons:
      "Encargado del desarrollo y mantención de sitios web, ecommerce y landing pages de clientes, tanto en Chile y en Perú, como regionales.",
    tags: [
      {
        first: "HTML",
        second: "CSS",
        third: "Boostrap",
        fourth: "WordPress",
        fifth: "Elementor",
        sixth: "Adobe XD",
        seventh: "Adobe PS",
        eighth: "Woocommerce",
      },
    ],
  },
];

// const experienceMuni = [
//   {
//     id: 1,
//     company: "Municipalidad de Ñuñoa",
//     position: "Desarrollador FrontEnd",
//     year: 2022,
//     respons:
//       "Encargado de mantención y creación de nuevas funcionalidades dentro del sitio web comunal.",
//     tags: [
//       {
//         firstMuni: "HTML",
//         secondMuni: "CSS",
//         thirdMuni: "WordPress",
//         fourthMuni: "Elementor",
//       },
//     ],
//   },
// ];

export { heroData, aboutData, projectsData, education, experience };
