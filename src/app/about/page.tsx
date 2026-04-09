"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";

/* eslint-disable @next/next/no-img-element */

const CDN = "https://cdn.prod.website-files.com/5b6fab70681f894832b563b5";

const boardMembers = [
  {
    name: "KEISUKE OGURA",
    role: "Senior Design Strategist",
    specialty: "UI Design \u00D7 UX Strategy",
    bio: "\u591A\u6469\u7F8E\u8853\u5927\u5B66\u751F\u7523\u30C7\u30B6\u30A4\u30F3\u5B66\u79D1\u30D7\u30ED\u30C0\u30AF\u30C8\u5C02\u653B\u5352\u696D\u3002\u540C\u5927\u5B66\u306B\u3066\u30C7\u30B6\u30A4\u30F3\u30B7\u30F3\u30AD\u30F3\u30B0\u3092\u7FD2\u5F97\u3002\u30BF\u30B9\u30AF\u30D5\u30ED\u30FC\u306E\u89B3\u5BDF\u3084\u884C\u52D5\u5FC3\u7406\u5B66\u3001\u5B9A\u6027\u7684\u306A\u30D5\u30A1\u30AF\u30C8\u304B\u3089\u30C7\u30B6\u30A4\u30F3-\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u3092\u884C\u3046\u3002\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u306E\u5E73\u6E96\u5316\u3092\u76EE\u6307\u3059\u3002",
    img: `${CDN}/5e6a0a1a6a92a9942402900d_member_pics_ogura_website_trim2.png`,
  },
  {
    name: "TETSUYA YAMAMOTO",
    role: "Creative Engineer",
    specialty: "Data Science \u00D7 UI Design",
    bio: "HCI\u3001\u30A6\u30A7\u30A2\u30E9\u30D6\u30EB\u30B3\u30F3\u30D4\u30E5\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u7814\u7A76\u3092\u884C\u3044\u795E\u6238\u5927\u5B66\u81EA\u7136\u79D1\u5B66\u7814\u7A76\u79D1 \u585A\u672C\u5BFA\u7530\u7814\u7A76\u5BA4\u306B\u3066\u535A\u58EB\uFF08\u5DE5\u5B66\uFF09\u3092\u53D6\u5F97\u3002IoT\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u3084\u5927\u5B66\u306A\u3069\u3067\u3001\u30EA\u30B5\u30FC\u30C1\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u3001\u30C7\u30FC\u30BF\u89E3\u6790\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u3092\u884C\u3046\u3002",
    img: `${CDN}/5e78148e4c71bd065147894b_member_pics_yamamoto_website.png`,
  },
];

