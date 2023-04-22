
import {ui,temp,crypto,cart,market,} from "../assets"

interface Experience {
  title: string;
  type: string;
  periodTime: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  date: number;
  github?: string;
  link: string;
  description: string;
  img:string
}

export const workExperience: Experience[] = [
  {
    title: "Hamrah amlak",
    type: "remote",
    periodTime: "1 year",
    description: `My main task with hamrah amlak was to create the site's admin panel, and if there was a need to change the main site, I would change it.
    The real estate companion was the first big project in the real world that I was able to do on my own.`,
  },
  {
    title: "backenders",
    type: "remote",
    periodTime: "3 month",
    description: `I completed an internship at Backenders. This course was very effective in my development process and considering that it was my first work experience, it introduced me to coding in the workplace.`,
  },
];

export const project: Project[] = [
  {
    id: 1,
    title: "Biutiful ui",
    date: 2023,
    github: "https://github.com/Pouya-Azizzadh/biutiful-ui",
    link: "https://zippy-kleicha-2bfbca.netlify.app/",
    description: "This project was created to show my skills in the implementation of UI types This project is implemented with tailwindcss",
    img:ui
  },
  {
    id: 2,
    title: "Temperature of each city",
    date: 2021,
    link: "https://cranky-goldstine-f6e86d.netlify.app/",
    description: "A simple project that by entering the name of a city, you can get information about the temperature and weather conditions of that city.",
    img:temp
  },
  {
    id: 3,
    title: "Digital currency",
    date: 2021,
    link: "https://keen-brown-346a85.netlify.app/",
    description: "A simple project in which you can get and view the information from the api by entering the name of the digital currency",
    img:crypto
  },
  {
    id: 4,
    title: "Cart",
    date: 2022,
    github: "https://github.com/Pouya-Azizzadh/redux-tolkit-cart",
    link: "https://stirring-truffle-bebdd7.netlify.app/",
    description: "This project shows a shopping cart written with Redux Toolkit",
    img:cart
  },
  {
    id: 5,
    title: "Market",
    date: 2022,
    link: "https://upbeat-franklin-1b1ce9.netlify.app/",
    description: "This project shows a shopping  ",
    img:market
  },
];
