import VideoHero from "../components/ui/Video";
import Displays from "../components/ui/Displays";
import { ImageDisplayData } from "../images/portfolioImages";
import Introcard from "../components/ui/Introcard";
import Awards from "../components/ui/Awards";
export default function Home() {
  return (
    <>
      <VideoHero />
      <Displays images={ImageDisplayData} />
      <Introcard />
      <Awards />
    </>
  );
}
