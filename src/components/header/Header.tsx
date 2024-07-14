"use client";

import Nav from "./Nav";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Rotate as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <LayoutGroup>
      <motion.header
        layout
        layoutRoot
        className="fixed z-40 self-center w-full top-4 lg:top-6 lg:flex lg:flex-col"
      >
        <motion.div
          layout
          layoutRoot={isTabletOrMobile ? false : true}
          className="absolute z-50 flex flex-col items-start w-11/12 px-5 bg-indigo-200 rounded-md shadow-sm top-5 shadow-indigo-300 lg:top-10 lg:w-10/12"
        >
          <motion.div
            layout
            className="flex flex-row items-center justify-between gap-2 lg:justify-start"
          >
            <motion.div layout className="font-medium text-indigo-600">
              <Link href="/">SNIPPETOPIA</Link>
            </motion.div>
            {isTabletOrMobile ? (
              <Hamburger
                color="#4f46e5"
                rounded
                size={20}
                toggled={isOpen}
                toggle={setOpen}
              />
            ) : (
              <Nav />
            )}
          </motion.div>
          {isTabletOrMobile && (
            <AnimatePresence mode="popLayout">
              {isOpen && <Nav />}
            </AnimatePresence>
          )}
        </motion.div>
      </motion.header>
    </LayoutGroup>
  );
};

export default Header;
