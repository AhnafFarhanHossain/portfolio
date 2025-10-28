"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Invenza",
      subtitle: "Inventory Management & Order Tracking System",
      description:
        "A modern, full-stack inventory management system that helps businesses efficiently manage their products, orders, and customers. Features real-time tracking, advanced analytics, and enterprise-level security with a comprehensive dashboard.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invenza%20mockup.png-4mZIvQEfdQxgeM8XcWYhdMbE5L4pjx.jpeg",
      tags: [
        "Next JS 15",
        "MongoDB",
        "Tailwind CSS",
        "shadcn/ui",
        "React Hook Form",
        "Zod",
      ],
      links: {
        github: "https://github.com/AhnafFarhanHossain/Invenza",
        live: "https://invenza.me",
      },
      featured: true,
      isDesign: false,
    },
    {
      title: "PEAK Fit",
      subtitle: "Website Redesign",
      description:
        "A comprehensive website redesign for PEAK Fit, a premier fitness center and gym based in Montana, United States. Addressed critical layout and structural issues while transforming the overall aesthetics to create a modern, engaging digital experience that reflects the brand's dynamic energy and professionalism.",
      image: "/peak mockup (2).webp",
      tags: ["Figma", "UI/UX Design", "Website Redesign"],
      links: {},
      featured: false,
      isDesign: true,
    },
    {
      title: "Creatifi Studios",
      subtitle: "Website Design",
      description:
        "Creatifi Studios is a dynamic creative agency specializing in branding, web design, and digital marketing. This project involved designing their official website using Figma, focusing on a modern, user-friendly interface that reflects their innovative approach.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creatifi-studios-design.png-pGNF0iM0yQfTXgmVDfziicYspS1xtc.jpeg",
      tags: ["Figma", "UI/UX Design", "Branding"],
      links: {
        live: "https://www.creatifistudios.com",
      },
      featured: false,
      isDesign: true,
    },
    {
      title: "ColorTailor",
      subtitle: "AI Color Palette Generator",
      description:
        "ColorTailor is an AI-powered color palette generator that helps you create beautiful color schemes for your projects. Just input your keywords, and let the AI do the rest!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colortailor%20mockup.png-TGQgl34sjaww0cGbKoZyDucqBQyf3b.jpeg",
      tags: ["React JS", "Next JS", "Tailwind CSS", "OpenRouter API", "Vercel"],
      links: {
        github: "https://github.com/AhnafFarhanHossain/colortailor",
        live: "https://colortailorai.vercel.app",
      },
      featured: false,
      isDesign: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemTransition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="min-h-screen px-6 sm:px-8 md:px-12 py-12 md:py-20 pb-24 lg:pb-20">
      <div className="max-w-5xl w-full">
        <div className="mb-12 md:mb-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1 w-12 bg-linear-to-r from-accent to-transparent rounded-full" />
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Portfolio
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-linear-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of my recent work showcasing web development, design,
            and creative solutions.
          </motion.p>
        </div>

        {/* Simple Vertical Layout */}
        <motion.div
          className="flex flex-col gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-3xl overflow-hidden border border-white/5 relative"
              variants={itemVariants}
              transition={itemTransition}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 left-6 z-20 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star size={14} className="fill-background text-background" />
                  <span className="text-background text-xs font-semibold">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:h-[500px]">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-64 md:h-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    priority={project.featured}
                    loading={project.featured ? "eager" : "lazy"}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Dark gradient overlay for better visual separation */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-background/30 md:to-background/80" />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1 relative z-10">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-accent/80 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 glass text-foreground/90 text-xs sm:text-sm font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-b from-muted to-muted/80 text-foreground font-semibold rounded-xl shadow-[0_4px_0_0_rgba(0,0,0,0.2),0_2px_8px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_0_0_rgba(0,0,0,0.25),0_2px_12px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all cursor-pointer border-t border-white/5 active:translate-y-0.5 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-b from-accent to-accent/90 text-background font-semibold rounded-xl shadow-[0_4px_0_0_rgba(0,0,0,0.3),0_2px_8px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_0_0_rgba(0,0,0,0.35),0_2px_12px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.3),0_1px_4px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all cursor-pointer border-t border-white/10 active:translate-y-0.5 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                        <span>
                          {project.isDesign ? "View Design" : "Live Demo"}
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
