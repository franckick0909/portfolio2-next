"use client";

import { motion } from "framer-motion";

const SvgScroll = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        version="1.0"
        width="100%"
        height="100%"
        viewBox="0 0 820.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <motion.path
            initial={{ pathLength: 0, fill: "#ffffff", offset: 0 }}
            animate={{
              pathLength: 1,
              fill: ["#ffffff", "#4b0082"],
              offset: 1,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            d="M3915 5106 c-298 -43 -565 -177 -775 -386 -213 -214 -345 -481 -385
-780 -21 -156 -21 -2618 0 -2765 33 -233 116 -437 254 -623 450 -607 1305
-730 1910 -275 286 215 475 537 526 898 21 147 21 2609 0 2765 -41 305 -171
565 -394 787 -137 137 -333 259 -517 321 -176 60 -439 84 -619 58z m420 -171
c235 -48 438 -158 611 -330 171 -170 278 -370 331 -615 17 -80 18 -167 18
-1430 0 -1263 -1 -1350 -18 -1430 -69 -321 -250 -592 -511 -765 -215 -141
-409 -199 -666 -199 -257 0 -451 58 -666 199 -261 173 -442 444 -511 765 -17
80 -18 167 -18 1430 0 1483 -3 1399 62 1590 145 426 526 737 979 799 94 13
292 6 389 -14z"
          />
          <motion.path
            className="absolute top-0 left-0 w-full h-full"
            fill="#222"
            strokeWidth="0.2"
            initial={{ pathLength: 0, y: 0 }}
            animate={{ pathLength: 1, y: -1000 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            d="M4020 4000 l0 -320 80 0 80 0 0 320 0 320 -80 0 -80 0 0 -320z"
          />
        </g>
      </svg>

        <p
          className="text-black animate-bounce mt-4 pText"
        >Scroll Down</p>
    </div>
  );
};

export default SvgScroll;

// fill="#00000049"
// strokeWidth="0.2"
// initial={{ pathLength: 0, y: 0 }}
// animate={isInview && { pathLength: 1, y: -30 }}
// transition={{
//   duration: 2,
//   ease: "easeInOut",
//   repeat: Infinity,
//   repeatType: "reverse",
// }}