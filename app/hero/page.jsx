"use client";
import LetterSplitX from "@/components/LetterSplitX";
import Stats from "@/components/Stats";
import TextParallax from "@/components/TextParallax";
import TextSplit from "@/components/TextSplit";
// import Marquee from "react-fast-marquee";
// import LetterScroll from "@/components/LetterScroll";
import { AnimatePresence, motion } from "framer-motion";

const PageHero = () => {
  return (
    <AnimatePresence>
      <motion.section
        className=" w-full h-[calc(100vh-6rem)] relative bg-white">


          <div className="container mx-auto">
            <div className="w-full h-full flex max-lg:flex-col justify-between mt-[40px] gap-4">


              <div className="p-4 flex flex-col flex-[2]">
                <h1 className="text-5xl lg:text-7xl xl:text-9xl font-oswald font-semibold text-slate-900 uppercase max-w-96">
                  <TextSplit phrase="Développeur Front-End" delay={0.08} />
                </h1>
              </div>

              <div className="flex flex-1 flex-col justify-between h-[50vh] gap-10 p-4">
                <div className="flex flex-1 mt-10 max-lg:justify-center">
                  <p className="paragraph max-w-96 text-balance">
                    <TextSplit
                      phrase="Je suis un Développeur web, basé en Aquitaine, France. Je suis passionné par la conception web depuis que ça existe, et j'aime créer sur tous supports."
                      delay={0.04}
                    />
                  </p>{" "}
                </div>
                <div className="w-full flex-1 flex max-lg:justify-end">
                  <h1 className="h1 font-oswald font-semibold text-slate-900 uppercase max-w-[28rem] ">
                    {/* <TextSplit phrase="React Freelance" delay={0.02} /> */}
                    <LetterSplitX phrase="React" delay={0.05} />
                    <LetterSplitX phrase="Freelance" delay={0.09} />
                  </h1>
                </div>
              </div>
            </div>
          </div>

<div className="w-full mt-4 sm:mt-10 md:mt-20 lg:mt-32">
  <Stats />
</div>
          
          {/* <div className="mb-96">
            <TextParallax />
          </div> */}
          
      </motion.section>
    </AnimatePresence>
  );
};

export default PageHero;

{
  /* <div className="absolute bottom-40 left-0 flex flex-col gap-4">
<Marquee direction={"left"} speed={"110"}>
  <h1 className="font-jetBrainsMono font-bold text-[4rem] lg:text-[3rem] uppercase textTransparent1 bg-indigo-500">
    <LetterScroll
      className=""
      letter={["f","r","a","n","c","k","-",                  "c","h","a","p","e","l","o","n","-", "f","r","a","n","c","k","-","c","h","a","p","e","l","o","n","-", "f","r","a","n","c","k","-", "c","h","a","p","e","l","o","n","-",]}
        />
  </h1>
</Marquee>
<Marquee direction={"right"} speed={"120"} >
  <h1 className="font font-bold text-[4rem] lg:text-[3rem] uppercase textTransparent2 bg-indigo-500">
    <LetterScroll
      className=""
      letter={["f","r","a","n","c","k","-",                  "c","h","a","p","e","l","o","n","-","f","r","a","n","c","k","-", "c","h","a","p","e","l","o","n","-", "f","r","a","n","c","k","-", "c","h","a","p","e","l","o","n","-",]}
        />
  </h1>
</Marquee>
</div> */
}
