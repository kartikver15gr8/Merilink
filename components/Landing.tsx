import Maintitle from "./Maintitle";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";
import Reveal from "./Reveal";
import DemoBanner from "./DemoBanner";
import ReviewsTile from "./ReviewsTile";
import Footer from "./Footer";
import Features from "./Features";
import FeaturedIn from "./FeaturedIn";

export default function Landing() {
  return (
    <Reveal>
      <div>
        <div className="flex justify-center h-[100vh]">
          <Leftpane />
          <Maintitle />
          <Rightpane />
        </div>
        <DemoBanner />
        <Features />
        <FeaturedIn />
        <ReviewsTile />
        <Footer />
      </div>
    </Reveal>
  );
}
