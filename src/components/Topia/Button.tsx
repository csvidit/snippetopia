import Link from "next/link";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

interface TopiaLinkProps {
  href: string;
  variant: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const TopiaLink = (props: TopiaLinkProps) => {
  return (
    <Link
      href={props.href}
      target={props.external == true ? "_blank" : ""}
      className={`px-5 py-1 w-fit rounded-full border border-indigo-600 transition-all duration-200 ease-out ${
        props.variant == "fill"
          ? "bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 hover:bg-transparent hover:text-gray-900"
          : "bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-gray-100"
      }`}
    >
      <div className="inline space-x-2.5 items-center">
        <span className="inline items-center">{props.children}</span>
        <span className="inline">
          {props.external == true ? (
            <HiArrowUpRight className="inline" />
          ) : (
            <HiArrowRight className="inline" />
          )}
        </span>
      </div>
    </Link>
  );
};

export default TopiaLink;
