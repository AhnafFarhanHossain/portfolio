"use client";

import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Full Stack Web Developer and UI/UX Designer",
      company: "Creatifi Studios",
      period: "2025 - Present",
      status: "current",
      description:
        "Currently providing Web Development and Design Services as a part of the Creatifi Studios Team using MERN Stack, Next JS, Postgres and more. Working in innovative projects and expanding expertise in full-stack development.",
      highlights: [
        "Next JS",
        "Prisma",
        "PosgreSQL",
        "MongoDB",
        "Framer Motion",
        "Figma",
      ],
    },
    {
      title: "Fullstack Web Developer",
      company: "Wistiq",
      period: "2024 - 2025",
      status: "Completed",
      description:
        "Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js. Implemented modern UI/UX designs and optimized application performance.",
      highlights: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Next.js",
        "UI/UX",
      ],
    },
    {
      title: "Freelancer",
      company: "Upwork, Fiverr",
      period: "2022 - 2023",
      status: "Completed",
      description:
        "Provided freelance web development services to various clients worldwide. Delivered custom websites and web applications with focus on responsive design and user experience.",
      highlights: [
        "Web Development",
        "Responsive Design",
        "Client Management",
        "UX",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const itemTransition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96] as const,
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
              Experience
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-linear-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My professional journey and the companies I've had the privilege to
            work with.
          </motion.p>
        </div>

        <motion.div
          className="space-y-4 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-dark p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
              variants={itemVariants}
              transition={itemTransition}
              whileHover={{ x: 5 }}
            >
              {/* Accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-accent to-accent/30" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <motion.span
                    key={highlight}
                    className="px-3 py-1 glass text-foreground text-sm rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
