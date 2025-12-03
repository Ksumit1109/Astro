// component.tsx
"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import Image from "next/image";
import { useRef, forwardRef } from "react";

interface ProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  image: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  image,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="w-full flex items-center justify-center sticky top-20"
    >
      <motion.div
        style={{
          scale,
          top: 30,
        }}
        className="flex flex-col mt-10 h-full w-full rounded-2xl px-4 origin-top bg-lightground overflow-hidden shadow-[0_4px_16px_4px_rgba(0,0,0,0.5)]"
      >
        <div className="grid grid-cols-2 lg:gap-4 gap-2 sm:grid-cols-2 my-4">
          <div className="flex-1 p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
            {/* Accent Line */}
            <div className="w-12 h-1 bg-white mb-8" />

            {/* Heading */}
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              {title}
            </h2>

            {/* Description */}
            <p className="text-[#8a8a8a] text-base lg:text-lg leading-relaxed max-w-md mb-8">
              {description}
            </p>

            {/* Contact Button */}
            <div>
              <button className="px-6 py-3 border border-[#3a3a3a] text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors">
                Contact me
              </button>
            </div>
          </div>

          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <motion.div
              className={`relative w-full h-full bg-background`}
              style={{ scale: imageScale }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(
  ({ projects }, _ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

    return (
      <ReactLenis root>
        <main
          className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10"
          ref={container}
        >
          <div className="flex justify-center items-center flex-col text-center mt-20">
            <h1 className="text-5xl max-w-2xl font-semibold tracking-tight text-foreground leading-[1.1]">
              What We Do
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-2xl">
              The ultimate platform for building modern, responsive, and
              high-performance websites. Designed for developers, loved by
              designers.
            </p>
          </div>

          <section className=" w-full bg-background">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project.link}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
    );
  }
);

Component.displayName = "Component";

export default Component;
