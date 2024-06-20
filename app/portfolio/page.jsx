"use client";

import Collapse from "@/components/Collapse";
import LetterSplitX from "@/components/LetterSplitX";
import img1 from "@/public/images/bank1.png";
import img6 from "@/public/images/bank4.png";
import img2 from "@/public/images/bluel1.png";
import img4 from "@/public/images/moviedb3.png";
import img5 from "@/public/images/ohmyfood1.png";
import img3 from "@/public/images/portfolio1.png";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { RiListSettingsLine } from "react-icons/ri";

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

  const filters = useRef();
  const isFilterInView = useInView(filters, { margin: "-100px" });

  return (
    <AnimatePresence>
      <motion.section className="w-full min-h-screen relative bg-white dark:bg-slate-950 overflow-hidden">

        <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14">
          <motion.h1
            style={{ lineHeight: 0.75 }}
            className="uppercase inline-flex items-center title my-48 text-black dark:text-white"
          >
            <LetterSplitX phrase="Mes Projets" />
          </motion.h1>

          <article
            ref={filters}
            className="flex justify-between gap-4 max-lg:flex-col w-full h-auto"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={
                  isFilterInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -300 }
                }
                transition={{
                  duration: 0.5,
                  type: "spring",
                  delay: 0.2,
                  stiffness: 100,
                  damping: 20,
                }}
                className="max-w-full lg:w-56 p-4 rounded-lg mt-0 bg-white dark:bg-slate-950/10  border border-slate-200 dark:border-slate-900 shadow-inner dark:shadow dark:shadow-slate-900 shadow-indigo-500/30 "
              >
                <div className="">
                  <h4 className="h4 font-poppins mb-4 text-black dark:text-white flex items-center justify-between">
                    Filtres{" "}
                    <span>
                      <RiListSettingsLine />
                    </span>
                  </h4>
                </div>
                <div className="border-b-[0.5px] border-indigo-100 mb-8"></div>
                <div className="grider2 place-content-start place-items-start gap-2">
                  <button
                    onClick={() => setFilter("Tous")}
                    className={` rounded-sm flex w-full paragraph hover:bg-indigo-500 hover:text-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${
                      filter === "Tous"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/30 text-black"
                    }`}
                  >
                    Tous
                  </button>
                  <button
                    onClick={() => setFilter("Site Portfolio")}
                    className={` rounded-sm flex w-full paragraph hover:bg-indigo-500 hover:text-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${
                      filter === "Site Portfolio"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/30 text-black"
                    }`}
                  >
                    Site Portfolio
                  </button>
                  <button
                    onClick={() => setFilter("Site Vitrine")}
                    className={`rounded-sm flex w-full paragraph hover:bg-indigo-500 hover:text-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${
                      filter === "Site Vitrine"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/30 text-black"
                    }`}
                  >
                    Site Vitrine
                  </button>
                  <button
                    onClick={() => setFilter("Site Ecommerce")}
                    className={` rounded-sm flex w-full paragraph hover:bg-indigo-500 hover:text-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${
                      filter === "Site Ecommerce"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/30 text-black"
                    }`}
                  >
                    Site Ecommerce
                  </button>
                  <button
                    onClick={() => setFilter("Site Evènement")}
                    className={` rounded-sm flex w-full paragraph hover:bg-indigo-500 hover:text-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${
                      filter === "Site Evènement"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/30 text-black"
                    }`}
                  >
                    Site Evènement
                  </button>
                  <button
                    onClick={() => setFilter("Site Personnel")}
                    className={`rounded-sm flex w-full paragraph hover:bg-indigo-500 hover:text-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${
                      filter === "Site Personnel"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/30 text-black"
                    }`}
                  >
                    Site Personnel
                  </button>
                  <button
                    onClick={() => setFilter("Site Entreprise")}
                    className={`rounded-sm flex w-full paragraph hover:bg-indigo-500 hover:text-white px-4 py-2 hover:translate-x-2 transition-all duration-300 ${
                      filter === "Site Entreprise"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/30 text-black"
                    }`}
                  >
                    Site Entreprise
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div className="w-full flex flex-col gap-6 flex-1 rounded-lg ">
              {filteredProjects.map((projet) => (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key={projet.id}
                  className=""
                >
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
            </motion.div>
          </article>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default PortfolioPage;

// target="_blank"
// rel="noopener noreferrer"
