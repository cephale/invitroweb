"use client";

import { useState, FormEvent } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center modal-overlay bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-lg mx-4 mt-20 rounded-lg shadow-2xl overflow-hidden">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-navy text-xl font-bold tracking-wide">
                {"\u304A\u554F\u3044\u5408\u308F\u305B"}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-navy/40 hover:text-navy transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <p className="text-navy/60 text-xs mb-1">
              {"\u901A\u5E38\u306F1\u301C2\u55B6\u696D\u65E5\u307B\u3069\u3067\u78BA\u8A8D\u5F8C\u8FD4\u4FE1\u3057\u307E\u3059\u3002\u304A\u6025\u304E\u306E\u65B9\u306Ftwitter\u3067\u8A71\u304B\u3051\u3066\u304F\u3060\u3055\u3044"}
            </p>
            <a
              href="https://twitter.com/o_Invitro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy text-xs font-bold hover:opacity-70 mb-6 inline-block"
            >
              @O_invitro
            </a>

            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-navy text-xs font-bold mb-1">
                  {"\u304A\u306A\u307E\u3048"}{" "}
                  <span className="text-red-400 text-[10px]">{"\u5FC5\u9808"}</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={"\u59D3\u540D"}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-navy outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label className="block text-navy text-xs font-bold mb-1">
                  {"\u4F1A\u793E\u540D"}
                </label>
                <input
                  type="text"
                  placeholder="INVITRO LLC"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-navy outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label className="block text-navy text-xs font-bold mb-1">
                  {"\u30DD\u30B8\u30B7\u30E7\u30F3\u540D"}{" "}
                  <span className="text-red-400 text-[10px]">{"\u5FC5\u9808"}</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={"\u30EA\u30FC\u30C9\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u3001UI\u30C7\u30B6\u30A4\u30CA\u30FC"}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-navy outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label className="block text-navy text-xs font-bold mb-1">
                  E-mail{" "}
                  <span className="text-red-400 text-[10px]">{"\u5FC5\u9808"}</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder={"\u8FD4\u4FE1\u7528\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u3059"}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-navy outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label className="block text-navy text-xs font-bold mb-1">
                  {"\u3054\u7528\u4EF6\u306E\u5185\u5BB9"}{" "}
                  <span className="text-red-400 text-[10px]">{"\u5FC5\u9808"}</span>
                </label>
                <textarea
                  required
                  placeholder={"\u3054\u7528\u4EF6"}
                  rows={4}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-navy outline-none focus:border-navy transition-colors resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="text-navy/50 text-sm hover:text-navy transition-colors cursor-pointer"
              >
                {"\u30AD\u30E3\u30F3\u30BB\u30EB"}
              </button>
              <button
                type="submit"
                className="bg-navy text-white px-6 py-2 rounded text-sm font-bold tracking-wider hover:bg-navy-light transition-colors cursor-pointer"
              >
                {"\u9001\u4FE1\u3059\u308B"}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center">
            <h2 className="text-navy text-xl font-bold mb-2">
              {"\u304A\u554F\u3044\u5408\u308F\u305B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059"}
            </h2>
            <p className="text-navy/60 text-sm mb-2">
              {"\u901A\u5E38\u306F1\u301C2\u55B6\u696D\u65E5\u307B\u3069\u3067\u78BA\u8A8D\u5F8C\u8FD4\u4FE1\u3057\u307E\u3059\u3002\u304A\u6025\u304E\u306E\u65B9\u306Ftwitter\u3067\u8A71\u304B\u3051\u3066\u304F\u3060\u3055\u3044\u3002"}
            </p>
            <a
              href="https://twitter.com/o_Invitro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy text-sm font-bold hover:opacity-70"
            >
              @O_invitro
            </a>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-navy text-sm font-bold hover:opacity-70 cursor-pointer"
              >
                {"\u9589\u3058\u308B"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
