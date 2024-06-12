"use client";
import LetterSplitX from "@/components/LetterSplitX";
import TextParallax from "@/components/TextParallax";
import TextSplit from "@/components/TextSplit";
// import Marquee from "react-fast-marquee";
// import LetterScroll from "@/components/LetterScroll";
import { AnimatePresence, motion } from "framer-motion";

const PageHero = () => {
  return (
    <AnimatePresence>
      <motion.section
        className="bg-white w-full h-screen relative">

        <div className="w-full h-screen relative">
          <div className="container mx-auto">
            <div className="w-full h-full flex max-lg:flex-col justify-between pt-[100px] gap-10">
              <div className="p-4 flex flex-col justify-start max-lg:w-full">
                <h1 className="text-5xl lg:text-7xl xl:text-9xl font-oswald font-semibold text-black uppercase max-w-96">
                  <TextSplit phrase="Développeur Front-End" delay={0.08} />
                </h1>
              </div>

              <div className="h-[28rem] w-full flex flex-col lg:justify-between p-4 max-lg:w-full gap-20">
                <div className="w-full flex place-items-end justify-center lg:justify-end">
                  <p className="paragraph max-w-96 text-justify">
                    <TextSplit
                      phrase="Je suis un Développeur web, basé en Aquitaine, France. Je suis passionné par la conception web depuis que ça existe, et j'aime créer sur tous supports."
                      delay={0.04}
                    />
                  </p>{" "}
                </div>
                <div className="w-full flex place-items-end justify-end">
                  <h1 className="text-4xl lg:text-6xl font-oswald font-semibold text-black uppercase max-w-96 ">
                    {/* <TextSplit phrase="React Freelance" delay={0.02} /> */}
                    <LetterSplitX phrase="React" delay={0.05} />
                    <LetterSplitX phrase="Freelance" delay={0.09} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:top-[-1rem]">
            <TextParallax />
          </div>
          
        </div>
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
