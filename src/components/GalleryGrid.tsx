import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const images = [
  {
    src: "/gallery/1.webp",
    alt: "A scenic mountain view with a lake",
    colSpan: "7",
  },
  {
    src: "/gallery/2.webp",
    alt: "A forest path surrounded by trees",
    colSpan: "5",
  },
  {
    src: "/gallery/3.webp",
    alt: "A beach during sunset with colorful skies",
    colSpan: "6",
  },
  {
    src: "/gallery/4.webp",
    alt: "A cityscape at night with bright lights",
    colSpan: "6",
  },
  {
    src: "/gallery/5.webp",
    alt: "A vibrant flower garden in full bloom",
    colSpan: "5",
  },
  {
    src: "/gallery/6.webp",
    alt: "A tranquil waterfall in a forest",
    colSpan: "7",
  },
  {
    src: "/gallery/7.webp",
    alt: "A snowy landscape with evergreen trees",
    colSpan: "7",
  },
  {
    src: "/gallery/8.webp",
    alt: "A desert with sand dunes under the blue sky",
    colSpan: "5",
  },
];

export const GalleryGrid = () => {
  return (
    <div className="grid md:grid-cols-12 gap-10 mt-10">
      {images.map((image, index) => (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.1 * index,
          }}
          key={index}
          className={twMerge(
            "overflow-hidden rounded-2xl shadow-md",
            image.colSpan === "5" && "md:col-span-5",
            image.colSpan === "7" && "md:col-span-7",
            image.colSpan === "6" && "md:col-span-6"
          )}
        >
          <img
            src={image.src}
            className="object-cover hover:scale-125 transition-all duration-500 w-full h-full"
            alt={image.alt}
            loading="lazy"
            width="350"
            height="250"
          />
        </motion.div>
      ))}
    </div>
  );
};
