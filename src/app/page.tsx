import OfferEvent from "./components/events/offer";
import Slider from "./components/header/slider/Slider";
import Story from "./components/story/story";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Slider />
      <Story />
      <OfferEvent />
    </div>
  );
}
 