"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahat Jidni Osama",
      role: "Aribaas",
      content:
        "Ahnaf is a highly skilled Full Stack Engineer with exceptional problem-solving abilities and attention to detail. His dedication to quality work and creative approach make him invaluable to any team.",
      rating: 5,
    },
    {
      name: "Shahriar",
      role: "Wistiq (formerly TechShabaka)",
      content:
        "Ahnaf is a dedicated developer who brings strong technical skills and ownership to projects. His professionalism and clean solutions make him a valuable asset with a bright future.",
      rating: 5,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-linear-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Testimonials
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What colleagues and clients have to say about working with me.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-3xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              transition={itemTransition}
              whileHover={{ y: -5 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={60} className="text-accent" />
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Star size={18} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed relative z-10 text-lg">
                "{testimonial.content}"
              </p>

              <div className="relative z-10">
                <p className="font-bold text-foreground text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-accent">{testimonial.role}</p>
              </div>

              {/* Gradient accent on hover */}
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
