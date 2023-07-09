"use client";

import Link from "next/link";
import { UrlObject } from "url";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";

const NavItem = (props: { href: string; children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <Link
        href={props.href}
        className="flex flex-row space-x-1 items-center group w-fit"
      >
        <motion.div
          layout
          className="flex flex-row items-center py-1 w-full justify-between rounded-lg text-gray-600 group-hover:ease-in-out group-hover:transition-all group-hover:text-indigo-600 group-hover:transform"
        >
          {props.children}
          <BsArrowRightShort className="flex scale-0 group-hover:scale-100 group-hover:ease-in-out group-hover:transition-transform" />
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};

export default NavItem;
