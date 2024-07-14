import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import TemplateItem from "../TemplateItem";
import IconsContainer from "../IconsContainer";
import { INVERNO_PORTFOLIO_DEMO_URL } from "@/utils/urls/demo-urls";
import { INVERNO_PORTFOLIO_GITHUB_URL } from "@/utils/urls/github-urls";

const InvernoList = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <TemplateItem
        label="Inverno Single Page Portfolio"
        icons={
          <IconsContainer>
            <SiNextdotjs />
            <SiTailwindcss />
            <TbBrandFramerMotion />
          </IconsContainer>
        }
        demoHref={INVERNO_PORTFOLIO_DEMO_URL}
        codeHref={INVERNO_PORTFOLIO_GITHUB_URL}
        imgSrc="/inverno-portfolio-demo-screenshot-2.png"
        license="mit"
      >
        This template uses a clean sans-serif typeface along with a mostly
        monochromatic color palette. It employs Framer Motion for beautiful
        hover animations that switch seamlessly from one link/button to the
        other.
      </TemplateItem>
    </div>
  );
};

export default InvernoList;
