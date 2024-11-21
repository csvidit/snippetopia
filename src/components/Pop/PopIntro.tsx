"use client";

const PopIntro = () => {
  return (
    <div className="mt-40 flex h-full w-11/12 flex-col items-center justify-center space-y-5 lg:w-10/12 lg:flex-row lg:justify-start lg:space-x-5 lg:space-y-0">
      <div className="flex flex-col space-y-5">
        <h1 className="font-medium uppercase tracking-tight">
          Pop <span className="text-indigo-300">Single Page App Templates</span>
        </h1>
        <p>
          A bit more than snippets, a bit less than a full blown UI library.
          This is for the people who need a quick online presence, a simple
          link-in-bio page, etc.
        </p>
        <div>
          <span className="font-medium text-gray-950">
            What is this collection about?
          </span>{" "}
          Inspired by bold colors with or without solid black borders, flowly
          resizing movements, and a certain modern art vibe that is found in
          Bauhaus style, among others.
        </div>
      </div>
    </div>
  );
};

export default PopIntro;
