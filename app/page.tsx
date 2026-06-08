import VideoHero from "../components/ui/Video";
import Displays from "../components/ui/Displays";
import { RecommendedPhotos } from "../utils/recommend";
import Introcard from "../components/ui/Introcard";
import Awards from "../components/ui/Awards";
import Contact from "../components/ui/Contact";
export default function Home() {
  return (
    <>
      <VideoHero />
      <Displays images={RecommendedPhotos} />
      <Introcard />
      <Awards />
      <Contact />
    </>
  );
}
