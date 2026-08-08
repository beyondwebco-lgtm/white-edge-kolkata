"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white text-[#111214] relative border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200">
            <HelpCircle className="w-4 h-4 text-[#EF2028]" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111214]">
            Frequently Asked <span className="text-[#EF2028]">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Find quick answers to common questions about our signage manufacturing, site surveys, custom fabrication, warranties, and maintenance services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden transition-all duration-300 shadow-xs hover:border-gray-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-100/50 transition-colors"
                >
                  <span className="text-lg font-heading font-bold text-[#111214] uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className="p-2 rounded-lg bg-white border border-gray-200 text-[#EF2028] shrink-0 shadow-xs">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-700 leading-relaxed border-t border-gray-200 pt-4 animate-in fade-in duration-200 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
