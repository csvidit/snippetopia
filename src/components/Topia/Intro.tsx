"use client";

import { MouseEvent } from "react";
import { CopyBlock, irBlack } from "react-code-blocks";
import SnippetItem from "./SnippetItem";

const Intro = () => {
  return (
    <div className="mt-10 lg:mt-40 w-11/12 lg:w-10/12 flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:space-x-5 lg:space-y-0 space-y-5 h-full">
      <div className="flex flex-col space-y-5">
        <h1 className="font-medium tracking-tight">
          TOPIA <span className="text-indigo-300">UI COLLECTION</span>
        </h1>
        <p>
          The first Snippetopia collection. Be patient, I am still figuring out
          the direction I want this collection to go in, but for now, it is a
          collection of great components and utility snippets which combine the
          best of Tailwind and Framer Motion.
        </p>
        <div>
          <span className="font-medium text-gray-950">
            Why do we need this collection?
          </span>{" "}
          Well, I haven&apos;t really been able to find any easy to access or
          use libraries that use both Tailwind and Framer Motion.
          Tailwind&apos;s own animation utility classes are very limited, and
          all the Framer Motion examples online are for Framer, the website
          builder, not Framer Motion, the animation library.
        </div>
        {/* <div className="flex flex-row flex-wrap space-x-2.5">
          <p className="px-5 py-1 bg-indigo-600 text-indigo-100 w-fit rounded-full">
            Components
          </p>
        </div> */}
        <div className="flex flex-col space-y-10">
          <SnippetItem  />
        </div>
      </div>
    </div>
  );
};

export default Intro;

// mt-10 lg:mt-20
