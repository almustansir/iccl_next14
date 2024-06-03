import AchivementsComp from "./components/AchivementsComp";
import GetInTouchComp from "./components/GetInTouchComp";
import HeroComp from "./components/HeroComp";
import InfoCardComp from "./components/InfoCardComp";
import MDcomp from "./components/MDcomp";
import NewVideoPlayer from "./components/NewVideoPlayer";
import PageHeaderComp from "./components/PageHeaderComp";
import ServicesComp from "./components/ServicesComp";

export default function Home() {
  return (
    <div>
      <HeroComp />
      <AchivementsComp />
      <MDcomp />
      <ServicesComp />
      <GetInTouchComp />
    </div>
  );
}
