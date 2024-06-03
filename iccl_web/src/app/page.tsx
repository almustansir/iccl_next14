import AchivementsComp from "./components/AchivementsComp";
import GetInTouchComp from "./components/GetInTouchComp";
import HeroComp from "./components/HeroComp";
import MDcomp from "./components/MDcomp";

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
