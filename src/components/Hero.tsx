import Link from "next/link";
import Image from "next/image";
import H1 from "./H1";
import { HiArrowUpRight } from "react-icons/hi2";

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
        <p className="px-4 py-1 bg-indigo-600 text-indigo-100 w-fit rounded-full">
          Coming Soon
        </p>
        <Link
          href="https://viditkhandelwal.com"
          target="_blank"
          className="flex group border-b border-indigo-600 w-fit transition-all ease-in-out duration-200"
        >
          <div className="inline space-x-2 items-center">
            <span className="inline group-hover:text-indigo-600 transition-all ease-in-out duration-200">
              For now, continue to viditkhandelwal.com
            </span>
            <span className="inline text-indigo-600">
              <HiArrowUpRight className="inline" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

// mt-10 lg:mt-20
