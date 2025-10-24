"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AhnafFarhanHossain/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/",
    },
    { icon: Twitter, label: "Twitter", href: "https://x.com/AhnafPresents" },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ahnaf._._farh.an/",
    },
  ];

  return (
    <section className="min-h-screen px-6 sm:px-8 md:px-12 py-12 md:py-20 pb-24 lg:pb-20 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] liquid-gradient opacity-10 blur-3xl" />

      <div className="max-w-5xl w-full relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1 w-12 bg-linear-to-r from-accent to-transparent rounded-full" />
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Contact
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-linear-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Connect!
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            If you're interested in my work or want to discuss a project, I'm
            always open to exchanging ideas and collaborating. Feel free to
            reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          <motion.div
            className="glass-dark p-8 rounded-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 glass rounded-xl">
                <Mail className="text-accent" size={24} />
              </div>
              <p className="text-sm text-muted-foreground">Email</p>
            </div>
            <a
              href="mailto:ahnaffarhanhossain@gmail.com"
              className="text-xl font-medium hover:text-accent transition-colors cursor-pointer block"
            >
              ahnaffarhanhossain@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="glass-dark p-8 rounded-3xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-sm text-muted-foreground mb-4">Social Links</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, label, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                  <ArrowRight
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                    size={16}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
