import Link from "next/link";
import Image from "next/image";
import H1 from "./H1";
import { HiArrowUpRight } from "react-icons/hi2";
import PillLink from "./PillLink";
import UnderlineLink from "./UnderlineLink";

const Hero = () => {
  return (
    <div className=" w-11/12 lg:w-10/12 flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:space-x-5 lg:space-y-0 space-y-5 h-full min-h-screen">
      <div className="flex flex-col space-y-5">
        <H1 className="font-medium tracking-tight">
          SNIPPETOPIA
        </H1>
        <p>
          All the React, Next.js, TailwindCSS, and Framer Motion snippets you
          will ever need.
        </p>
        <p className="px-5 py-1 bg-indigo-600 text-indigo-100 w-fit rounded-full">
          Coming Soon
        </p>
        <UnderlineLink href="https://viditkhandelwal.com" external>For now, continue to viditkhandelwal.com</UnderlineLink>
      </div>
    </div>
  );
};

export default Hero;

// mt-10 lg:mt-20
