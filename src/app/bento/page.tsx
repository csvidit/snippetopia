import BentoIntro from "@/components/Bento/BentoIntro";
import SPAIntro from "@/components/Bento/BentoIntro";
import BentoList from "@/components/Bento/BentoList";
import MainContent from "@/components/MainContent";

const BentoRoute = () => {
  return (
    <MainContent>
      <BentoIntro />
      <BentoList />
    </MainContent>
  );
};

export default BentoRoute;
