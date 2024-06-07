import Maintitle from "./Maintitle";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";
import Reveal from "./Reveal";
import DemoBanner from "./DemoBanner";
import ReviewsTile from "./ReviewsTile";
import Footer from "./Footer";

export default function Landing() {
  return (
    <Reveal>
      <div>
        <div className="flex h-[100vh]">
          <Leftpane />
          <Maintitle />
          <Rightpane />
        </div>
        <DemoBanner />
        <ReviewsTile />
        <Footer />
      </div>
    </Reveal>
  );
}
