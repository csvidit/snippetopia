import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import PillLink from "../PillLink";
import TemplateItem from "../TemplateItem";
import IconsContainer from "../IconsContainer";
import { BENTO_BIO_DEMO_URL, BENTO_PORTFOLIO_DEMO_URL } from "@/utils/urls/demo-urls";
import { BENTO_BIO_GITHUB_URL, BENTO_PORTFOLIO_GITHUB_URL } from "@/utils/urls/github-urls";

const BentoList = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <TemplateItem
        label="Bento Portfolio Page"
        icons={
          <IconsContainer>
            <SiNextdotjs />
            <SiTailwindcss />
            <TbBrandFramerMotion />
          </IconsContainer>
        }
        demoHref={BENTO_PORTFOLIO_DEMO_URL}
        codeHref={BENTO_PORTFOLIO_GITHUB_URL}
        imgSrc="/bento-portfolio-demo-screenshot.png"
        license="mit"
      >
        This template makes use of a wonderful combination of dark forest and
        pine colors along with cool grays. It is geared towards designers and
        developers who want to show a snapshot of their skills and work while
        providing links to their other professional platforms.
      </TemplateItem>
      <TemplateItem
        label="Bento Link In Bio Page"
        icons={
          <IconsContainer>
            <SiNextdotjs />
            <SiTailwindcss />
            <TbBrandFramerMotion />
          </IconsContainer>
        }
        demoHref={BENTO_BIO_DEMO_URL}
        codeHref={BENTO_BIO_GITHUB_URL}
        imgSrc="/bento-bio-demo-screenshot.png"
        license="gnu"
      >
        This template uses a combination of cool grays and a bright blue to give
        a clean, professional, and technical look. The use of different font
        widths helps in highlighting important content.
      </TemplateItem>
    </div>
  );
};

export default BentoList;
