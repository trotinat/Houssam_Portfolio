import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  chu,
  bcskills,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  smartHome,
  proj,
  sap,
  restaurant,
  java,
  c,
  laravel,
  php,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "SAP ABAP",
    icon: sap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "php",
    icon: php,
  },
 
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Internship",
    company_name: "CHU Mohammed VI Marrakech",
    icon: chu,
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2022",
    points: [
      "Design and development of a web application for managing patients with heart failure.",
      "Analysis the hospital's needs.",
      "Front-end development (EJS) and back-end development (Node.js).",
      "Database (MongoDB).",
    ],
  },
  {
    title: "Internship",
    company_name: "Bcskills Group",
    icon: bcskills,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sep 2023",
    points: [
      "Design and development of a web application for project management.",
      "Analysis the company's needs.",
      "Front-end development (React.js and Tailwind CSS) and back-end development (Laravel).",
      "Database (MySQL)."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Home",
    description:
      "desktop application that provide a user-friendly interface for controlling IoT devices and IP cameras in a smart home. It also logs user activities and device interactions, allowing users to monitor and manage their smart home effectively.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "GunaFramework",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: smartHome,
    source_code_link: "https://github.com/trotinat/SmartHome",
  },
  {
    name: "Projects Management",
    description:
      "This powerful application has been specifically designed to assist you in efficiently managing your projects, tracking task progress, and fostering collaboration within your company. Whether you hold a position as an administrator, manager, or developer, this application is strategically tailored to meet your needs and enhance project management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "LARAVEL",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: proj,
    source_code_link: "https://github.com/BC-Skills/BC_skills-Project",
  },
  {
    name: "Restaurant Near Me",
    description:
      "Discover a curated selection of Moroccan restaurants near you on our website, complete with enticing pictures and menus. We use data scraping with BeautifulSoup to ensure you find the perfect place for a Moroccan culinary journey right at your fingertips. Explore the flavors of Morocco, right where you are!",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/trotinat/Restaurant_Near_Me",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
