"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? "py-3 border-b border-gray-200 shadow-md"
          : "py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative h-10 sm:h-11 w-40 sm:w-44 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/white-edge-logo.png"
              alt="White Edge Signages Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-[#111214] hover:text-[#EF2028] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EF2028] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Header CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="relative group overflow-hidden rounded-md bg-[#EF2028] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#B9131B] hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md bg-gray-100 text-[#111214] hover:text-[#EF2028] transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 flex flex-col justify-between p-6 overflow-y-auto border-t border-gray-200 animate-in slide-in-from-top duration-300">
          <div className="space-y-4 pt-2">
            <p className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              White Edge Navigation
            </p>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-heading font-bold tracking-wide text-[#111214] hover:text-[#EF2028] py-2 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 mt-6">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-md bg-[#EF2028] text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#B9131B]"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
