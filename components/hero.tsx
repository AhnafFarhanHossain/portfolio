"use client";

import { motion } from "framer-motion";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 py-20 pb-24 lg:pb-20 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-tight bg-linear-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Ahnaf Farhan Hossain
          </motion.h2>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a{" "}
          <span className="text-accent font-medium">
            Full Stack Web Developer
          </span>{" "}
          and <span className="text-accent font-medium">Web Designer</span>{" "}
          crafting visually stunning, functional, and user-focused web
          experiences with precision and creativity. Turning ideas into
          impactful digital realities.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={() => setActiveSection("about")}
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-linear-to-b from-foreground to-foreground/90 text-background font-semibold rounded-xl shadow-[0_6px_0_0_rgba(0,0,0,0.3),0_4px_14px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.35),0_4px_18px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:shadow-[0_3px_0_0_rgba(0,0,0,0.3),0_2px_8px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all cursor-pointer border-t border-white/10 w-full sm:w-auto active:translate-y-[3px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Learn More</span>
          </motion.button>
          <motion.button
            onClick={() => setActiveSection("projects")}
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-linear-to-b from-muted to-muted/80 text-foreground font-semibold rounded-xl shadow-[0_6px_0_0_rgba(0,0,0,0.2),0_4px_14px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.25),0_4px_18px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] active:shadow-[0_3px_0_0_rgba(0,0,0,0.2),0_2px_8px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all cursor-pointer border-t border-white/5 w-full sm:w-auto active:translate-y-[3px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-20 pt-8 md:pt-12 glass-dark rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 md:mb-3">
            Currently
          </p>
          <p className="text-base sm:text-lg font-medium">
            Available for freelance opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
