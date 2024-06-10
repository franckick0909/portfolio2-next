"use client";
import { motion } from "framer-motion";

const videos = [
  { title: "video1", src: "/videos/video1.mp4" },
  { title: "video2", src: "/videos/video2.mp4" },
];

const CardVideo = () => {
  return (
    <div className="h-screen bg-slate-500 relative">
      <div className="absolute top-[30%] right-[25%]">
        <video
        className="rounded-lg shadow-lg"
          width={400}
          height={300}
          loop
          preload="auto"
          autoPlay
          playsInline
          src="/videos/video1.mp4"
        ></video>
      </div>
      <div className="absolute top-[20%] left-[20%]">
        <video
        className="rounded-lg shadow-lg"
          width={400}
          height={300}
          loop
          preload="auto"
          autoPlay
          playsInline
          src="/videos/video2.mp4"
        ></video>
      </div>
      <div className="absolute bottom-[0%] right-[50%]">
        <video
        className="rounded-lg shadow-lg"
          width={400}
          height={300}
          loop
          preload="auto"
          autoPlay
          playsInline
          src="/videos/video1.mp4"
        ></video>
      </div>
      <div className="absolute bottom-[-50%] left-[17%]">
        <video
        className="rounded-lg shadow-lg"
          width={400}
          height={300}
          loop
          preload="auto"
          autoPlay
          playsInline
          src="/videos/video2.mp4"
        ></video>
      </div>
      <div className="absolute bottom-[-90%] right-[20%]">
        <video
        className="rounded-lg shadow-lg"
          width={400}
          height={300}
          loop
          preload="auto"
          autoPlay
          playsInline
          src="/videos/video1.mp4"
        ></video>
      </div>
    </div>
  );
};

export default CardVideo;
