"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navigation onContactClick={() => setContactOpen(true)} />
      <HeroSection />
      <WorksSection />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
