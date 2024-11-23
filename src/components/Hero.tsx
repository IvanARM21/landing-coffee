import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="bg-[url(/bg-coffee.webp)] bg-no-repeat bg-cover inset-0 absolute -z-10"
        style={{
          clipPath:
            "polygon(53% 0, 100% 0, 100% 90%, 50% 100%, 50% 100%, 0 90%, 0 0);",
        }}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="bg-[url(/bg-coffee.webp)] bg-right bg-no-repeat bg-cover inset-0 absolute -z-20 blur-2xl opacity-70"
      ></motion.div>
      <div className="container text-center md:text-left flex flex-col gap-4 items-center md:items-start justify-center h-full">
        <motion.h1
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
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-2xl text-primary-600"
        >
          Tu lugar perfecto para disfrutar el mejor café
        </motion.h1>
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
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="text-xl md:text-2xl font-medium text-zinc-200 max-w-2xl"
        >
          Más que un lugar donde disfrutar del café y el desayuno, es su hogar
          lejos de casa.
        </motion.p>
        <motion.a
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.3,
            delay: 0.4,
            ease: "easeInOut",
          }}
          href="#contacto"
          className="rounded-md mt-5 py-2.5 px-5 bg-primary-600 text-xl text-white font-medium hover:bg-transparent hover:text-primary-600 border-2 border-primary-600 transition-all duration-300 cursor-pointer"
        >
          Realiza tu pedido
        </motion.a>
      </div>
    </section>
  );
};
