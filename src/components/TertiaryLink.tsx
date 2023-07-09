import Link from "next/link";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

interface TertiaryLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const defaultProps: TertiaryLinkProps = {
    href: "/",
    children: "Link",
    external: false,
    className: ""
}

const TertiaryLink: React.FC<TertiaryLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      target={props.external == true ? "_blank" : ""}
      className={`inline text-indigo-600 hover:text-indigo-600 hover:border-b hover:border-b-indigo-600 transition-all duration-100`}
    >
      <div className="inline space-x-2.5 items-center">
        <span className="inline">{props.children}</span>
      </div>
    </Link>
  );
};

TertiaryLink.defaultProps = defaultProps;

export default TertiaryLink;
