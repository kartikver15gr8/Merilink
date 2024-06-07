import Maintitle from "./Maintitle";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";
import Reveal from "./Reveal";

export default function Landing() {
  return (
    <Reveal>
      <div className="flex ">
        <Leftpane />
        <Maintitle />
        <Rightpane />
      </div>
    </Reveal>
  );
}
