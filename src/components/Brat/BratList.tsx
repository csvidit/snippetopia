import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import TemplateItem from "../TemplateItem";
import IconsContainer from "../IconsContainer";
import { BRAT_BIO_DEMO_URL, INVERNO_PORTFOLIO_DEMO_URL } from "@/utils/urls/demo-urls";
import { BRAT_BIO_GITHUB_URL, INVERNO_PORTFOLIO_GITHUB_URL } from "@/utils/urls/github-urls";

const InvernoList = () => {
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
        license="mit"
      >
        This template uses the 'brat' neon color and a condensed sans-serif font
        to mimic the vibe of Charli xcx's new album.
      </TemplateItem>
    </div>
  );
};

export default InvernoList;
