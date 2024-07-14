"use client";

import { links } from "@/utils/nav/nav-links";
import NavItem from "./NavItem";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = (props: { className?: string }) => {
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  return (
    <motion.nav layout layoutRoot className={props.className}>
      <motion.ul className="flex flex-col lg:flex-row">
        {links.map(({ key, href, label }, index) => (
          <NavItem
            index={index}
            key={key}
            href={href}
            hoveredButtonId={hoveredButtonId}
            setHoveredButtonId={setHoveredButtonId}
          >
            {label}
          </NavItem>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Nav;
