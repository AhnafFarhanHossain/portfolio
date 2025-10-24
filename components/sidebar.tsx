"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Home,
  User,
  Briefcase,
  Award,
  MessageSquare,
  Send,
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({
  activeSection,
  setActiveSection,
}: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", number: "1", icon: Home },
    { id: "about", label: "About", number: "2", icon: User },
    { id: "projects", label: "Projects", number: "3", icon: Briefcase },
    { id: "experience", label: "Experience", number: "4", icon: Award },
    {
      id: "testimonials",
      label: "Testimonials",
      number: "5",
      icon: MessageSquare,
    },
    { id: "contact", label: "Contact", number: "6", icon: Send },
  ];

  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const mouseY = useMotionValue(0);

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <motion.aside
        className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 xl:gap-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="glass-dark rounded-2xl p-3 xl:p-4 backdrop-blur-xl flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-xl xl:text-2xl font-bold tracking-tight bg-linear-to-r from-foreground to-accent bg-clip-text text-transparent">
            AF
          </h1>
        </motion.div>

        {/* Floating Navigation Tabs */}
        <motion.nav
          className="glass-dark rounded-2xl p-2 xl:p-3 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseY.set(e.clientY - rect.top);
          }}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              const isHovered = hoveredTab === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  className={`relative p-2 xl:p-3 rounded-xl cursor-pointer transition-all ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.05,
                    duration: 0.3,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active/Hover Background */}
                  {(isActive || isHovered) && (
                    <motion.div
                      className="absolute inset-0 glass rounded-xl"
                      layoutId={isActive ? "activeTab" : "hoverTab"}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Icon with floating animation */}
                  <motion.div
                    className="relative z-10"
                    animate={
                      isActive
                        ? {
                            y: [0, -3, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <IconComponent size={18} className="xl:w-5 xl:h-5" />
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute left-full ml-4 px-3 py-2 glass-dark rounded-xl whitespace-nowrap text-sm pointer-events-none"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>

        {/* Social Links */}
        <motion.div
          className="glass-dark rounded-2xl p-2 xl:p-3 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-col gap-2 items-center">
            {[
              { icon: Github, href: "https://github.com/AhnafFarhanHossain/" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/",
              },
              { icon: Twitter, href: "https://x.com/AhnafPresents" },
              {
                icon: Instagram,
                href: "https://www.instagram.com/ahnaf._._farh.an/",
              },
              { icon: Mail, href: "mailto:ahnaffarhanhossain@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="text-muted-foreground hover:text-accent transition-colors cursor-pointer p-2 rounded-lg hover:bg-accent/10"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} className="xl:w-[18px] xl:h-[18px]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.aside>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark backdrop-blur-xl border-t border-white/10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center px-4 py-3 max-w-md mx-auto">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-xl cursor-pointer relative ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 glass rounded-xl"
                    layoutId="activeMobileTab"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <motion.div
                  className="relative z-10"
                  animate={
                    isActive
                      ? {
                          y: [0, -2, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <IconComponent size={20} />
                </motion.div>
                <span className="text-[10px] relative z-10">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
