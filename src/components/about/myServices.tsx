"use client";

import { motion } from "motion/react";
import { Globe, Mail, Wrench, ShieldCheck, Search, Puzzle } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Creation",
    description:
      "From landing pages to advanced web apps—I'll bring your brand to life with a sleek, fast, mobile-ready website.",
  },
  {
    icon: Mail,
    title: "Email Setup & Domain",
    description:
      "I’ll help you set up professional email (like hello@yourcompany.com) and manage your domain hassle-free.",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    description:
      "I optimize your website to be found on Google—so customers come to *you*.",
  },
  {
    icon: ShieldCheck,
    title: "Hosting & Maintenance",
    description:
      "I handle updates, backups, and server management, so your site stays fast, secure, and always online.",
  },
  {
    icon: Puzzle,
    title: "Custom Functionality",
    description:
      "Need booking, logins, file sharing, or internal tools? I’ll tailor the tech to your business needs.",
  },
  {
    icon: Wrench,
    title: "Ongoing Support",
    description:
      "I offer ongoing care packages, so you can focus on your business while I handle the tech.",
  },
];

export default function WhatIOffer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={i}
            className="rounded-2xl shadow-md p-6 border-white/20 border-2 bg-white/5 text-white/90 hover:shadow-lg transition-transform hover:scale-[1.02] select-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl text-foreground font-semibold mb-2 flex items-center gap-2">
              <Icon className="w-5 h-5" />
              {service.title}
            </h3>
            <p className="text-foreground-600">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
