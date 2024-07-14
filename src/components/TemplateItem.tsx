import PillLink from "./PillLink";
import Image from "next/image";
import Link from "next/link";
import TertiaryLink from "./TertiaryLink";
import { Licenses } from "@/utils/types/license-types";

const TemplateItem = (props: {
  label: string;
  icons: React.ReactNode;
  codeHref: string;
  demoHref: string;
  imgSrc: string;
  license: Licenses
  children: string;
}) => {

  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="flex flex-col justify-start w-full space-y-5 lg:w-1/2">
        <div className="inline-flex items-baseline justify-between">
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
            href={licenses[props.license].url}
          >
            {licenses[props.license].name}
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
