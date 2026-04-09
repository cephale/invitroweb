"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";

/* eslint-disable @next/next/no-img-element */

const CDN = "https://cdn.prod.website-files.com/5b6fab70681f894832b563b5";

export default function ProductPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation onContactClick={() => setContactOpen(true)} />

      {/* ===== Hero Section ===== */}
      <section
        className="relative bg-[#f8f8f8] overflow-hidden"
        style={{ height: "700px", marginTop: "60px" }}
      >
        <div className="max-w-[1200px] mx-auto h-full relative">
          {/* Left: App Screenshots - layered */}
          <div className="absolute left-[5%] top-0 bottom-0 w-[55%]">
            {/* Main session screenshot */}
            <div
              className="absolute left-0 top-[-10%] w-[340px] h-[600px] bg-contain bg-no-repeat bg-top"
              style={{
                backgroundImage: `url(${CDN}/5e8b34f969409f78efe36ee5_pairstorming.png)`,
              }}
            />
            {/* Filter box overlay */}
            <div
              className="absolute right-0 bottom-[-5%] w-[300px] h-[210px] bg-contain bg-no-repeat bg-center shadow-[0px_2px_20px_rgba(0,0,0,0.15)] rounded-lg"
              style={{
                backgroundImage: `url(${CDN}/5e8b34d8178e5ad37649700c_filter_box_agent.png)`,
              }}
            />
            {/* Skill summary small */}
            <div
              className="absolute right-[-5%] top-[55%] w-[190px] h-[190px] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${CDN}/5e8b38038a03b5c3de56f3c9_skillsummary.png)`,
              }}
            />
          </div>

          {/* Right: Title */}
          <div className="absolute right-[5%] top-[38%] text-right">
            <h1
              className="text-[#4a4a4a] font-normal tracking-[5px] leading-tight"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "50px" }}
            >
              Pair Storming
            </h1>
            <div
              className="text-[#4a4a4a] font-bold text-[21px] tracking-[3.3px] mt-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              <p>{"\u30A8\u30AD\u30B9\u30D1\u30FC\u30C8\u3078\u306E\u8FD1\u9053"}</p>
              <p>{"\u4ED5\u4E8B\u3082\u6210\u9577\u3082\u540C\u6642\u306B\u5B8C\u4E86"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3 Value Cards ===== */}
      <section className="py-8">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: `${CDN}/5e8a9a1ea6b2c1d304ab9172_pairwork_three_value1.png`,
              title: "Abilities\ndevelopment",
              desc: "\u30C1\u30FC\u30E0\u3067\u4E00\u7DD2\u306B\u4ED5\u4E8B\u3092\u9032\u3081\u306A\u304C\u3089\n\u77E5\u8B58/\u80FD\u529B\u306E\u5E73\u6E96\u5316\u304C\u3067\u304D\u308B",
            },
            {
              img: `${CDN}/5e8a9d95cce5fb7a74b39a06_pairstorming-three-value-2%402x.png`,
              title: "Skill\nManagement",
              desc: "\u81EA\u5206\u3084\u4ED6\u306E\u4EBA\u306E\u30B9\u30AD\u30EB\u3084\u30C1\u30FC\u30E0\u306E\n\u696D\u52D9\u5185\u5BB9\u3092\u7C21\u5358\u306B\u8996\u899A\u5316\u3067\u304D\u308B\u3002\n\u30A8\u30AD\u30B9\u30D1\u30FC\u30C8\u3078\u306E\u8FD1\u9053\u3002",
            },
            {
              img: `${CDN}/5e8a9dd9f99d7c5d4d776791_pairstorming-three-value-3%402x.png`,
              title: "Well-being",
              desc: "\u4F7F\u3044\u7D9A\u3051\u308B\u3053\u3068\u3067\u30C1\u30FC\u30E0\u3092\n\u8CE2\u304F\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u308B\u4ED5\u7D44\u307F\u3092\u63D0\u4F9B\u3002\n\u65E9\u304F\u7D42\u308F\u3089\u305B\u3066\u4ED6\u306E\u4E8B\u306B\u6642\u9593\u3092\u4F7F\u304A\u3046",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] overflow-hidden"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            >
              {/* Card image top half */}
              <div className="relative bg-[#e7e7e7]/50 aspect-[346/153]">
                <div
                  className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
              </div>
              {/* Card text bottom half */}
              <div className="px-4 py-6 text-center">
                <p
                  className="text-[#4a4a4a] text-[22px] tracking-[4.5px] whitespace-pre-line leading-[28px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {card.title}
                </p>
                <p className="text-[#4a4a4a] text-[14px] tracking-[3.3px] leading-[24px] mt-4 whitespace-pre-line font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 卒啄同時 Section ===== */}
      <section className="relative overflow-hidden" style={{ height: "531px" }}>
        {/* Pink diagonal blob background */}
        <div
          className="absolute left-[-5%] top-[10%] w-[350px] h-[350px] rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, #f5c0b0 0%, #f8d8d0 50%, transparent 100%)",
            filter: "blur(40px)",
            transform: "rotate(-15deg)",
          }}
        />
        <div className="max-w-[1200px] mx-auto h-full relative px-6">
          {/* Left: Text */}
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2">
            <h2
              className="text-[#4a4a4a] font-bold text-[50px] tracking-[7.8px]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {"\u5352\u5544\u540C\u6642"}
            </h2>
            <div className="text-[#4a4a4a] font-bold text-[19px] tracking-[2.3px] leading-[28px] mt-8">
              <p>Workflow, Skillmap, Agent</p>
              <p>3{"\u3064\u306E\u8981\u7D20\u3067\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u30D6\u30E9\u30C3\u30B7\u30E5\u30A2\u30C3\u30D7"}</p>
              <p>{"\u30DA\u30A2\u30EF\u30FC\u30AF\u3067\u80FD\u529B\u62E1\u5F35\u3067\u304D\u308B"}</p>
            </div>
          </div>
          {/* Right: Triangle diagram */}
          <div className="absolute right-[7%] top-[11%] bottom-0 w-[42%]">
            <img
              src={`${CDN}/5e93d5544660cb2f7fe53fa7_triangle_pairwork.png`}
              alt="Pairwork Triangle"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== Workflow Module ===== */}
      <section className="relative overflow-hidden" style={{ height: "538px" }}>
        <div className="max-w-[1200px] mx-auto h-full relative px-6">
          {/* Left: Title + Description */}
          <div className="absolute left-[7%] top-[5%] w-[45%]">
            <div className="flex items-center gap-4 mb-4">
              <h2
                className="text-[#4a4a4a] text-[50px] tracking-[5.3px]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Workflow
              </h2>
              <span className="border-2 border-[#4a4a4a] text-[#4a4a4a] text-[14px] tracking-[1.7px] px-4 py-1">
                {"\u73FE\u5728\u5B9F\u88C5\u4E2D"}
              </span>
            </div>
            <div className="text-[#4a4a4a] font-bold text-[21px] tracking-[3.3px] leading-[35px]">
              <p>{"\u30BF\u30B9\u30AF\u306B\u30B9\u30AD\u30EB\u3068\u6642\u9593\u3092\u7D10\u4ED8\u3051\u3001"}</p>
              <p>{"\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u8A08\u753B"}</p>
              <p>{"\u30DA\u30A2\u3067\u304A\u4E92\u3044\u306E\u80FD\u529B\u3092\u9AD8\u3081\u5408\u3044\u306A\u304C\u3089"}</p>
              <p>{"\u4ED5\u4E8B\u3092\u5B8C\u4E86\u3059\u308B"}</p>
            </div>
          </div>
          {/* Right: App screenshots overlapping */}
          <div className="absolute right-[5%] top-[3%] w-[48%] h-[95%]">
            <img
              src={`${CDN}/5e8bbc2173e5cceb2b607f81_pairstorming_workflow.png`}
              alt="Workflow Session"
              className="absolute left-0 top-0 h-full w-auto"
              style={{ maxWidth: "55%" }}
            />
            <img
              src={`${CDN}/5e97d22c3fc8a73603287b99_pink_bg.png`}
              alt=""
              className="absolute right-0 top-[15%] w-[50%] h-auto shadow-[0px_17px_34px_rgba(0,0,0,0.22)] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ===== Skillmap Module ===== */}
      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h2
              className="text-[#4a4a4a] text-[50px] tracking-[5.3px]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Skillmap
            </h2>
            <span className="border-2 border-[#4a4a4a] text-[#4a4a4a] text-[14px] tracking-[1.7px] px-4 py-1">
              {"\u73FE\u5728\u5B9F\u88C5\u4E2D"}
            </span>
          </div>
          <div className="text-[#4a4a4a] font-bold text-[21px] tracking-[3.3px] leading-[35px] mb-4">
            <p>{"\u500B\u4EBA\u3068\u30C1\u30FC\u30E0\u306E\u80FD\u529B\u3092\u8996\u899A\u5316"}</p>
            <p>{"\u30B9\u30AD\u30EB\u3092\u7D10\u3065\u3051\u305F\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u5B9F\u884C\u3057\u3001\u5C02\u9580\u30B9\u30AD\u30EB\u3092\u7FD2\u5F97\u3059\u308B"}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <img
              src={`${CDN}/5e952373bb64f426e0e652c5_skillmap_personal_base.png`}
              alt="Skillmap Personal"
              className="w-full rounded-lg"
            />
            <img
              src={`${CDN}/5e9523c3e05ecde6262a285a_skil_detail_overlay.png`}
              alt="Skill Detail"
              className="w-full rounded-lg"
            />
            <img
              src={`${CDN}/5e93e943efc8a046a15f90ae_slkillmap_team.png`}
              alt="Skillmap Team"
              className="w-full rounded-lg"
            />
          </div>

          {/* Team skill map banner */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#6c5ce7]/10 border border-[#6c5ce7]/20 rounded-full px-8 py-3">
              <p className="text-[#4a4a4a] font-bold text-[16px] tracking-[2px]">
                {"\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u306E\u80FD\u529B\u3092"}
                <br />
                {"\u30B9\u30AD\u30EB\u30DE\u30C3\u30D7\u3067\u30DE\u30CD\u30FC\u30B8\u30E1\u30F3\u30C8"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Agent Module ===== */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ minHeight: "800px" }}>
        {/* Diagonal gray background - top-left to bottom-right */}
        <div
          className="absolute inset-0 bg-[#f0f0f0]"
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
          }}
        />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <h2
              className="text-[#4a4a4a] text-[50px] tracking-[5.3px]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Agent
            </h2>
            <span className="border-2 border-[#4a4a4a] text-[#4a4a4a] text-[14px] tracking-[1.7px] px-4 py-1">
              {"\u8A2D\u8A08\u4E2D"}
            </span>
          </div>
          <div className="text-[#4a4a4a] font-bold text-[21px] tracking-[3.3px] leading-[35px] mb-12">
            <p>{"\u30C1\u30FC\u30E0\u3068\u30E6\u30FC\u30B6\u306E\u884C\u52D5\u3092\u30C7\u30FC\u30BF\u5206\u6790\u3057"}</p>
            <p>{"\u81EA\u52D5\u7684\u306B\u30A2\u30B7\u30B9\u30C8\u3059\u308B\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8"}</p>
          </div>

          {/* 3 columns: illustrations + text below */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <img
                src={`${CDN}/5e8ae04bcce5fbfc0ab4a97d_agent_value_1_search.png`}
                alt="Agent Search"
                className="w-[220px] h-[220px] mx-auto object-contain"
              />
              <div className="text-[#4a4a4a] font-bold text-[18px] tracking-[2.5px] leading-[30px] mt-6">
                <p>{"\u805E\u3051\u3070\u7B54\u3048\u3066\u304F\u308C\u308B"}</p>
                <p>{"\u4FBF\u5229\u306A\u691C\u7D22"}</p>
              </div>
            </div>
            <div className="text-center">
              <img
                src={`${CDN}/5e8ae04bbcf6e153cdcc9c54_agent_value_2_workflowUpdated.png`}
                alt="Agent Workflow Update"
                className="w-[220px] h-[220px] mx-auto object-contain"
              />
              <div className="text-[#4a4a4a] font-bold text-[18px] tracking-[2.5px] leading-[30px] mt-6">
                <p>Workflow{"\u5B9F\u884C\u30C7\u30FC\u30BF\u306E"}</p>
                <p>{"\u89E3\u6790\u306B\u3088\u308A"}Workflow{"\u304C"}</p>
                <p>{"\u6D17\u7DF4\u3055\u308C\u3066\u3044\u304F"}</p>
              </div>
            </div>
            <div className="text-center">
              <img
                src={`${CDN}/5e8ae04b4fbaea308026d523_agent_value_3_teamwork.png`}
                alt="Agent Teamwork"
                className="w-[220px] h-[220px] mx-auto object-contain"
              />
              <div className="text-[#4a4a4a] font-bold text-[18px] tracking-[2.5px] leading-[30px] mt-6">
                <p>{"\u751F\u4F53\u30C7\u30FC\u30BF\u304B\u3089\u30E6\u30FC\u30B6\u306E"}</p>
                <p>{"\u72B6\u614B\u3092\u628A\u63E1\u3057"}</p>
                <p>{"\u30C1\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u91B8\u6210"}</p>
              </div>
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
