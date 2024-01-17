const InvernoIntro = () => {
    return (
      <div className="mt-40 w-11/12 lg:w-10/12 flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:space-x-5 lg:space-y-0 space-y-5 h-full">
        <div className="flex flex-col space-y-5">
          <h1 className="font-medium tracking-tight uppercase">
            Inverno{" "}
            <span className="text-indigo-300">COLLECTION</span>
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
            This collection uses shiny accents, shadows, and glows to create a luxurious and futuristic look against a dark dark backdrop.
          </div>
          {/* <div>
            <span className="font-medium text-gray-950">
              Why do we need this collection?
            </span>{" "}
          </div> */}
        </div>
      </div>
    );
  };
  
  export default InvernoIntro;
  