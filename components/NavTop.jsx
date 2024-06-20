"use client";

import AnimatedLink from "@/app/AnimatedLink";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavTop = () => {
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "About", href: "/about" },
    { text: "Service", href: "/service" },
    { text: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center justify-end uppercase gap-8 text-base mr-24 overflow-hidden">
        {navLinks.map((link, index) => {
          return (
            <motion.div key={index} className="relative overflow-hidden">
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-indigo-500"
                    : "text-black dark:text-white"
                } font-medium dark:font-normal hover:text-indigo-500 dark:hover:text-indigo-400 transition-all`}
              >
                <AnimatedLink title={link.text} />
              </Link>
            </motion.div>
          );
        })}
      </div>
      
    </>
  );
};

export default NavTop;