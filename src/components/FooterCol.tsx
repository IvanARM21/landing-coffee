import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const FooterCol = ({ children, className = "", index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={twMerge("", className)}
    >
      {children}
    </motion.div>
  );
};
