const BratIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 h-full mt-40 space-y-5 lg:w-10/12 lg:flex-row lg:justify-start lg:space-x-5 lg:space-y-0">
      <div className="flex flex-col space-y-5">
        <h1 className="font-medium tracking-tight uppercase">
          Brat <span className="text-indigo-300">COLLECTION</span>
        </h1>
        <p>
          A bit more than snippets, a bit less than a full blown UI library.
          This is for the people who need a quick online presence, a simple
          link-in-bio page, etc
        </p>
        <div>
          <span className="font-medium text-gray-950">
            What is this collection about?
          </span>{" "}
          Inspired by the new Charli xcx album! It&apos;s edgy, it's minimalist, its
          Gen-Z.
        </div>
      </div>
    </div>
  );
};

export default BratIntro;
