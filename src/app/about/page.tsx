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
    specialty: "Data Science \u00D7 UI Development",
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
  ["\u30B5\u30FC\u30D3\u30B9\u30C7\u30B6\u30A4\u30F3", "UX\u306E\u8ABF\u67FB\u8A2D\u8A08", "UI\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0\u5B9F\u88C5"],
  ["\u7D71\u8A08\u30C7\u30FC\u30BF\u30B3\u30F3\u30B5\u30EB", "\u30A8\u30F4\u30A3\u30C7\u30F3\u30B9\u30D9\u30FC\u30B9\u306E\u610F\u601D\u6C7A\u5B9A\u652F\u63F4"],
  ["\u81EA\u793E\u30B5\u30FC\u30D3\u30B9"],
];

function BoardMemberCard({ member }: { member: typeof boardMembers[0] }) {
  return (
    <div>
      {/* Square photo */}
      <div className="relative w-[180px] h-[180px] mb-4">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(30%)" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>
      {/* Orange underline accent */}
      <div className="w-[50px] h-[3px] bg-[#f08050] mb-4" />
      {/* Role + Specialty */}
      <p className="text-[#e88530] font-bold text-[16px] tracking-[1px]">
        {member.role}
      </p>
      <p className="text-[#e88530] font-bold text-[14px] tracking-[1px] mb-4">
        {member.specialty}
      </p>
      {/* Bio */}
      <p className="text-[#4a4a4a] text-[12px] leading-[22px] tracking-[0.5px] max-w-[250px]">
        {member.bio}
      </p>
    </div>
  );
}

