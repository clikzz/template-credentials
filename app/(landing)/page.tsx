import { Hero } from "./components/hero";
import { WhyUs } from "./components/why-us";
import { FAQ } from "./components/faq";

export default async function LandingPage() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <FAQ />
    </div>
  );
}
