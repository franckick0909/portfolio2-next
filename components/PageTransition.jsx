"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "./Header";


const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
          className="h-screen w-screen fixed top-0 bg-white pointer-events-none"
        />
        <div className="h-24">
          <Header />
        </div>
        <div className="h-[100vh]" >{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
