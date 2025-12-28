"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "Invenza",
      description:
        "Inventory management and order tracking software. A comprehensive solution for managing inventory with real-time tracking capabilities.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Vercel",
        "Cloudflare",
      ],
      link: "https://invenza.me",
      year: 2025,
      image: "/images/projects/invenza.webp",
    },
    {
      title: "PeakFit",
      description:
        "A modern fitness center website designed with clean layout and engaging animations. Showcasing premium facilities and services.",
      technologies: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/W2wufaQNLELhsmj2iCNkIm/Peak-Fit-Landing?node-id=1-2&t=dMnaZxNn8B6PvMQN-1",
      year: 2025,
      image: "/images/projects/peakfit.webp",
    },
    {
      title: "ColorTailor AI",
      description:
        "AI-powered color palette generator from keywords. Generates beautiful color schemes based on user input using advanced AI.",
      technologies: ["Next.js", "OpenRouter AI", "React"],
      link: "https://colortailorai.vercel.app",
      year: 2025,
      image: "/images/projects/colortailor.webp",
    },
    {
      title: "Creatifi Studios",
      description:
        "An affordable global creative agency. Specializing in web development, branding, and comprehensive digital solutions for clients.",
      technologies: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/PvSTkFgwBrB1ZBXR0lWpDl/Creatifi-Studios?node-id=0-1&t=KNDgu4X8sdKCvKlZ-1",
      year: 2025,
      image: "/images/projects/creatifi.webp",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoveredProject === null) return;

      const x = e.clientX;
      const y = e.clientY;

      setMousePos({ x, y });

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: x - 150,
          y: y - 150,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredProject]);

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 space-y-4"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <p className="text-sm text-muted-foreground">{project.year}</p>

              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted rounded text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
