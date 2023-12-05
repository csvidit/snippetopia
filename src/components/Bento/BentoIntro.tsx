"use client";

import { MouseEvent } from "react";
import { CopyBlock, irBlack } from "react-code-blocks";

const BentoIntro = () => {
  return (
    <div className="mt-40 w-11/12 lg:w-10/12 flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:space-x-5 lg:space-y-0 space-y-5 h-full">
      <div className="flex flex-col space-y-5">
        <h1 className="font-medium tracking-tight">
          BENTO{" "}
          <span className="text-indigo-300">SINGLE PAGE APP TEMPLATES</span>
        </h1>
        <p>
          A bit more than snippets, a bit less than a full blown UI library.
          This is for the people who need a quick online presence, a simple
          link-in-bio page, etc.
        </p>
        <div>
          <span className="font-medium text-gray-950">
            Why do we need this collection?
          </span>{" "}
          First, I believe my design intuition is quite good. Second, I
          haven&apos;t really been able to find good and free UI or template
          collections that use both Tailwind and Framer Motion. Tailwind&apos;s
          own animation utility classes are very limited, and all the Framer
          Motion examples online are for Framer, the website builder, not Framer
          Motion, the animation library.
        </div>
        {/* <div className="flex flex-row flex-wrap space-x-2.5">
          <p className="px-5 py-1 bg-indigo-600 text-indigo-100 w-fit rounded-full">
            Components
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default BentoIntro;
