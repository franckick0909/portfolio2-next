"use client";
import img1 from "@/public/images/bank1.png";
import img2 from "@/public/images/bluel4.png";
import img3 from "@/public/images/kasa1.png";

import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";

const TextParallax = () => {


//   useEffect(() => {
//     const lenis = new Lenis();

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

useEffect(() => {}, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  return (
    <main className="overflow-hidden">
      <div className="h-[20vh]" />
      <motion.div ref={container}>
        <Slider src={img1} left="-99%" progress={scrollYProgress} direction="left"  />
        <Slider src={img2} left="-25%" progress={scrollYProgress} direction="right" />
        <Slider src={img3} left="-55%" progress={scrollYProgress} direction="left"  />
      </motion.div>

      <div className="h-[10vh]" />
    </main>
  );
};

export default TextParallax;

const Slider = ({ src, left, progress, direction }) => {

    const dir = direction === "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [-650 * dir, 650 * dir]);

  return (
    <motion.div style={{ left, x }} className="flex whitespace-nowrap relative">
      <div className="text-black">
      <Phrase src={src} p={"React Nextjs - Freelance"} />
      </div>
      <div className=" text-white">
        <Phrase src={src} p={"Franck Chapelon"} />
      </div>
      <div className=" text-black">
      <Phrase src={src} p={"Développeur web - Framer-Motion"}  />
      </div>
    </motion.div>
  );
};

const Phrase = ({ src, p }) => {
  return (
    <div className="flex gap-5 items-center px-5 my-1 bg-indigo-500 py-1">
      <p className=" font-Plaster  lg:text-[7.5vw]">{p}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} alt="image" className="w-full h-full object-cover" />
      </span>
    </div>
  );
};