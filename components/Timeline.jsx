"use client";

import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import Lilcon from "./lilcon";
import { FaGraduationCap } from "react-icons/fa6";





const Details = ({position, compagny, compagnyLink, time, adresse, work, diplome, obtenu }) => {

  const boxRef = useRef();
  const isboxInView = useInView(boxRef, { margin: "-100px" });

  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-center justify-between ml-4 overflow-hidden">

      <Lilcon reference={ref} />

      <motion.div
      ref={boxRef}
      initial={{ x: "-100%" }}
      animate={isboxInView ? { x: 0 } : {}}
      transition={{ duration: 0.5 }}

       className="p-6 border border-slate-200 dark:border-slate-700 rounded-md shadow-inner bg-white dark:bg-slate-950">
        <h4 className="flex flex-wrap capitalize font-semibold text-black dark:text-white h4">{position}&nbsp;<a href={compagnyLink} target="_blank" className="text-indigo-500 h5">@{compagny}</a></h4>
        <span className="capitalize font-semibold text-indigo-700 text-sm">
          {time}</span>
          &nbsp;|&nbsp;
         <span className="capitalize font-medium text-dark/75 paragraph text-slate-500"> 
          {adresse}</span>
        <p className="font-medium w-full paragraph text-slate-800">{work}</p>
        <h5 className="font-bold w-full paragraph text-slate-900 flex items-center h5"> {diplome}&nbsp;<span className="h5">{obtenu}</span></h5>
      </motion.div>
    </li>
  );
};


const Timeline = () => {


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  const dataTimeline = [
    {
      id: 1,
      title: "Bac Pro Mécanique Auto",
      description: "Lycée Professionnel Gaspard Monge - Savigny/Orge (91)",
      date: "1994 - 1996",
      color: "#242038",
      font: "white",
      dateColor: "cyan",
    },
    {
      id: 2,
      title: "Taglio Application",
      description:
        "Traitement de surface et Thermo laquage - Technicien de contrôle qualité",
      date: "2003 - 2010",
      color: "#DBE4EE",
      font: "black",
      dateColor: "darkviolet",
    },
    {
      id: 3,
      title: "Les Ateliers du goût",
      description: "Agroalimentaire - Magasinier Cariste",
      date: "2010 - 2022",
      color: "#DBE4EE",
      font: "black",
      dateColor: "blue",
    },
    {
      id: 4,
      title: "Formation OpenClassrooms",
      description:
        "Intégrateur Web - Développeur Front-End. Reconversion professionnelle pour être développeur web à plein temps.",
      date: "2023 - 2024",
      color: "#242038",
      font: "white",
      dateColor: "orange",
    },
  ];

  return (
    <div ref={ref} className="w-[75%] mx-auto relative">

      <motion.div
      style={{scaleY: scrollYProgress}}
       className="absolute -left-[2.7rem] top-0 w-[4px] h-full bg-slate-950 origin-top rounded-lg" />


      <ul className="w-full flex flex-col items-start justify-between">
        <Details
        position="BEP/CAP Mécanique Auto" compagny="Lycée des métiers Alexandre Denis" 
        compagnyLink="https://lyc-denis-cerny.ac-versailles.fr/" 
        time="1991 - 1994" adresse="La Ferté Alais (91)" 
        work="Bep Mécanique Auto"
        obtenu={<FaGraduationCap/>}
        diplome="Diplôme obtenu."
         />
        <Details
        position="Bac Pro Mécanique Auto" compagny="Lycée Professionnel Gaspard Monge" 
        compagnyLink="https://lyc-monge-savigny.ac-versailles.fr/" 
        time="1994 - 1996" adresse="Savigny/Orge (91)" 
        work="Bac Pro Mécanique Auto"
        diplome="Diplôme non obtenu."
         />
        <Details
        position="Technicien de contrôle qualité" compagny="Taglio Application" 
        compagnyLink="https://annuaire-entreprises.data.gouv.fr/entreprise/taglio-application-414870113" 
        time="2003 - 2010" adresse="	5-7-9, 5 RUE AMPERE, 91380 CHILLY-MAZARIN" 
        work="Traitement et revêtement des métaux - Traitement de surface et Thermo laquage."
        diplome=""
         />
        <Details
        position="Magasinier Cariste" compagny="Les Ateliers du goût" 
        compagnyLink="https://openclassrooms.com" 
        time="2010 - 2022" adresse=" 4 Rte de la Croix du Rat, 16300 Barbezieux-Saint-Hilaire" 
        work="Secteur Agroalimentaire | Produits fabriqués en France pour les professionnels de la restauration et les freezers centers."
        diplome=""
         />
        <Details
        position="Intégrateur Web, Développeur frontend" compagny="OpenClassrooms" 
        compagnyLink="https://openclassrooms.com" 
        time="2023 - 2024" adresse="Aquitaine, France" 
        work="Formation en ligne pour devenir développeur web à plein temps.
        Reconversion professionnelle pour être développeur web à plein temps."
        diplome="Diplôme obtenu."
        obtenu={<FaGraduationCap/>}
         />
      </ul>
    </div>
  );
};

export default Timeline;