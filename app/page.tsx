import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <CTA />
    </>
  );
}
