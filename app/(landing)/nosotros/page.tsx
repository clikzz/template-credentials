import React from "react";
import { AboutUs } from "./components/about-us";
import { OurHistory } from "./components/our-history";
import { OurValues } from "./components/our-values";

export default function Nosotros() {
  return (
    <div>
      <AboutUs />
      <OurHistory />
      <OurValues />
    </div>
  );
}
