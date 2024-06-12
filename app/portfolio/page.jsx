"use client";

import { useState } from "react";
import Collapse from "@/components/Collapse";
import img1 from "@/public/images/bank1.png";
import img2 from "@/public/images/bluel1.png";
import img3 from "@/public/images/portfolio1.png";
import img4 from "@/public/images/moviedb3.png";
import img5 from "@/public/images/ohmyfood1.png";
import img6 from "@/public/images/bank4.png";

import { AnimatePresence, delay, motion } from "framer-motion";
import LetterSplitX from "@/components/LetterSplitX";


const projet = [
  {
    id: "1",
    num: "01",
    image: img1,
    title: "Kasa",
    date: "2023",
    stack: "React, Sass",
    theme: "Site vitrine",
    desc: "Kasa est une entreprise de location de logements de vacances qui souhaite se démarquer de ses concurrents. J'ai réalisé une landing page pour leur site web. J'ai utilisé React avec Vite.js pour la partie front-end et Sass pour le style. Ce projet m'a permis de travailler sur React et de découvrir Vite.js, un outil de build rapide pour les projets React. J'ai également utilisé Git pour versionner mon code et GitHub pour héberger mon projet.",
    href: "https://franckick0909.github.io/kasa-react/",
    github: "https://github.com/franckick0909/kasa-react",
  },
  {
    id: "2",
    num: "02",
    image: img2,
    title: "Sophie Bluel",
    date: "2024",
    stack: "JavaScript, Sass",
    theme: "Site Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    github: "https://github.com",
  },
  {
    id: "3",
    num: "03",
    image: img3,
    title: "Portfolio #1",
    date: "2024",
    stack: "React, Sass, Framer-motion",
    theme: "Site Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
  {
    id: "4",
    num: "04",
    image: img4,
    title: "MovieDB",
    date: "2024",
    stack: "React, Sass, Framer-motion, API",
    theme: "Site Evènement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
  {
    id: "5",
    num: "05",
    image: img5,
    title: "OhMyFood",
    date: "2023",
    stack: "HTML, CSS",
    theme: "Site Ecommerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
  {
    id: "6",
    num: "06",
    image: img6,
    title: "ArgentBank",
    date: "2024",
    stack: "React, Redux, Sass, MongoDB, Node.js",
    theme: "Site Personnel",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, nesciunt cupiditate placeat enim excepturi ipsa magnam cumque ullam corrupti officia deserunt voluptatum cum illum quibusdam deleniti neque voluptas nostrum tempora est totam nulla? Beatae fugiat molestias saepe, veniam optio modi aut nihil illum, quod ea sed vero, explicabo itaque.",
    href: "https://kasa.com",
    github: "https://github.com",
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects =
    filter === "Tous" ? projet : projet.filter((p) => p.theme === filter);


    const variants = {
      hidden: {
        opacity: 0,
        y: 100,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      },
      exit: {
        opacity: 0,
        y: 100,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      },
    };
  


  return (
    <AnimatePresence>
          <motion.div

      className="w-full min-h-screen bg-light dark:bg-dark"
    >
      <div className="h-48"></div>
    <section className="w-full min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14 bg-white">
      <div className="flex items-center justify-center w-full">
        <motion.h1
         className="uppercase flex items-center w-fit h-fit title textTransparent2">
          <LetterSplitX phrase="Mes Projets"  />
        </motion.h1>
      </div>


      <div className="h-48"></div>

      <article className="flex justify-between gap-4 max-lg:flex-col w-full h-auto ">
        <div className="max-w-full lg:w-56 bg-black p-4 rounded-lg mt-6">
          <h4 className="h4 font-poppins mb-4 text-white">Filtres</h4>
          <div className="border-b-[0.5px] border-indigo-100 mb-8"></div>
          <div className="flex lg:flex-col flex-wrap gap-2 justify-start w-full items-start text-left flex-shrink-0">
            <button
              onClick={() => setFilter("Tous")}
              className={`text-white rounded-md paragraph hover:text-indigo-500 hover:bg-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Tous" ? "bg-indigo-500 text-white" : ""}`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter("Site Portfolio")}
              className={`text-white rounded-md paragraph hover:text-indigo-500 hover:bg-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Portfolio" ? "bg-indigo-500 text-white" : ""}`}
            >
              Site Portfolio
            </button>
            <button
              onClick={() => setFilter("Site Vitrine")}
              className={`text-white rounded-md paragraph hover:text-indigo-500 hover:bg-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Vitrine" ? "bg-indigo-500 text-white" : ""}`}
            >
              Site Vitrine
            </button>
            <button
              onClick={() => setFilter("Site Ecommerce")}
              className={`text-white rounded-md paragraph hover:text-indigo-500 hover:bg-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Ecommerce" ? "bg-indigo-500 text-white" : ""}`}
            >
              Site Ecommerce
            </button>
            <button
              onClick={() => setFilter("Site Evènement")}
              className={`text-white rounded-md paragraph hover:text-indigo-500 hover:bg-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Evènement" ? "bg-indigo-500 text-white" : ""}`}
            >
              Site Evènement
            </button>
            <button
              onClick={() => setFilter("Site Personnel")}
              className={`text-white rounded-md paragraph hover:text-indigo-500 hover:bg-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Personnel" ? "bg-indigo-500 text-white" : ""}`}
            >
              Site Personnel
            </button>
            <button
              onClick={() => setFilter("Site Entreprise")}
              className={`text-white rounded-md paragraph hover:text-indigo-500 hover:bg-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${filter === "Site Entreprise" ? "bg-indigo-500 text-white" : ""}`}
            >
              Site Entreprise
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 flex-1 p-4  rounded-lg bg-white">
          {filteredProjects.map((projet) => (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              exit="exit"
             key={projet.id} className="">
              <Collapse
                num={projet.num}
                title={projet.title}
                stack={projet.stack}
                date={projet.date}
                imgProjet={projet.image}
                theme={projet.theme}
                desc={projet.desc}
                href={projet.href}
                github={projet.github}
              />
            </motion.div>
          ))}
        </div>
      </article>
    </section>
    </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioPage;

// target="_blank"
// rel="noopener noreferrer"