const partners = [
  {
    name: "NAOYA NAKAYAMA",
    role: "Design Researcher",
    specialty: "UI Design \u00D7 UX Strategy",
    bio: "Royal College of Art (MA) Fashion Design Womenswear\u4FEE\u4E86\u30022010\u5E74 Italian Vogue world talents \u9078\u51FA\u3002\u82F1\u56FD\u306B\u30668\u5E74\u9593\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u30C7\u30B6\u30A4\u30F3\u306E\u7D4C\u9A13\u3092\u6301\u3064\u3002",
    img: `${CDN}/5ec5ecb8d0d5fffc6f3d1c0f_member_naoya.png`,
  },
  {
    name: "ZIKUN CHEN",
    role: "Digital Product Designer",
    specialty: "UI Design \u00D7 UX Strategy",
    bio: "\u6176\u61C9\u5927\u5B66\u3067HCI\u5206\u91CE\u306E\u7814\u7A76\u7D4C\u6B74\u3092\u6301\u3064Digital Product Designer\u3002\u8907\u6570\u696D\u754C\u3067\u56FD\u5185\u5916\u306E\u3055\u307E\u3056\u307E\u306A\u5206\u91CE\u306E\u30C1\u30FC\u30E0\u3068\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u30EA\u30B5\u30FC\u30C1\u3001\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u3001\u30C7\u30B6\u30A4\u30F3\u306A\u3069\u3092\u884C\u3046\u3002",
    img: `${CDN}/6440fc5903567185e23251c0_chen%E3%81%95%E3%82%93.png`,
  },
  {
    name: "KAZUHO KAMADA",
    role: "UI Designer",
    specialty: "UI Design \u00D7 Multilingual",
    bio: "\u95A2\u897F\u5927\u5B66\u6587\u5B66\u90E8 \u82F1\u7C73\u6587\u5316\u5C02\u4FEE\u5352\u696D\u3002\u793E\u4F1A\u4EBA\u304B\u3089\u30C7\u30B6\u30A4\u30F3\u306E\u4E16\u754C\u306B\u5165\u308A\u3001\u5916\u8CC7\u7CFB\u306E\u4E8B\u696D\u4F1A\u793E\u3067UX\u30C7\u30B6\u30A4\u30CA\u30FC\u3068\u3057\u3066\u52E4\u52D9\u30022\u3064\u306E\u30D7\u30ED\u30C0\u30AF\u30C8\u306E\u30EA\u30FC\u30C9\u30C7\u30B6\u30A4\u30F3\u3068\u3001\u30D7\u30ED\u30C0\u30AF\u30C8\u6A2A\u65AD\u306E\u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0\u3092\u62C5\u5F53\u3002",
    img: `${CDN}/6417dc38d0396918289f7d7b_kazuho%E3%81%95%E3%82%93.png`,
  },
  {
    name: "RINA FUJINO",
    role: "UI Designer",
    specialty: "UI Design \u00D7 Graphic Design",
    bio: "\u6B66\u8535\u91CE\u7F8E\u8853\u5927\u5B66\u8996\u899A\u4F1D\u9054\u30C7\u30B6\u30A4\u30F3\u5B66\u79D1\u5352\u696D\u3002\u96FB\u6A5F\u30E1\u30FC\u30AB\u30FC\u3001\u7CBE\u5BC6\u5316\u5B66\u30E1\u30FC\u30AB\u30FC\u306B\u3066\u7D44\u307F\u8FBC\u307F\u6A5F\u5668\u3084PC/\u30B9\u30DE\u30DB\u30A2\u30D7\u30EA\u306EUI\u30C7\u30B6\u30A4\u30F3\u3092\u591A\u6570\u62C5\u5F53\u3002\u8981\u4EF6/\u4ED5\u69D8\u691C\u8A0E\uFF5E\u30C7\u30B6\u30A4\u30F3\u69CB\u7BC9\uFF5E\u5B9F\u6A5F\u8A55\u4FA1\u307E\u3067\u4E00\u9023\u306E\u696D\u52D9\u7D4C\u9A13\u3042\u308A\u3002",
    img: `${CDN}/6440fd38210933229ae9741d_rina%E3%81%95%E3%82%93.png`,
  },
  {
    name: "TAKAYA ENDO",
    role: "Senior Researcher",
    specialty: "Human Activity \u00D7 Information Ecology",
    bio: "M-SAKU\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30B9\u4EE3\u8868\u3002\u5143NTT\u30D2\u30E5\u30FC\u30DE\u30F3\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u7814\u7A76\u6240\u7814\u7A76\u4F01\u753B\u90E8\u9577\u3001\u96FB\u5B50\u60C5\u5831\u901A\u4FE1\u5B66\u4F1A\u30D2\u30E5\u30FC\u30DE\u30F3\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u30B0\u30EB\u30FC\u30D7\uFF08\u5275\u8A2D\uFF09\u59D4\u54E1\u9577\u3002",
    img: `${CDN}/5d10131ac3da372a68f6933e_member_endo.png`,
  },
  {
    name: "JUN MORI",
    role: "Software Engineer",
    specialty: "Frontend",
    bio: "\u5C71\u68A8\u5927\u5B66\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30E1\u30C7\u30A3\u30A2\u5DE5\u5B66\u79D1\u5352\u696D\u3002\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30B5\u30A4\u30A8\u30F3\u30B9\u306E\u57FA\u790E\u3068\u6A5F\u68B0\u5B66\u7FD2\u3092\u7FD2\u5F97\u3057\u3001\u30E6\u30CB\u30D0\u682A\u5F0F\u4F1A\u793E\u5F79\u54E1\u3002Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4E2D\u5FC3\u306B\u3001Android, iOS\u306E\u5B9F\u88C5\u3092\u884C\u3046\u3002",
    img: `${CDN}/5d0f95800417423e0d7cc26f_member_MJ.png`,
  },
];

