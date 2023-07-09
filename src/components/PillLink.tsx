import Link from "next/link";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

interface PillLinkProps {
  href: string;
  variant: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const defaultProps: PillLinkProps = {
    href: "/",
    variant: "outline",
    children: "Link",
    external: false,
    className: ""
}

const PillLink: React.FC<PillLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      target={props.external == true ? "_blank" : ""}
      className={`px-5 py-1 w-fit rounded-full border border-indigo-600 transition-all duration-200 ease-out ${
        props.variant == "fill"
          ? "bg-indigo-600 text-indigo-100 hover:bg-indigo-100 hover:text-indigo-600"
          : "bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-indigo-100"
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

PillLink.defaultProps = defaultProps;

export default PillLink;
