import Leftpane from "./Leftpane";
import Links from "./Links";
import Rightpane from "./Rightpane";

export default function AddLinks() {
  return (
    <div className="flex  ">
      <Leftpane />
      <Links />
      <Rightpane />
    </div>
  );
}
