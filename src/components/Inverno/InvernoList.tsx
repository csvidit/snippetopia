import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import TemplateItem from "../TemplateItem";
import IconsContainer from "../IconsContainer";

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
        demoHref="https://inverno-portfolio.demos.csvid.it/"
        codeHref="https://github.com/csvidit/inverno-portfolio"
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
