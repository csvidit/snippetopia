"use client";

import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false)
  }, [pathName]);

  return (
    <MotionConfig
      transition={{
        type: "tween",
        duration: 0.35,
        ease: "easeInOut",
        delay: 0,
      }}
    >
      <AnimatePresence mode="popLayout">
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              style={{
                // borderRadius: isOpen ? "16px" : "9999px",
                border: "1px solid #a5b4fc",
              }}
              className="bg-indigo-200 rounded-md z-50 flex flex-col absolute top-5 lg:top-10 w-11/12 lg:w-10/12 items-start px-5 shadow-sm shadow-indigo-300"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  className="flex w-full flex-row items-center self-center justify-between"
                >
                  <motion.div layout className="text-indigo-600 font-medium">
                    <Link href="/">SNIPPETOPIA</Link>
                  </motion.div>
                  <Hamburger
                    color="#4f46e5"
                    rounded
                    size={20}
                    toggled={isOpen}
                    toggle={setIsOpen}
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="popLayout">
                <NavLinks isOpen={isOpen} />
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Nav;
