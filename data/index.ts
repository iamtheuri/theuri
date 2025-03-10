import MealOrderingApp from "../public/Meal-ordering-app.png"
import QueenDeeWeddings from "../public/qd-weddings.webp"
import LaravelName from "../public/laravelName.svg"
import MaterialUi from "../public/material-ui.svg"
import WorkExperienceTwo from "../public/exp4.svg"
import WorkExperienceOne from "../public/exp1.svg"
import GridBackgroundFour from "../public/b4.svg"
import GridBackgroundFive from "../public/b5.svg"
import PropertyMs from "../public/propertyms.webp"
import SentryName from "../public/sentryName.svg"
import DockerName from "../public/dockerName.svg"
import NextJsName from "../public/nextJsName.svg"
import AppwriteName from "../public/appName.svg"
import GridBackgroundOne from "../public/b1.svg"
import NginxName from "../public/nginxName.svg"
import Bootstrap from "../public/bootstrap.svg"
import EducationOne from "../public/exp3.svg"
import EducationTwo from "../public/exp2.svg"
import Laravel from "../public/laravel.svg"
import Erevuka from "../public/erevuka.webp"
import NextJs from "../public/nextJs.svg"
import Tailwind from "../public/tail.svg"
import Sentry from "../public/sentry.svg"
import LinkedIn from "../public/link.svg"
import Appwrite from "../public/app.svg"
import Twitter from "../public/twit.svg"
import Docker from "../public/dock.svg"
import Nginx from "../public/nginx.svg"
import GitHub from "../public/git.svg"
import Grid from "../public/grid.svg"
import Blockforge from "../public/blockforge.png"
import PharmacyPOS from "../public/pharmacy_pos.png"
import AstroJsIcon from "../public/astro-icon-light-gradient.svg"
import AstroJsLogoName from "../public/astro-logo-name-light-gradient.png"
import React from "../public/re.svg"

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Strong advocate for continual growth, reliable team-member",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: GridBackgroundOne,
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "Backend, Frontend, QA, Version-Control, DBMS",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 select-none",
    titleClassName: "justify-center",
  },
  {
    id: 4,
    title: "Farwell Innovations Ltd, Comtel Integrators Africa",
    description: "Web-Development Internships",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-start",
    img: Grid,
    spareImg: GridBackgroundFour,
  },

  {
    id: 5,
    title: "I convert coffee into software",
    description: "Brief overview",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: GridBackgroundFive,
    spareImg: Grid,
  },
  {
    id: 6,
    title: "Get In Touch",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Property MS",
    des: "Full-stack, responsive web platform streamlining property management for landlords and tenants.",
    img: PropertyMs,
    iconLists: [Laravel, Tailwind, Docker],
    link: "Overview",
    linkUrl: "https://www.youtube.com/watch?v=xeA4-A9sxVY&t=8s",
  },
  {
    id: 2,
    title: "Queen Dee Weddings",
    des: "Showcase website for a wedding photography studio.",
    img: QueenDeeWeddings,
    iconLists: [Bootstrap, Docker],
    link: "",
    linkUrl: "#",
  },
  {
    id: 3,
    title: "Erevuka",
    des: "Contributed to development as an intern at Farwell Innovations Limited.",
    img: Erevuka,
    iconLists: [],
    link: "",
    linkUrl: "#",
  },
  {
    id: 4,
    title: "Meal Ordering App",
    des: "Responsive NextJS application for convenient in-room meal ordering.",
    img: MealOrderingApp,
    iconLists: [],
    link: "",
    linkUrl: "#",
  },
  {
    id: 5,
    title: "Blockforge",
    des: "Responsive hobby project built to learn more about AstroJs",
    img: Blockforge,
    iconLists: [AstroJsIcon, React, Tailwind],
    link: "View site",
    linkUrl: "https://theuris-blockchain.vercel.app/",
  },
  {
    id: 6,
    title: "Pharmacy POS",
    des: "Ongoing pharmacy point of sale project to help in inventory management and automate re-ordering",
    img: PharmacyPOS,
    iconLists: [Laravel, React, Tailwind],
    link: "",
    linkUrl: "#",
  },
];

export const companies = [
  {
    id: 1,
    name: "LARAVEL",
    img: Laravel,
    nameImg: LaravelName,
  },
  {
    id: 2,
    name: "NGINX",
    img: Nginx,
    nameImg: NginxName,
  },
  {
    id: 3,
    name: "nextJs",
    img: NextJs,
    nameImg: NextJsName,
  },
  {
    id: 4,
    name: "appwrite",
    img: Appwrite,
    nameImg: AppwriteName,
  },
  {
    id: 5,
    name: "docker.",
    img: Docker,
    nameImg: DockerName,
  },
  {
    id: 6,
    name: "SENTRY",
    img: Sentry,
    nameImg: SentryName,
  },
  {
    id: 6,
    name: "ASTROJS",
    img: AstroJsIcon,
    nameImg: AstroJsLogoName,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Comtel Integrators Africa - Assisted in the development of web-based platforms using React(NextJs) & Appwrite(BaaS), testing API endpoints, unit tests, user-tests, code optimization, & maintaining, updating, and upgrading the company's website & designs.",
    className: "md:col-span-2",
    thumbnail: WorkExperienceOne,
  },
  {
    id: 2,
    title: "Web-Developer Intern",
    desc: "Farwell Innovations Limited - Assisted the development team in development of web based platforms and maintainance.",
    className: "md:col-span-2",
    thumbnail: WorkExperienceTwo,
  },
];

export const education = [
  {
    id: 1,
    title: "BSC Computer Science",
    desc: "Multimedia University of Kenya, Nairobi | AUGUST 2021 - APRIL 2025 | Ongoing",
    className: "md:col-span-2",
    thumbnail: EducationTwo,
  },
  {
    id: 2,
    title: "Secondary Education",
    desc: "Utumishi Boys Academy | JANUARY 2017 - APRIL 2021 | KCSE: A- ",
    className: "md:col-span-2",
    thumbnail: EducationOne,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: GitHub,
    link: "https://github.com/iamtheuri",
  },
  {
    id: 2,
    img: Twitter,
    link: "https://x.com/iamtheuri_",
  },
  {
    id: 3,
    img: LinkedIn,
    link: "https://www.linkedin.com/in/iamtheuri",
  },
];
