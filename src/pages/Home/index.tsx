import { Helmet } from "react-helmet";
import AreYouReady from "./AreYouReady";
import Features from "./Features";
import Glows from "./Glows";
import HeroHeader from "./HeroHeader";
import Offers from "./Offers";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - vSuS</title>
      </Helmet>
      <Glows />
      <HeroHeader />
      <Features />
      <Offers />
      <Testimonials />
      <AreYouReady />
    </>
  );
}
