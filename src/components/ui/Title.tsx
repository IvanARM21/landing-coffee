import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}
export const Title = ({ className = "", children }: Props) => {
  return (
    <motion.h2
      initial={{
        y: -24,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={twMerge(
        "font-heading text-center md:text-left text-4xl md:text-5xl lg:text-6xl text-primary-600",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};
