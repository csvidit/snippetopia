"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HiArrowUpRight,
  HiInformationCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import PillLink from "./PillLink";
import UnderlineLink from "./UnderlineLink";

const Hero = () => {
  return (
    <div className="w-11/12 lg:w-10/12 flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:space-x-5 lg:space-y-0 space-y-5 h-full min-h-screen">
      <div className="flex flex-col space-y-5">
        <h1 className="font-medium tracking-tight">SNIPPETOPIA</h1>
        <div className="inline-flex space-x-1 items-center border-l-2 border-indigo-600 px-1 text-gray-900 font-medium">
          {/* <div className="inline text-indigo-600"><HiOutlineInformationCircle/></div> */}
          <div className="inline tracking-tight">
            In early stages of development
          </div>
        </div>
        <p>
          All the React, Next.js, TailwindCSS, and Framer Motion snippets you
          will ever need.
        </p>
        <PillLink href="/bento" variant="fill">
          Check out the Bento Collection
        </PillLink>
        {/* <p className="px-5 py-1 bg-indigo-300 shadow-xl shadow-indigo-300 text-gray-600 w-fit rounded-full">
          Currently in early stages of development
        </p> */}
        <UnderlineLink href="https://viditkhandelwal.com" external>
          Wanna keep the suspense? Continue to my portfolio
        </UnderlineLink>
      </div>
    </div>
  );
};

export default Hero;

// mt-10 lg:mt-20
