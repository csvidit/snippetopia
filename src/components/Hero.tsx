import Link from "next/link";
import H1 from "./H1";
import { HiArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="mt-10 lg:mt-20 w-11/12 lg:w-10/12 flex flex-col space-y-5 h-full">
      <H1 className="font-medium tracking-tight">SNIPPETOPIA</H1>
      <p>
        All the React, Next.js, TailwindCSS, and Framer Motion snippets you will
        ever need.
      </p>
      <p className="px-4 py-1 bg-indigo-600 text-indigo-100 w-fit rounded-full">
        Coming Soon
      </p>
      <Link
        href="https://viditkhandelwal.com"
        target="_blank"
        className="flex group border-b border-indigo-600 w-fit transition-all ease-in-out duration-200"
      >
        <p className="inline-flex space-x-2 items-center">
          <span className="inline group-hover:text-indigo-600 transition-all ease-in-out duration-200">
            For now, continue to viditkhandelwal.com
          </span>

          <span className="inline text-indigo-600">
            <HiArrowRight />
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Hero;
