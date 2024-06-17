"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stats = () => {


  const slideDown = {
    initial: {
      y: -200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const stats = [
    { title: "Années d'expériences", count: 1 },
    { title: "Projects terminés", count: 15 },
    { title: "Technologies maîtrisées", count: 10 },
    { title: "Nombres de commits", count: 184 },
  ];

  return (
    <section className="container mx-auto">
      <motion.div
        variants={slideDown}
        initial="initial"
        animate="animate"
        className="grider2 gap-4"
        // className="flex flex-wrap gap-4 max-w-full mx-auto xl:max-w-none overflow-hidden p-[2px]"
      >
        {stats.map((stat, index) => (
          <motion.div
            variants={slideDown}
            key={index}
            className="w-full flex flex-1 flex-wrap gap-0 lg:gap-2 xl:gap-4 items-center justify-start border rounded-md px-2 py-1 shadow "
          >
            <CountUp
              start={0}
              end={stat.count}
              duration={5}
              delay={2}
              separator=" "
              decimals={0}
              decimal=","
              prefix=""
              suffix=""
              className="h2 font-extrabold text-indigo-600 font-jetBrainsMono"
            />
            <p
              className={` ${
                stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-black/80 paragraph`}
            >
              {stat.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
