"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";

const features = [
  {
    title: "Abilities Development",
    description:
      "\u30C1\u30FC\u30E0\u3067\u4E00\u7DD2\u306B\u4ED5\u4E8B\u3092\u9032\u3081\u306A\u304C\u3089\u77E5\u8B58/\u80FD\u529B\u306E\u5E73\u6E96\u5316\u304C\u3067\u304D\u308B",
    icon: "\uD83D\uDCC8",
  },
  {
    title: "Skill Management",
    description:
      "\u81EA\u5206\u3084\u4ED6\u306E\u4EBA\u306E\u30B9\u30AD\u30EB\u3084\u30C1\u30FC\u30E0\u306E\u696D\u52D9\u5185\u5BB9\u3092\u7C21\u5358\u306B\u8996\u899A\u5316\u3067\u304D\u308B",
    icon: "\uD83D\uDDFA\uFE0F",
  },
  {
    title: "Well-being",
    description:
      "\u4F7F\u3044\u7D9A\u3051\u308B\u3053\u3068\u3067\u30C1\u30FC\u30E0\u3092\u8CE2\u304F\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u308B\u4ED5\u7D44\u307F\u3092\u63D0\u4F9B",
    icon: "\u2728",
  },
];

const modules = [
  {
    title: "Workflow",
    subtitle: "\u30BF\u30B9\u30AF\u7BA1\u7406",
    description:
      "\u30BF\u30B9\u30AF\u306B\u30B9\u30AD\u30EB\u3068\u6642\u9593\u3092\u7D10\u4ED8\u3051\u3001\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u8A08\u753B\u3002\u30DA\u30A2\u3067\u304A\u4E92\u3044\u306E\u80FD\u529B\u3092\u9AD8\u3081\u5408\u3044\u306A\u304C\u3089\u4ED5\u4E8B\u3092\u5B8C\u4E86\u3059\u308B\u3002",
    color: "from-blue-50 to-indigo-50",
  },
  {
    title: "Skillmap",
    subtitle: "\u30B9\u30AD\u30EB\u53EF\u8996\u5316",
    description:
      "\u500B\u4EBA\u3068\u30C1\u30FC\u30E0\u306E\u80FD\u529B\u3092\u8996\u899A\u5316\u3002\u30B9\u30AD\u30EB\u30AE\u30E3\u30C3\u30D7\u3092\u628A\u63E1\u3057\u3001\u6210\u9577\u306E\u65B9\u5411\u6027\u3092\u660E\u78BA\u306B\u3059\u308B\u3002",
    color: "from-purple-50 to-pink-50",
  },
  {
    title: "Agent",
    subtitle: "AI\u30A2\u30B7\u30B9\u30BF\u30F3\u30C8",
    description:
      "\u30C1\u30FC\u30E0\u3068\u30E6\u30FC\u30B6\u306E\u884C\u52D5\u3092\u30C7\u30FC\u30BF\u5206\u6790\u3057\u81EA\u52D5\u7684\u306B\u30A2\u30B7\u30B9\u30C8\u3059\u308B\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3002",
    color: "from-emerald-50 to-teal-50",
  },
];

export default function ProductPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation onContactClick={() => setContactOpen(true)} />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 md:px-16 lg:px-24 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: App screenshots placeholder */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-xs font-bold tracking-wider text-navy/40 uppercase border-b-2 border-blue-400 pb-1">
                    Session
                  </div>
                  <div className="text-xs text-navy/30">Chat</div>
                </div>
                <div className="space-y-3">
                  {[
                    "\u30BF\u30FC\u30B2\u30C3\u30C8\u30BB\u30B0\u30E1\u30F3\u30C8\u3092\u4F5C\u6210\u3059\u308B",
                    "mindmap\u304B\u3089\u60C5\u5831\u3092\u8AAD\u307F\u8FBC\u3080",
                    "\u30A4\u30F3\u30D5\u30A9\u30B0\u30E9\u30D5\u3092\u4F5C\u6210\u3059\u308B",
                    "\u30DA\u30EB\u30BD\u30CA\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210",
                  ].map((task, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg text-sm ${
                        i === 3
                          ? "bg-amber-50 border border-amber-200 text-navy"
                          : "text-navy/70"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                          i < 3
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-amber-100 text-amber-600"
                        }`}
                      >
                        {i < 3 ? "\u2713" : "\u25B6"}
                      </div>
                      {task}
                      <span className="ml-auto text-xs text-navy/30">
                        {i === 3 ? "22:17" : "00:00"} min
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Title */}
            <div>
              <h1 className="text-navy text-5xl md:text-6xl lg:text-7xl font-black tracking-wider leading-tight">
                Pairstorming
              </h1>
              <p className="text-navy/70 text-lg md:text-xl mt-6 leading-relaxed">
                {"\u30A8\u30AD\u30B9\u30D1\u30FC\u30C8\u3078\u306E\u8FD1\u9053"}
                <br />
                {"\u4ED5\u4E8B\u3082\u6210\u9577\u3082\u540C\u6642\u306B\u5B8C\u4E86"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept: 卒啄同時 */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-navy text-3xl md:text-4xl font-black tracking-wider mb-4">
            {"\u5352\u5544\u540C\u6642"}
          </h2>
          <p className="text-navy/50 text-sm tracking-widest uppercase mb-8">
            Simultaneous Growth
          </p>
          <p className="text-navy/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {"\u30DA\u30A2\u3067\u4E00\u7DD2\u306B\u4ED5\u4E8B\u3092\u9032\u3081\u308B\u3053\u3068\u3067\u3001\u4ED5\u4E8B\u306E\u5B8C\u4E86\u3068\u80FD\u529B\u306E\u6210\u9577\u3092\u540C\u6642\u306B\u5B9F\u73FE\u3059\u308B\u3002\u5375\u306E\u4E2D\u306E\u96DB\u304C\u6BBB\u3092\u7834\u308D\u3046\u3068\u3059\u308B\u6642\u3001\u89AA\u9CE5\u304C\u5916\u304B\u3089\u6BBB\u3092\u3064\u3064\u304F\u3002\u305D\u306E\u7D76\u5999\u306A\u30BF\u30A4\u30DF\u30F3\u30B0\u306E\u3088\u3046\u306B\u3001\u30C1\u30FC\u30E0\u306E\u5354\u50CD\u3092\u6700\u9069\u5316\u3057\u307E\u3059\u3002"}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 text-center shadow-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-navy text-lg font-bold tracking-wider mb-3">
                {feature.title}
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-navy text-2xl md:text-3xl font-black tracking-wider text-center mb-12">
            Modules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className={`rounded-xl p-8 bg-gradient-to-br ${mod.color}`}
              >
                <h3 className="text-navy text-xl font-bold tracking-wider">
                  {mod.title}
                </h3>
                <p className="text-navy/50 text-xs tracking-widest uppercase mt-1 mb-4">
                  {mod.subtitle}
                </p>
                <p className="text-navy/70 text-sm leading-relaxed">
                  {mod.description}
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
