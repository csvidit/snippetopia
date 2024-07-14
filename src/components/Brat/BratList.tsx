import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import TemplateItem from "../TemplateItem";
import IconsContainer from "../IconsContainer";
import { BRAT_BIO_DEMO_URL } from "@/utils/urls/demo-urls";
import { BRAT_BIO_GITHUB_URL } from "@/utils/urls/github-urls";

const BratList = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <TemplateItem
        label="Brat Link In Bio Template"
        icons={
          <IconsContainer>
            <SiNextdotjs />
            <SiTailwindcss />
            <TbBrandFramerMotion />
          </IconsContainer>
        }
        demoHref={BRAT_BIO_DEMO_URL}
        codeHref={BRAT_BIO_GITHUB_URL}
        imgSrc="/brat-bio-demo-screenshot.png"
        license={Licenses.UNLICENSE}
      >
        This template uses the &apos;brat&apos; neon color and a condensed sans-serif font
        to mimic the vibe of Charli xcx&apos;s new album.
      </TemplateItem>
    </div>
  );
};

export default BratList;
