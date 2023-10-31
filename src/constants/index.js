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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "SAP ABAP",
    icon: sap,
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
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: proj,
    source_code_link: "https://github.com/BC-Skills/BC_skills-Project",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
