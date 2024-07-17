import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  expressjs,
  mongodb,
  nodejs,
  corvit,
  code,
  digital,
  tecnsol,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Corvit",
    icon: corvit,
    iconBg: "white",
    date: "October 2022 - March 2023 ",
    points: [
      "Using React.js and created 10+ projects for clients to meet their requirements and get satisfactory responses.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Code Debuggers",
    icon: code,
    iconBg: "#383E56",
    date: "April 2023 - October 2023",
    points: [
      "Built 5 projects for customers using Express.js and Node.js.",
      "Used Express.js for managing APIs.",
      "Created backend solutions by working with developers.",
      "Executing RESTful APIs and managing server-side operations.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Digital Bolt",
    icon: digital,
    iconBg: "white",
    date: "November 2023 - April 2024",
    points: [
      "Implement Nest.js and Next.js for creating more than 3 real-world applications and projects.",
      "With Nest.js, I craft scalable and efficient server-side applications.",
      "My expertise in Next.js enables seamless, dynamic web experiences.",
      "Exercising efficient database solutions with MongoDB and ensuring seamless integration with Nest.js and Next.js frameworks.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "Tecnsol",
    icon: tecnsol,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Utilizing Express.js for the robust backend development of more than the 7 ungoing projects.",
      "Managed and optimized MongoDB database, ensuring seamless data flow. ",
      "Implementing Docker for efficient containerization.",
      "Leveraging AWS for scalable cloud solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sarim proved me wrong.",
    names: "Malik Maryam",
    designation: "CFO",
    company: "Corvit",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    names: "Muhammad Awais",
    designation: "CTO",
    company: "Code Debuggers",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sarim optimized our website, our traffic increased by 50%. We can't thank them enough!",
    names: "Faisal Amin",
    designation: "CEO",
    company: "Tecnsol",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    names: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        names: "react",
        color: "blue-text-gradient",
      },
      {
        names: "mongodb",
        color: "green-text-gradient",
      },
      {
        names: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    names: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        names: "react",
        color: "blue-text-gradient",
      },
      {
        names: "restapi",
        color: "green-text-gradient",
      },
      {
        names: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    names: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        names: "nextjs",
        color: "blue-text-gradient",
      },
      {
        names: "supabase",
        color: "green-text-gradient",
      },
      {
        names: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