function PartnerCard({ member }: { member: typeof partners[0] }) {
  return (
    <div>
      <div className="relative w-[160px] h-[200px] bg-[#e8e8e8] mb-3">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>
      <p className="text-[#4a4a4a] text-[12px] tracking-[0.5px]">
        {member.name}
      </p>
    </div>
  );
}

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation onContactClick={() => setContactOpen(true)} />

      {/* ===== VISION ===== */}
      <section className="relative overflow-hidden" style={{ height: "840px", marginTop: "60px" }}>
        {/* Background gradient (pink to lavender) */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(245,210,200,0.3) 0%, rgba(230,225,245,0.3) 50%, transparent 70%)",
          }}
        />
        {/* Accent bar */}
        <div className="absolute left-[-86px] top-[104px] w-[839px] h-[167px] bg-[#b8d8d0] opacity-15 -rotate-0" />

        <div className="max-w-[1200px] mx-auto relative px-[100px]">
          <p
            className="uppercase tracking-[8.3px]"
            style={{ color: "#ccc", fontSize: "50px", fontFamily: "'Lato', sans-serif", marginTop: "170px" }}
          >
            Vision
          </p>
          <h1
            className="text-[#4a4a4a] font-bold tracking-[3px] mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 70px)", fontFamily: "'Lato', sans-serif" }}
          >
            Create New Nodes
          </h1>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="relative px-6 md:px-[100px]" style={{ minHeight: "1544px" }}>
        <div className="max-w-[1200px] mx-auto">
          <p
            className="uppercase tracking-[8.3px]"
            style={{ color: "#ccc", fontSize: "50px", fontFamily: "'Lato', sans-serif" }}
          >
            Mission
          </p>
          <div className="h-[2px] w-full bg-[#e8e8e8] mt-4 mb-16" />

          {/* 01 HCI Ecosystem */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
            <div>
              <p className="text-[#4a4a4a] text-[14px] tracking-[2px] uppercase mb-6">
                01 Designing HCI Ecosystem
              </p>
              <div className="text-[#4a4a4a] font-bold text-[24px] tracking-[2px] leading-[40px]">
                <p>
                  <span className="bg-[#b8d8d0]/30 px-1">{"\u4EBA\u306E\u8A8D\u77E5\u30B7\u30B9\u30C6\u30E0 / \u793E\u4F1A\u7D44\u7E54/"}</span>
                </p>
                <p>
                  <span className="bg-[#b8d8d0]/30 px-1">{"\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u30C7\u30B6\u30A4\u30F3\u3057\u3001"}</span>
                </p>
                <p>
                  <span className="bg-[#b8d8d0]/30 px-1">{"\u30B5\u30FC\u30D3\u30B9\u3092\u30A8\u30B3\u30B7\u30B9\u30C6\u30E0\u3068\u3057\u3066\u9054\u6210\u3059\u308B"}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={`${CDN}/5d1beab8df1829e462ebc092_infograph_ecosystemdesign.png`}
                alt="HCI Ecosystem"
                className="w-full max-w-[400px]"
              />
            </div>
          </div>

          {/* 02 Augmentation */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src={`${CDN}/5d1beab82b2ad21e8344ae28_smarttec.png`}
                alt="Smart Technology"
                className="w-full max-w-[400px]"
              />
            </div>
            <div>
              <p className="text-[#4a4a4a] text-[14px] tracking-[2px] uppercase mb-6">
                02 Augmentation of Abilities by Smart tec
              </p>
              <div className="text-[#4a4a4a] font-bold text-[24px] tracking-[2px] leading-[40px]">
                <p>{"\u30B9\u30DE\u30FC\u30C8\u306A\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u5229\u7528\u306B\u3088\u3063\u3066"}</p>
                <p>{"\u4EBA\u3084\u7D44\u7E54\u306E\u80FD\u529B\u3092\u62E1\u5F35\u3059\u308B"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOMAIN ===== */}
      <section className="py-24 px-6 md:px-[100px]" style={{ minHeight: "750px" }}>
        <div className="max-w-[1200px] mx-auto">
          <p
            className="uppercase tracking-[8.3px] mb-4"
            style={{ color: "#ccc", fontSize: "50px", fontFamily: "'Lato', sans-serif" }}
          >
            Domain
          </p>
          <div className="h-[2px] w-full bg-[#e8e8e8] mb-12" />

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: description */}
            <p className="text-[#4a4a4a] text-[16px] leading-[32px] tracking-[2px]">
              {"\u52A0\u901F\u3059\u308B\u30B3\u30F3\u30D4\u30E5\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u9032\u5316\u3092\u4EBA\u9593\u306E\u8A8D\u8B58\u80FD\u529B\u3068\u30D3\u30B8\u30CD\u30B9\u306A\u3069\u306E\u793E\u4F1A\u74B0\u5883\u306B\u6700\u9069\u306B\u9069\u5FDC\u3055\u305B\u308B\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u30C7\u30B6\u30A4\u30F3\u30FB\u958B\u767A\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u30EA\u30B5\u30FC\u30C1\u3001\u30C7\u30FC\u30BF\u89E3\u6790\u3092\u4E2D\u5FC3\u306B\u30C7\u30B6\u30A4\u30F3\u30B7\u30F3\u30AD\u30F3\u30B0,HCI(Human Computer Interaction)\u3001\u8A8D\u77E5\u79D1\u5B66\u3092\u30B3\u30F3\u30D4\u30C6\u30F3\u30B7\u30FC\u3068\u3057\u3066\u3001\u767A\u5C55\u7684\u306ANode\u306E\u5275\u51FA\u3092\u76EE\u6307\u3057\u307E\u3059"}
            </p>
            {/* Right: domain tags in 2 columns */}
            <div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {domains[0].map((d) => (
                  <p key={d} className="text-[#4a4a4a] text-[14px] tracking-[1.5px]">{d}</p>
                ))}
                {domains[1].map((d) => (
                  <p key={d} className="text-[#4a4a4a] text-[14px] tracking-[1.5px]">{d}</p>
                ))}
              </div>
              <div className="mt-8">
                {domains[2].map((d) => (
                  <p key={d} className="text-[#4a4a4a] text-[14px] tracking-[1.5px]">{d}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEMBER ===== */}
      <section
        className="relative py-24 px-6 md:px-[100px] overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(230,225,245,0.2) 0%, rgba(220,230,248,0.3) 40%, rgba(240,220,230,0.2) 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p
            className="uppercase tracking-[8.3px] mb-4"
            style={{ color: "#ccc", fontSize: "50px", fontFamily: "'Lato', sans-serif" }}
          >
            Member
          </p>
          <div className="h-[2px] w-full bg-[#e8e8e8] mb-16" />

          {/* BOARD */}
          <div className="relative mb-20">
            <p
              className="absolute right-0 top-0 tracking-[8px] uppercase"
              style={{ color: "#4a4a4a", fontSize: "28px", fontFamily: "'Lato', sans-serif" }}
            >
              Board
            </p>
            <div className="grid grid-cols-2 gap-12 max-w-[600px]">
              {boardMembers.map((m) => (
                <BoardMemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* PARTNER */}
          <div className="relative">
            <p
              className="absolute right-0 top-0 tracking-[8px] uppercase"
              style={{ color: "#4a4a4a", fontSize: "28px", fontFamily: "'Lato', sans-serif" }}
            >
              Partner
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px]">
              {partners.map((m) => (
                <PartnerCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Join Our Partnership ===== */}
      <section className="py-20 px-6 md:px-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-[#4a4a4a] tracking-[3px] mb-10"
            style={{ fontSize: "clamp(30px, 4vw, 50px)", fontFamily: "'Lato', sans-serif", fontStyle: "italic" }}
          >
            Join Our Partnership
          </h2>
          <p className="text-[#4a4a4a] text-[14px] leading-[28px] tracking-[1px] max-w-[900px] mb-8">
            INVITRO{"\u3067\u306F\u4ED5\u4E8B\u306B\u5FDC\u3058\u3066\u30DA\u30A2\u30EF\u30FC\u30AF\u3092\u7D44\u3093\u3067\u3044\u308B\u30C7\u30B6\u30A4\u30CA\u30FC\u30FB\u30A8\u30F3\u30B8\u30CB\u30A2\u30D1\u30FC\u30C8\u30CA\u30FC\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059\u3002"}
            <br />
            INVITRO{"\u3067\u306F\u30E6\u30FC\u30B6\u30FB\u30C1\u30FC\u30E0\u306B\u5BFE\u3057\u3066\u4FA1\u5024\u3068\u5275\u9020\u6027\u3092\u91CD\u8996\u3057\u3066\u3044\u307E\u3059\u3002\u8A73\u3057\u304F\u306F\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044"}
          </p>

          <p className="text-[#4a4a4a] text-[12px] tracking-[1px]">
            {"\u8208\u5473\u306E\u3042\u308B\u65B9\u306F\u304A\u6C17\u8EFD\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044"}
          </p>
        </div>
      </section>

      {/* ===== Company Info ===== */}
      <section className="py-20 px-6 md:px-[100px] bg-[#fafafa]">
        <div className="max-w-[900px] mx-auto">
          <h2
            className="text-[#ccc] tracking-[4px] mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 45px)", fontFamily: "'Lato', sans-serif", fontStyle: "italic" }}
          >
            Company Info
          </h2>

          <div className="space-y-0">
            {[
              ["\u4F1A\u793E\u540D", "INVITRO LLC"],
              ["\u8A2D\u7ACB\u5E74\u6708", "2018 12.19"],
              ["\u4EE3\u8868", "\u5C0F\u8535\u572D\u8F14 \u5C71\u672C"],
              ["\u8A2D\u7ACB\u65E5", "\u6771\u4EAC\u90FD\u4E16\u7530\u8C37\u533A"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="flex items-center py-6 border-t border-[#e8e8e8]"
                style={{ paddingLeft: "120px" }}
              >
                <span className="text-[#999] text-[14px] tracking-[3px] w-[120px] flex-shrink-0">
                  {label}
                </span>
                <span className="text-[#4a4a4a] font-bold text-[18px] tracking-[2px]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
