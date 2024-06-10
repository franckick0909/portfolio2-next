"use client";
import { motion } from "framer-motion";

const stairsVariants = {
  animate: {
    height: "0vh",
  },
    exit: {
        height: "120vh",
    },
};

const Stairs = () => {
  // Calcul de l'index de la bande, pour l'animation stagger
  const reverseIndex = (index) => {
    const totalBandes = 7;
    return totalBandes - index - 1;
  };

  return (
    <>
      {[...Array(7)].map((_, index) => {
        return (
        <motion.div
          key={index}
          variants={stairsVariants}
          initial="initial"
          animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              delay: reverseIndex(index) * 0.1,
              ease: [0.37, 0, 0.63, 1],
            }}
          className="w-full h-screen bg-black relative"
        />
        );
      })}
    </>
  );
};

export default Stairs;
