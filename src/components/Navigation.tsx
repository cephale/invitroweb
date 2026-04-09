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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ height: "60px" }}>
      <div
        className="flex items-center justify-between h-full"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 64px" }}
      >
        {/* Left group: Logo + Nav links */}
        <div className="flex items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex items-baseline gap-0 text-navy tracking-[0.15em]"
            style={{ width: "180px", paddingRight: "10px", fontSize: "22px" }}
          >
            <span className="font-light text-navy/50">IN</span>
            <span className="font-black">VITRO</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-navy hover:opacity-70 transition-opacity ${
                  isActive(link.href) ? "border-b-2 border-navy" : ""
                }`}
                style={{
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  fontWeight: 400,
                  marginRight: "24px",
                  paddingBottom: isActive(link.href) ? "2px" : "0",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button - far right */}
        <button
          onClick={onContactClick}
          className="hidden md:block text-navy hover:opacity-70 transition-opacity cursor-pointer"
          style={{ fontSize: "20px", fontWeight: 500, letterSpacing: "1.5px" }}
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
