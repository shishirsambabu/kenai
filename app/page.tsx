"use client";

import { useState } from "react";
import Cursor from "./components/Cursor";
import BootSequence from "./components/BootSequence";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatSection from "./components/WhatSection";
import BootcampBanner from "./components/BootcampBanner";
import OfferingsSection from "./components/OfferingsSection";
import ApproachSection from "./components/ApproachSection";
import AboutSection from "./components/AboutSection";
import ProofSection from "./components/ProofSection";
import GumroadSection from "./components/GumroadSection";
import ResourcesSection from "./components/ResourcesSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
import NewsletterSection from "./components/NewsletterSection";
import SiteFooter from "./components/SiteFooter";
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
        <BootcampBanner />
        <OfferingsSection />
        <ApproachSection />
        <GumroadSection />
        <ResourcesSection />
        <BlogSection />
        <AboutSection />
        <ProofSection />
        <FaqSection />
        <ContactSection />
        <NewsletterSection />
      </main>

      <SiteFooter />
    </>
  );
}
