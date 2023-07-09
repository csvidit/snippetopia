import Link from "next/link";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

interface UnderlineLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const defaultProps: UnderlineLinkProps = {
    href: "/",
    children: "Link",
    external: false,
    className: ""
}

const UnderlineLink: React.FC<UnderlineLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      target={props.external == true ? "_blank" : ""}
      className={`flex group border-b border-indigo-600 w-fit transition-all ease-in-out duration-200`}
    >
      <div className="inline space-x-2.5 items-center">
        <span className="inline group-hover:text-indigo-600 transition-all ease-in-out duration-200 items-center">{props.children}</span>
        <span className="inline text-indigo-600">
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

UnderlineLink.defaultProps = defaultProps;

export default UnderlineLink;