const domains = [
  "\u30B5\u30FC\u30D3\u30B9\u30C7\u30B6\u30A4\u30F3",
  "UX\u306E\u8ABF\u67FB\u8A2D\u8A08",
  "UI\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u5B9F\u88C5",
  "IoT\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0",
  "\u81EA\u793E\u30B5\u30FC\u30D3\u30B9",
  "\u7D71\u8A08\u30C7\u30FC\u30BF\u30B3\u30F3\u30B5\u30EB",
  "\u610F\u601D\u6C7A\u5B9A\u652F\u63F4",
];

function MemberCard({
  member,
}: {
  member: {
    name: string;
    role: string;
    specialty: string;
    bio: string;
    img: string;
  };
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0">
        <img
          src={member.img}
          alt={member.name}
          className="rounded-full object-cover bg-gray-200"
          style={{ width: "120px", height: "120px" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-navy text-base md:text-lg font-black tracking-wider">
          {member.name}
        </h4>
        <p className="text-navy/50 text-xs tracking-widest mt-0.5">
          {member.role}
        </p>
        <p className="text-navy/40 text-[11px] tracking-wider mt-1">
          {member.specialty}
        </p>
        <p className="text-navy/50 text-xs leading-relaxed mt-3">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation onContactClick={() => setContactOpen(true)} />

      {/* ===== VISION ===== */}
      <section className="pb-24 px-6 md:px-16 lg:px-24" style={{ paddingTop: "150px" }}>
        <div className="max-w-[1000px] mx-auto">
          <p className="font-black" style={{ color: "#ddd", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.3em", marginBottom: "24px" }}>
            VISION
          </p>
          <h1 className="text-navy text-5xl md:text-6xl lg:text-7xl font-black tracking-wider leading-tight">
            Create New Nodes
          </h1>
          <p className="text-navy/60 text-base md:text-lg mt-6 tracking-wider">
            {"\u767A\u898B\u7684\u306A\u30D7\u30ED\u30BB\u30B9\u3067\u3088\u308A\u3088\u3044\u672A\u6765\u3092\u9078\u629E\u3059\u308B"}
          </p>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-black" style={{ color: "#ddd", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.3em", marginBottom: "48px" }}>
            MISSION
          </p>

          {/* Mission 01 */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-navy text-xl md:text-2xl font-black tracking-wider leading-relaxed mb-4">
                01 Designing HCI Ecosystem
              </h2>
              <p className="text-navy/60 text-sm leading-[2]">
                {"\u4EBA\u306E\u8A8D\u77E5\u30B7\u30B9\u30C6\u30E0 / \u793E\u4F1A\u7D44\u7E54/\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u30C7\u30B6\u30A4\u30F3\u3057,\u30B5\u30FC\u30D3\u30B9\u3092\u30A8\u30B3\u30B7\u30B9\u30C6\u30E0\u3068\u3057\u3066\u9054\u6210\u3059\u308B"}
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <img
                src={`${CDN}/5d1beab8df1829e462ebc092_infograph_ecosystemdesign.png`}
                alt="HCI Ecosystem"
                className="w-40 md:w-48"
              />
              <img
                src={`${CDN}/5d1beab08da8428e6293d65a_infograph_thinkingman.png`}
                alt="Thinking Man"
                className="w-40 md:w-48"
              />
            </div>
          </div>

          {/* Mission 02 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-navy text-xl md:text-2xl font-black tracking-wider leading-relaxed mb-4">
                02 Augmentation of Abilities by Smart tec
              </h2>
              <p className="text-navy/60 text-sm leading-[2]">
                {"\u30B9\u30DE\u30FC\u30C8\u306A\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u5229\u7528\u306B\u3088\u3063\u3066\u4EBA\u3084\u7D44\u7E54\u306E\u80FD\u529B\u3092\u62E1\u5F35\u3059\u308B"}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={`${CDN}/5d1beab82b2ad21e8344ae28_smarttec.png`}
                alt="Smart Technology"
                className="w-48 md:w-56"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOMAIN ===== */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-black" style={{ color: "#ddd", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.3em", marginBottom: "32px" }}>
            DOMAIN
          </p>
          <p className="text-navy/60 text-sm leading-[2] max-w-2xl mb-10">
            {"\u30EA\u30B5\u30FC\u30C1\u3001\u30C7\u30FC\u30BF\u89E3\u6790\u3001\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u3001\u65B0\u898F\u4E8B\u696D\u30B5\u30FC\u30D3\u30B9\u8A2D\u8A08\u306A\u3069\u306ER&D\u9818\u57DF\u306B\u3066\u3001HCI"}
            <span className="text-navy/40">
              {" (Human Computer Interaction)"}
            </span>
            {"\u3001\u8A8D\u77E5\u79D1\u5B66\u3001\u884C\u52D5\u7D4C\u6E08\u5B66\u306B\u57FA\u3065\u3044\u305F\u30A8\u30D3\u30C7\u30F3\u30B9\u30D9\u30FC\u30B9\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"}
          </p>

          <div className="flex flex-wrap gap-3">
            {domains.map((d) => (
              <span
                key={d}
                className="text-navy/50 text-xs tracking-wider border border-navy/15 rounded-full px-4 py-2"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEMBER ===== */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-black" style={{ color: "#ddd", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.3em", marginBottom: "48px" }}>
            MEMBER
          </p>

          {/* BOARD */}
          <p className="text-navy/30 text-sm font-bold tracking-[0.2em] mb-8">
            BOARD
          </p>
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {boardMembers.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>

          {/* PARTNER */}
          <p className="text-navy/30 text-sm font-bold tracking-[0.2em] mb-8">
            PARTNER
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {partners.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY ===== */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-black" style={{ color: "#ddd", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.3em", marginBottom: "48px" }}>
            COMPANY
          </p>

          <div className="space-y-6 text-sm">
            <div className="flex gap-8">
              <span className="text-navy/40 w-28 flex-shrink-0 tracking-wider">
                {"\u4F1A\u793E\u540D"}
              </span>
              <span className="text-navy font-bold tracking-wider">
                INVITRO LLC
              </span>
            </div>
            <div className="flex gap-8">
              <span className="text-navy/40 w-28 flex-shrink-0 tracking-wider">
                {"\u8A2D\u7ACB\u5E74\u6708\u65E5"}
              </span>
              <span className="text-navy tracking-wider">2018 12.19</span>
            </div>
            <div className="flex gap-8">
              <span className="text-navy/40 w-28 flex-shrink-0 tracking-wider">
                {"\u4EE3\u8868"}
              </span>
              <span className="text-navy tracking-wider">
                {"\u5C0F\u8535\u572D\u8F14\u3000\u5C71\u672C\u54F2\u4E5F"}
              </span>
            </div>
            <div className="flex gap-8">
              <span className="text-navy/40 w-28 flex-shrink-0 tracking-wider">
                {"\u6240\u5728\u5730"}
              </span>
              <span className="text-navy tracking-wider">
                {"\u6771\u4EAC\u90FD\u76EE\u9ED2\u533A"}
              </span>
            </div>
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
