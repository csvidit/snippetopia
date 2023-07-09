import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row space-x-5 lg:space-x-0 lg:space-y-5 py-5 w-11/12 lg:w-10/12 items-start border-t border-t-indigo-300">
      <div className="flex flex-col space-y-2.5">
        <p className="text-indigo-600 font-medium tracking-tight text-2xl">
          SNIPPETOPIA
          <span className="text-indigo-300">.xyz</span>
        </p>
        <div className="flex flex-col space-y-1 lg:w-3/4 text-justify">
          <p className="">
            A free repository of high-quality web development
            snippets &#8212; React, Next.js client and server-side, TailwindCSS, and Framer Motion is on the menu.
          </p>
          <p className="">
            A project by <Link href="https://viditkhandelwal.com" className="inline text-indigo-600 hover:text-indigo-600 hover:border-b hover:border-b-indigo-600 transition-all duration-100">Vidit Khandelwal</Link>. Snippetopia is not endorsed by React, Next.js, and/or Tailwind Labs in any shape or form, financial or otherwise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
