"use client";

import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { Squash as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MotionConfig
      transition={{
        type: "tween",
        duration: 0.35,
        ease: "easeInOut",
      }}
    >
      <AnimatePresence>
        <LayoutGroup>
          <AnimatePresence>
            <motion.div
              layout
              style={{ borderRadius: "16px", border: "1px solid #a5b4fc" }}
              className="z-50 flex flex-col fixed top-5 lg:top-10 px-5 w-10/12 items-start shadow-2xl shadow-indigo-500 bg-indigo-100"
            >
              <motion.div
                layout
                className="flex w-full flex-row items-center self-center justify-between"
              >
                <motion.div layout className="text-indigo-600 font-medium">
                  SNIPPETOPIA
                </motion.div>
                <Hamburger
                  color="#4f46e5"
                  rounded
                  size={20}
                  toggled={isOpen}
                  toggle={setIsOpen}
                />
              </motion.div>
              <AnimatePresence>
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
