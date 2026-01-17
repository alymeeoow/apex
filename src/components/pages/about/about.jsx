import React from "react";
import Hero from "./aboutHero";
import "./../../../assets/styles/pages/home.css";
import "../../../assets/styles/pages/about.css";

import AboutSection1 from "./aboutSection1";
import AboutSection2 from "./aboutSection2";
import AboutSection3 from "./aboutSection3";


import { useSectionReveal } from "../../../hooks/useSectionReveal"; 

export default function Home() {
  useSectionReveal();

  return (
    <main className="apex-home">
      <Hero />

      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />

    </main>
  );
}
