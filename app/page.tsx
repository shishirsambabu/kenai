"use client";

import { useState } from "react";
import Cursor from "./components/Cursor";
import BootSequence from "./components/BootSequence";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatSection from "./components/WhatSection";
import ServicesSection from "./components/ServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import ToolCtaSection from "./components/ToolCtaSection";
import OfferingsSection from "./components/OfferingsSection";
import FaqSection from "./components/FaqSection";
import ApproachSection from "./components/ApproachSection";
import AboutSection from "./components/AboutSection";
import ProofSection from "./components/ProofSection";
import GumroadSection from "./components/GumroadSection";
import ResourcesSection from "./components/ResourcesSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";

export default function Home() {
  const [heroStarted, setHeroStarted] = useState(false);

  return (
    <>
      <div className="fx-noise" />
      <div className="fx-scan" />
      <div className="fx-vignette" />
      <ParticleField />

      <Cursor />
      <BootSequence onDone={() => setHeroStarted(true)} />
      <Nav />

      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero started={heroStarted} />
        <WhatSection />
        <ServicesSection />
        <IndustriesSection />
        <OfferingsSection />
        <ApproachSection />
        <ToolCtaSection />
        <GumroadSection />
        <ResourcesSection />
        <BlogSection />
        <AboutSection />
        <ProofSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
