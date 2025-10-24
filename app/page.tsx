"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: <Hero setActiveSection={setActiveSection} />,
    about: <About />,
    projects: <Projects />,
    experience: <WorkExperience />,
    testimonials: <Testimonials />,
    contact: <Contact />,
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96] as const,
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Dark Horizon Glow - Full Width */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />

      {/* Content - Centered with max-width */}
      <div className="flex min-h-screen text-foreground justify-center relative z-10">
        <div className="flex w-full max-w-[1000px]">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <main className="flex-1 overflow-y-auto scroll-smooth">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                {sections[activeSection as keyof typeof sections]}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
