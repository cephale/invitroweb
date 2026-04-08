"use client";

import ParticleCanvas from "./ParticleCanvas";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#f9f9f9] overflow-hidden">
      {/* Particle Animation */}
      <ParticleCanvas />

      {/* Hero Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
        <h1 className="text-navy font-black tracking-[0.12em] leading-tight text-center" style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}>
          Create New Nodes
        </h1>
        <div className="mt-4 md:mt-6 flex items-baseline gap-0 text-navy text-2xl sm:text-3xl md:text-4xl tracking-[0.3em]">
          <span className="font-light opacity-50">IN</span>
          <span className="font-black">VITRO</span>
        </div>
      </div>
    </section>
  );
}
