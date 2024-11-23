import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}
export const Paragraph = ({ className = "", children, ...rest }: Props) => {
  return (
    <motion.p
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
        "text-xl text-center md:text-left md:text-2xl font-medium text-zinc-600 max-w-2xl",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
