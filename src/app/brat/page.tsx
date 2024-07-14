import BratIntro from "@/components/Brat/BratIntro";
import BratList from "@/components/Brat/BratList";
import MainContent from "@/components/MainContent";

const BratRoute = () => {
  return (
    <MainContent>
      <BratIntro />
      <BratList />
    </MainContent>
  );
};

export default BratRoute;
