import { Hero } from "./components/hero";
import { WhyUs } from "./components/why-us";
import { FAQ } from "./components/faq";
import { Footer } from "./components/footer";

export default async function LandingPage() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <FAQ />
      <Footer />
    </div>
  );
}
