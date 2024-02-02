import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import img1 from "./images/project-img-1.png";
import img2 from "./images/project-img-2.png";
import img3 from "./images/project-img-3.png";
import img4 from "./images/project-img-4.png";
import img5 from "./images/project-img-5.png";
import img6 from "./images/project-img-6.png";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];
{
  /* <img src="project-img/project-img-1.png" alt="" />;
const imageProjects = ["project-img/project-img-1.png"]; */
}
export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: "https://radionigeria.netlify.app/",
    github: "https://github.com/Nifemi-Adewusi/radio",
    title: "Online Streaming Radio",
    text: "The Online Streaming Platform enables users and listeners to listen live to the stations under the federal radio corporation as long as they have an internet connection.",
  },
  {
    id: nanoid(),
    img: img2,
    url: "https://omnifood-nifemi.netlify.app/",
    github: "https://github.com/Nifemi-Adewusi/Omnifood",
    title: "Omnifood ",
    text: "A Fictional Web Application that uses AI to recommend meals to users and priced meals.",
  },
  {
    id: nanoid(),
    img: img5,
    url: "https://dummy-text-generator-site.netlify.app/",
    github: "https://github.com/Nifemi-Adewusi/Dummy-Text-Generator",
    title: "Dummy Text Generator",
    text: "Tired of the Boring lorem ipsum? you can easily generate readable texts other than the boring lorem ipsum.",
  },
  {
    id: nanoid(),
    img: img4,
    url: "https://my-color-generator-app.netlify.app/",
    github: "https://github.com/Nifemi-Adewusi/Color-Generator",
    title: "Color Generator(Shades and Tints)",
    text: "get quick variations for that your next design project with different color palettes available for you to pick from.",
  },
  {
    id: nanoid(),
    img: img3,
    url: "https://candid-sunburst-a564ba.netlify.app/",
    github: "https://github.com/Nifemi-Adewusi/Drum-Kit",
    title: "Drum Kit",
    text: "Have fun with my interactive drum, responds to clicks and plays the corresponding sounds.",
  },
  {
    id: nanoid(),
    img: img6,
    url: "https://nifemi-to-do-list.netlify.app/",
    github: "https://github.com/Nifemi-Adewusi/To-Do-list",
    title: "React To Do List",
    text: "To do lists are a proven way to chunk difficult and complex activities down and improve productivity.",
  },
];
