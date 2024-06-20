"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye, FaAward, FaDownload } from "react-icons/fa";



const Biographie = () => {
  const variants = {
    initial: {
      x: "25%",
      opacity: 0,
    },
    animate: {
      x: "0%",
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <p className="paragraph text-black dark:text-white">
        Je suis un développeur web full stack passionné par la création de sites
        web et d{"'"}applications web. J{"'"}ai une expérience de plus de 5 ans
        dans le développement web. J{"'"}ai travaillé sur des projets allant de
        simples sites web à des applications web complexes. J{"'"}ai une solide
        expérience dans le développement de sites web responsives, de sites web
        e-commerce et d{"'"}applications web personnalisées.
      </p>

      <div className="w-full h-full bg-slate-950 dark:bg-white rounded-lg flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500 dark:text-black">&#10003;</span>Prénom:{" "}
            </p>
            <p className="paragraph text-slate-200 dark:text-slate-700">Franck Chapelon</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500 dark:text-black">&#10003;</span>Age:{" "}
            </p>
            <p className="paragraph text-slate-200 dark:text-slate-700">48 ans</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500 dark:text-black">&#10003;</span>
              Nationnalité:{" "}
            </p>
            <p className="paragraph text-slate-200 dark:text-slate-700">Français</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500 dark:text-black">&#10003;</span>
              Emplacement:{" "}
            </p>
            <p className="paragraph text-slate-200 dark:text-slate-700">Dordogne, France</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10 relative group">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500 dark:text-black">&#10003;</span>Freelance:{" "}
            </p>
            <p class="text-lg group relative w-max">
              <span class="px-1 relative z-10 group-hover:text-white text-slate-200 dark:text-slate-700 paragraph">
                Disponible
              </span>
              <span class="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-emerald-500 z-0 group-hover:h-full rounded"></span>
            </p>
          </div>
        </div>
      </div>
      <q className="h5 italic font-semibold text-slate-950 dark:text-indigo-500/30">
        Programmeur : Une machine qui transforme le café en code.
      </q>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="rounded-full bg-indigo-700 px-6 py-2 text-sm font-medium text-white"
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        SyntaxUI
      </motion.button>



      <div className="fixed bg-slate-950 w-full h-96 z-[-1]">
        <Image
          src="/images/skills/codeurCafe.jpg"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-full flex items-center justify-between gap-4 flex-wrap">
        <div className="flex flex-col items-start justify-start flex-1 gap-3">

        </div>

        <div className="w-full h-max flex items-center justify-end pr-12 pb-8 flex-1">
          {/* <Image
            src=""
            layout="responsive"
            alt="about"
            className="max-w-[10rem]"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Biographie;
