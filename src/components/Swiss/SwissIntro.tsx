const SwissIntro = () => {
  return (
    <div className="mt-40 w-11/12 lg:w-10/12 flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:space-x-5 lg:space-y-0 space-y-5 h-full">
      <div className="flex flex-col space-y-5">
        <h1 className="font-medium tracking-tight uppercase">
          Swiss{" "}
          <span className="text-indigo-300">Single Page App Templates</span>
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
          This collection uses swiss design principles for a clean, minimalist,
          and geometric look.
        </div>
        {/* <div>
          <span className="font-medium text-gray-950">
            Why do we need this collection?
          </span>{" "}
          First, I believe my design intuition is quite good. Second, I
          haven&apos;t really been able to find good and free UI or template
          collections that use both Tailwind and Framer Motion. Tailwind&apos;s
          own animation utility classes are very limited, and all the Framer
          Motion examples online are for Framer, the website builder, not Framer
          Motion, the animation library.
        </div> */}
      </div>
    </div>
  );
};

export default SwissIntro;
