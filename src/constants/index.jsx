// import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  react,
  redux,
  sass,
  tailwindcss,
  postman,
  wordpress,
  c,
  synoriq,
  netflix,
  gemini,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React.js",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: nextjs,
    name: "Next.js[Familiar]",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Backend",
  },
  {
    imageUrl: gemini,
    name: "Gemini AI",
    type: "AI tool",
  },
  {
    imageUrl: wordpress,
    name: "Wordpress",
    type: "Frontend",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "API Platform",
  },
];

export const experiences = [
  {
    title: "Software Developer I",
    company_name: "Synoriq [Jaipur, Rajasthan]",
    icon: synoriq,
    iconBg: "#b7e4c7",
    date: "June 2021 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer II",
    company_name: "Synoriq [Jaipur, Rajasthan]",
    icon: synoriq,
    iconBg: "#a2d2ff",
    date: "April 2022 - Dec 2023",
    points: [
      "Developed the home page (using SCSS for styling) and implemented functionalities(by creating custom React hooks).",
      "Created 4+ reusable functional components (in React) for faster development and code management.",
      "Utilized Figma for dynamic UI styling based on team discussions and designed guidelines.",
      "Used Postman for API testing and response validation, facilitating clear communication with backend developers for efficient debugging and integration.",
      "Challenge: Page load speed optimization [Fixed this by implementing lazy loading, and React.memo techniques, improving performance by some%].",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: netflix,
    theme: "btn-back-pink",
    name: "Netflix-GPT",
    description:
      "Built a Netflix-like app with recommendations, authentication, and AI search.",
    link: "https://netfix-gpt.vercel.app/",
    githubLink: "https://github.com/swati-sr/Netfix-GPT",
  },
];
