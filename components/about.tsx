"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    Design: ["Figma", "UI/UX Design", "Responsive Design", "Design Systems"],
    Tools: ["Git", "Docker", "Vercel", "AWS", "VS Code"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
              About
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-linear-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know more about my background, skills, and what drives my
            passion for development.
          </motion.p>
        </div>

        <motion.div
          className="space-y-4 md:space-y-6 mb-10 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="glass-dark p-8 rounded-3xl"
            variants={itemVariants}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full Stack Web Developer and Designer based in Bangladesh
              with a passion for creating beautiful, functional digital
              experiences. With expertise in modern web technologies and design
              principles, I help businesses and individuals bring their ideas to
              life.
            </p>
          </motion.div>

          <motion.div
            className="glass-dark p-8 rounded-3xl"
            variants={itemVariants}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity about how
              things work on the internet. Over the years, I've honed my skills
              in both frontend and backend development, always keeping user
              experience at the forefront of my work.
            </p>
          </motion.div>

          <motion.div
            className="glass-dark p-8 rounded-3xl"
            variants={itemVariants}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new design trends,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="glass-dark p-6 rounded-3xl hover:scale-[1.02] transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 glass text-foreground text-sm rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
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
