import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import PillLink from "../PillLink";
import TemplateItem from "../TemplateItem";
import IconsContainer from "../IconsContainer";

const SwissList = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <TemplateItem
        label="Swiss Link In Bio Page"
        icons={
          <IconsContainer>
            <SiNextdotjs />
            <SiTailwindcss />
            <TbBrandFramerMotion />
          </IconsContainer>
        }
        demoHref="https://swiss-bio.demos.csvid.it"
        codeHref="https://github.com/csvidit/bio-swiss"
        imgSrc="/swiss-bio-demo-screenshot.png"
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

export default SwissList;
