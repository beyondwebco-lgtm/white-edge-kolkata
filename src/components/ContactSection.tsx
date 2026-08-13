"use client";

import { useState, FormEvent } from "react";
import { SITE_CONFIG } from "@/config/site";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Calendar,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    service: SITE_CONFIG.services[0].title,
    budget: "₹50,000 - ₹2,000,000+",
    details: "",
    botCheck: "", // Honeypot spam protection
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.botCheck) return; // Silent return for bot spam

    if (!formData.name || !formData.phone || !formData.email) {
      setError("Please fill in your Name, Phone number, and Email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Red Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF2028]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[#EF2028]/30">
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            Let’s Build Signage That <span className="text-[#EF2028]">Gets Your Brand Noticed</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            Ready to elevate your commercial storefront, pylon, or corporate office? Request a free consultation, custom project estimate, or site survey today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Quick Action CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#111214] border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide border-b border-white/10 pb-4">
                Direct Contact Channels
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-start gap-4 group p-3 rounded-xl bg-[#050505] border border-white/5 hover:border-[#EF2028]/40 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-[#111214] text-[#EF2028] group-hover:bg-[#EF2028] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#A7A7A7] uppercase">Call Us</p>
                    <p className="text-base font-bold text-white group-hover:text-[#EF2028] transition-colors">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group p-3 rounded-xl bg-[#050505] border border-white/5 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-emerald-950/60 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#A7A7A7] uppercase">WhatsApp Instant Chat</p>
                    <p className="text-base font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      {SITE_CONFIG.whatsapp}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 group p-3 rounded-xl bg-[#050505] border border-white/5 hover:border-[#EF2028]/40 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-[#111214] text-[#EF2028] group-hover:bg-[#EF2028] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#A7A7A7] uppercase">Email Enquiries</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#EF2028] transition-colors break-all">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-[#050505] border border-white/5">
                  <div className="p-3 rounded-lg bg-[#111214] text-[#EF2028]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#A7A7A7] uppercase">Factory & Office Address</p>
                    <p className="text-xs font-semibold text-white leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-[#050505] border border-white/5">
                  <div className="p-3 rounded-lg bg-[#111214] text-[#EF2028]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#A7A7A7] uppercase">Business Hours</p>
                    <p className="text-xs font-semibold text-white">
                      {SITE_CONFIG.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Cluster */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="py-3 px-4 rounded-md bg-[#EF2028] text-xs font-bold uppercase text-white text-center hover:bg-[#B9131B]"
                >
                  Call Us
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-md bg-emerald-700 text-xs font-bold uppercase text-white text-center hover:bg-emerald-800"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#111214] border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide border-b border-white/10 pb-4 flex items-center justify-between">
                <span>Request A Free Quote & Survey</span>
                <Calendar className="w-5 h-5 text-[#EF2028]" />
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="inline-flex p-4 rounded-full bg-[#EF2028]/20 text-[#EF2028] border border-[#EF2028]/40">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white uppercase">
                    Thank You For Reaching Out!
                  </h4>
                  <p className="text-sm text-[#A7A7A7] max-w-md mx-auto leading-relaxed">
                    Our technical signage estimator has received your project details and will get back to you within 2 business hours with layout options and quotation.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        phone: "",
                        email: "",
                        location: "",
                        service: SITE_CONFIG.services[0].title,
                        budget: "₹50,000 - ₹2,000,000+",
                        details: "",
                        botCheck: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-md bg-[#EF2028] text-xs font-bold uppercase text-white hover:bg-[#B9131B]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Bot Honeypot */}
                  <input
                    type="text"
                    name="botCheck"
                    value={formData.botCheck}
                    onChange={(e) => setFormData({ ...formData, botCheck: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EF2028]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EF2028]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EF2028]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EF2028]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                        Project Site Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EF2028]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EF2028]"
                      >
                        {SITE_CONFIG.services.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#111214] text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                      Project Details & Dimensions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EF2028]"
                    />
                  </div>

                  {/* Upload Reference Image Placeholder */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A7A7A7] mb-1">
                      Upload Site / Design Reference Image
                    </label>
                    <div className="relative border-2 border-dashed border-white/10 hover:border-[#EF2028]/50 rounded-xl p-4 text-center cursor-pointer transition-colors bg-[#050505]">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name);
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center gap-1.5">
                        <UploadCloud className="w-6 h-6 text-[#EF2028]" />
                        <span className="text-xs text-[#A7A7A7]">
                          {fileName ? (
                            <strong className="text-emerald-400">{fileName}</strong>
                          ) : (
                            "Drag & drop site layout, logo vector or photo (Max 10MB)"
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#EF2028] text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#EF2028]/30 hover:bg-[#B9131B] transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
