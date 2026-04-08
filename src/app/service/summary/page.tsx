"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";

const services = [
  {
    title: "Service Design",
    description:
      "\u30B5\u30FC\u30D3\u30B9\u306B\u767B\u5834\u3059\u308B\u30B9\u30C6\u30FC\u30AF\u30DB\u30EB\u30C0\u30FC\u3084\u30ED\u30FC\u30EB\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC/\u60C5\u5831/\u7269\u6D41\u306A\u3069\u30B7\u30B9\u30C6\u30E0\u3068\u4EBA\u306E\u63A5\u70B9\u3092\u3059\u3079\u3066\u6642\u7CFB\u5217\u5316\u3057\u3001\u5168\u4F53\u50CF\u3092\u30A8\u30B3\u30B7\u30B9\u30C6\u30E0\u3068\u3057\u3066\u30C7\u30B6\u30A4\u30F3\u3059\u308B\u3002",
    color: "border-l-blue-400",
    tag: "ECOSYSTEM",
  },
  {
    title: "LEAN UX",
    description:
      "\u30D5\u30A1\u30AF\u30C8\u306B\u57FA\u3065\u3044\u305F\u4EEE\u8AAC\u3092\u3059\u3070\u3084\u304F\u691C\u8A3C\u3002\u30E6\u30FC\u30B6\u30FC\u30EA\u30B5\u30FC\u30C1\u3068\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u3092\u9AD8\u901F\u306B\u7E70\u308A\u8FD4\u3057\u3001\u6700\u9069\u89E3\u3092\u5C0E\u304F\u3002",
    color: "border-l-emerald-400",
    tag: "RAPID VALIDATION",
  },
  {
    title: "UI Design",
    description:
      "\u8A8D\u77E5\u79D1\u5B66\u306B\u57FA\u3065\u3044\u305F\u4F7F\u3044\u3084\u3059\u3044UI\u3002\u30D3\u30B8\u30CD\u30B9\u30FB\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u74B0\u5883\u306E\u5909\u5316\u306B\u30D5\u30A3\u30C3\u30C8\u3067\u304D\u308B\u30ED\u30D0\u30B9\u30C8\u30CD\u30B9\u3092\u5B9F\u73FE\u3002",
    color: "border-l-purple-400",
    tag: "COGNITIVE SCIENCE",
  },
  {
    title: "Data Science\nAnd Design",
    description:
      "\u8ABF\u67FB/\u5206\u6790\u304B\u3089\u79D1\u5B66\u7684\u77E5\u898B\u306B\u57FA\u3065\u3044\u305F\u4EEE\u8AAC\u3092\u69CB\u7BC9\u3057\u3001\u30C7\u30FC\u30BF\u89E3\u6790\u3068\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u306B\u3088\u308B\u691C\u8A3C\u304B\u3089\u65B0\u3057\u3044\u4FA1\u5024\u3092\u767A\u898B\u3002",
    color: "border-l-amber-400",
    tag: "DATA ANALYSES \u00B7 PROTOTYPING",
  },
];

export default function ServicePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation onContactClick={() => setContactOpen(true)} />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#faf5f0] via-white to-[#f0eef8] min-h-[70vh] flex items-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="leading-tight mb-10">
            <span className="text-navy text-5xl md:text-6xl lg:text-7xl font-black tracking-wider">
              Design
            </span>
            <span className="text-navy/40 text-2xl md:text-3xl mx-3 font-light">
              an
            </span>
            <span className="text-navy text-5xl md:text-6xl lg:text-[5rem] font-black tracking-wider">
              Outcome
            </span>
            <br />
            <span className="text-navy/40 text-2xl md:text-3xl font-light mr-3">
              with
            </span>
            <span className="text-navy text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-wider">
              Evidence
            </span>
            <span className="text-navy/40 text-2xl md:text-3xl mx-3 font-light">
              &
            </span>
            <span className="text-navy text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-wider">
              Vision
            </span>
          </h1>

          <div className="w-12 h-0.5 bg-navy/30 mb-8" />

          <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-2">
            <span className="bg-yellow-100/60 px-1">
              {"\u30A8\u30D3\u30C7\u30F3\u30B9"}
            </span>
            {"\u304B\u3089\u4FA1\u5024\u3092\u767A\u898B\u3057"}
          </p>
          <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-8">
            <span className="bg-yellow-100/60 px-1">
              {"\u30F4\u30A3\u30B8\u30E7\u30F3"}
            </span>
            {"\u3068\u5171\u9CF4\u3055\u305B\u308B\u3053\u3068\u3067"}
            <span className="bg-yellow-100/60 px-1">
              {"\u30A2\u30A6\u30C8\u30AB\u30E0"}
            </span>
            {"\u3092\u5275\u51FA\u3057\u307E\u3059\u3002"}
          </p>

          <p className="text-navy/60 text-sm leading-relaxed max-w-3xl">
            INVITRO{"\u306F"}Human Computer Interaction{"\u306E\u6280\u8853\u30FB\u30C7\u30B6\u30A4\u30F3\u3092\u4E2D\u5FC3\u306B\u65B0\u3057\u3044\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3068\u4EBA\u9593\u306E\u95A2\u4FC2\u304B\u3089\u6700\u9069\u306A\u4FA1\u5024\u3092\u767A\u898B\u30FB\u5B9F\u88C5\u3059\u308B\u30C7\u30B6\u30A4\u30F3\u30D5\u30A1\u30FC\u30E0\u3067\u3059\u3002"}
            <br />
            {"\u65B0\u3057\u3044\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u306F\u5E38\u306B\u51FA\u73FE\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u4EBA\u9593\u304C\u4EAB\u53D7\u3067\u304D\u308B\u3053\u3068\u306B\u306F\u9650\u308A\u304C\u3042\u308A\u307E\u3059\u3002"}
            <br />
            {"\u30E6\u30FC\u30B6\u884C\u52D5\u3001\u8A8D\u77E5\u79D1\u5B66\u3001\u5E02\u5834\u304B\u3089\u6700\u9069\u306A\u4FA1\u5024\u3092\u4EEE\u8AAC\u691C\u8A3C\u306B\u3088\u3063\u3066\u898B\u6975\u3081\u3001\u30F4\u30A3\u30B8\u30E7\u30F3\u306B\u57FA\u3065\u304D\u5B8C\u74A7\u306B\u30EF\u30FC\u30AF\u3059\u308BUI\u3084\u4FEF\u77B0\u7684\u306B\u719F\u616E\u3055\u308C\u305FUX\u30FB\u30B5\u30FC\u30D3\u30B9\u30C7\u30B6\u30A4\u30F3\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"}
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${service.color} shadow-sm hover:shadow-md transition-shadow`}
              >
                <p className="text-navy/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                  {service.tag}
                </p>
                <h3 className="text-navy text-2xl md:text-3xl font-black tracking-wider mb-4 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
