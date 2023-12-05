import PillLink from "./PillLink";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Link from "next/link";
import IconsContainer from "./IconsContainer";
import TertiaryLink from "./TertiaryLink";

const TemplateItem = (props: {
  label: string;
  icons: React.ReactNode;
  codeHref: string;
  demoHref: string;
  imgSrc: string;
  license: "mit" | "gnu";
  children: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-1/2 flex flex-col space-y-5 justify-start">
        <div className="inline-flex justify-between items-baseline">
          <h2>{props.label}</h2>
          {props.icons}
        </div>
        <p>{props.children}</p>
        <div className="flex flex-row flex-wrap gap-2.5">
          <PillLink variant="fill" external href={props.demoHref}>
            Live Demo
          </PillLink>
          <PillLink variant="outline" external href={props.codeHref}>
            Source Code
          </PillLink>
        </div>
        <div className="">
          This template is licensed under the <TertiaryLink
            href={
              props.license == "mit"
                ? "https://opensource.org/license/mit/"
                : "https://opensource.org/license/gpl-3-0/"
            }
          >
            {props.license == "mit"
              ? "MIT License"
              : "GNU General Public License v3.0"}
          </TertiaryLink>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col space-y-2.5 justify-start">
        <Link
          href={props.demoHref}
          className="w-full h-[200px] lg:h-[400px] relative"
        >
          <Image
            alt="Demo Screenshot"
            src={props.imgSrc}
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default TemplateItem;

// props: {
//     label: string;
//     children: React.ReactNode;
//     href: string;
//   }
