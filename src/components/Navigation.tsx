"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Works", href: "/" },
    { label: "Product", href: "/product/pairstorming" },
    { label: "Service", href: "/service/summary" },
    { label: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-10 py-3">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-0 text-navy text-[22px] tracking-[0.15em] mr-8">
          <span className="font-light text-navy/50">IN</span>
          <span className="font-black">VITRO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-navy text-sm font-bold tracking-widest hover:opacity-70 transition-opacity ${
                isActive(link.href) ? "border-b-2 border-navy pb-0.5" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex-1" />

        {/* Contact Button */}
        <button
          onClick={onContactClick}
          className="hidden md:block text-navy text-sm font-bold tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
        >
          Contact
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-navy transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-navy transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-navy transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-navy text-sm font-bold tracking-widest"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onContactClick();
            }}
            className="block py-3 text-navy text-sm font-bold tracking-widest cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
