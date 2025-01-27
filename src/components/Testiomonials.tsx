import { testimonials } from "../data/testimonials";
import { Paragraph } from "./ui/Paragraph";
import { Title } from "./ui/Title";
import { motion } from "framer-motion";

export const Testiomonials = () => {
  return (
    <section className="py-14 md:py-28" id="testimonios">
      <div className="container">
        <Title>Lo que Dicen Nuestros Clientes</Title>
        <Paragraph>
          Clientes satisfechos comparten su experiencia con nuestro café y
          servicio único
        </Paragraph>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
          {testimonials.map((testimony) => (
            <figure className="flex justify-between flex-col gap-4 bg-white p-6 rounded-2xl shadow-md">
              <div className="flex gap-2">
                {Array.from({ length: testimony.qualification }).map(
                  (_, indexStar) => (
                    <motion.svg
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.1 * indexStar,
                      }}
                      viewport={{
                        once: true,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-amber-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )
                )}
                {Array.from({ length: 5 - testimony.qualification }).map(
                  (_, indexStar) => (
                    <motion.svg
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
                        delay: 0.1 * (indexStar + testimony.qualification),
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-zinc-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )
                )}
              </div>
              <blockquote>
                <motion.p
                  initial={{
                    opacity: 0,
                    scale: 0.75,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="text-xl text-primary-800 font-medium"
                >
                  “{testimony.testimony}”
                </motion.p>
              </blockquote>
              <figcaption className="flex gap-4 items-center">
                <motion.img
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
                  loading="lazy"
                  src={`/avatars${testimony.avatar}`}
                  className="h-12 w-12 aspect-square object-cover rounded-full shadow"
                  alt={`Foto de ${testimony.name}`}
                />
                <motion.figcaption
                  initial={{
                    opacity: 0,
                    width: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    width: "auto",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="text-zinc-800 font-medium text-lg overflow-hidden text-nowrap"
                >
                  - {testimony.name}
                </motion.figcaption>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
