"use client";
import Image from "next/image";
import img1 from "../public/images/kasa1.png";
import img2 from "../public/images/kasa2.png";
import img3 from "../public/images/kasa3.png";
import img4 from "../public/images/kasa4.png";
import img5 from "../public/images/bank2.png";
import img6 from "../public/images/bank1.png";
import img7 from "../public/images/bank3.png";
import img8 from "../public/images/bank2.png";
import img9 from "../public/images/bank5.png";
import img10 from "../public/images/bank1.png";
import img11 from "../public/images/moviedb2.png";
import img12 from "../public/images/moviedb3.png";
import img13 from "../public/images/moviedb4.png";
import img14 from "../public/images/moviedb5.png";
import img15 from "../public/images/moviedb7.png";
import img16 from "../public/images/sophie1.png";
import img17 from "../public/images/sophie3.png";
import img18 from "../public/images/bluel1.png";
import img19 from "../public/images/bluel2.png";
import img20 from "../public/images/bluel3.png";

// import ecran from "../public/images/divers/ecrans.jpg";


import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useDimension from "@/app/useDimension";
import { FaEye } from "react-icons/fa6";

const images = [
  {
    src: img1,
    alt: "kasa1",
    title: "Kasa",
    link: "https://franckick0909.github.io/kasa-react/",
    icon: <FaEye />,
  },
  {
    src: img2,
    alt: "kasa2",
    title: "Kasa",
    link: "https://franckick0909.github.io/kasa-react/",
    icon: <FaEye />,
  },
  {
    src: img3,
    alt: "kasa3",
    title: "Kasa",
    link: "https://franckick0909.github.io/kasa-react/",
    icon: <FaEye />,
  },
  {
    src: img4,
    alt: "kasa4",
    title: "Kasa",
    link: "https://franckick0909.github.io/kasa-react/",
    icon: <FaEye />,
  },
  {
    src: img5,
    alt: "Argent Bank",
    title: "Argent Bank",
    link: "https://netprime.fr",
    icon: <FaEye />,
  },
  {
    src: img6,
    alt: "Argent Bank",
    title: "Argent Bank",
    link: "https://netprime.fr",
    icon: <FaEye />,
  },
  {
    src: img7,
    alt: "Argent Bank",
    title: "Argent Bank",
    link: "https://netprime.fr",
    icon: <FaEye />,
  },
  {
    src: img8,
    alt: "Argent Bank",
    title: "Argent Bank",
    link: "https://netprime.fr",
    icon: <FaEye />,
  },
  {
    src: img9,
    alt: "sophie bluel1",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
  {
    src: img10,
    alt: "sophie bluel2",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
  {
    src: img11,
    alt: "sophie bluel3",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
  {
    src: img12,
    alt: "moviedb1",
    title: "Moviedb",
    link: "https://franckick0909.github.io/NetPrime2/",
    icon: <FaEye />,
  },
  {
    src: img13,
    alt: "moviedb2",
    title: "Moviedb",
    link: "https://franckick0909.github.io/NetPrime2/",
    icon: <FaEye />,
  },
  {
    src: img14,
    alt: "moviedb3",
    title: "Moviedb",
    link: "https://franckick0909.github.io/NetPrime2/",
    icon: <FaEye />,
  },
  {
    src: img15,
    alt: "moviedb4",
    title: "Moviedb",
    link: "https://franckick0909.github.io/NetPrime2/",
    icon: <FaEye />,
  },
  {
    src: img16,
    alt: "Sophie Bluel",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
  {
    src: img17,
    alt: "Sophie Bluel",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
  {
    src: img18,
    alt: "Sophie Bluel",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
  {
    src: img19,
    alt: "Sophie Bluel",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
  {
    src: img20,
    alt: "Sophie Bluel",
    title: "Sophie Bluel",
    link: "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
    icon: <FaEye />,
  },
];

const ScrollParallax = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {}, []);

  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div className="w-full">
      <div className=" h-[30vh]">
      </div>
      <div
        ref={container}
        className="w-full h-[175vh] bg-slate-950 dark:bg-white p-[2vw] overflow-hidden relative flex justify-center gap-[2vw] box-border "
      >
        <div className="relative top-[-45%]">
          <Column
            images={[images[0], images[1], images[2], images[3], images[4]]}
            y={y1}
          />
        </div>

        <div className="relative top-[-95%]">
          <Column
            y={y2}
            images={[images[5], images[6], images[7], images[8], images[9]]}
          />
        </div>

        <div className="relative top-[-45%]">
          <Column
            y={y3}
            images={[
              images[10],
              images[11],
              images[12],
              images[13],
              images[14],
            ]}
          />
        </div>
        <div className="relative top-[-75%]">
          <Column
            y={y4}
            images={[
              images[15],
              images[16],
              images[17],
              images[18],
              images[19],
            ]}
          />
        </div>
      </div>
      <div className="h-[30vh]"></div>
    </div>
  );
};

export default ScrollParallax;

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div
      style={{ y }}
      className="w-[25%] h-auto flex flex-col gap-[2vw] min-w-[250px] relative"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-[400px] w-[300px] rounded-lg overflow-hidden group"
          // className="relative min-h-[250px] w-full rounded-lg overflow-hidden group"
        >
          <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="group-hover:grayscale-1" />
          
          <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-black to-indigo-700/70 transition-transform duration-300 group-hover:translate-y-0 flex flex-col items-center justify-center gap-4"> 
            <h4 className="h4 text-white">{image.title}</h4>
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-8xl font-bold text-indigo-500 transition-all duration-300 hover:text-white hover:scale-110"
            >
              {image.icon}
            </a>
          </div>

        </div>
      ))}
    </motion.div>
  );
};
