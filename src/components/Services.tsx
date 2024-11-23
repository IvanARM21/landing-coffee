import { Title } from "./ui/Title";
import { Paragraph } from "./ui/Paragraph";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M10 2v2"></path>
        <path d="M14 2v2"></path>
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
        <path d="M6 2v2"></path>
      </svg>
    ),
    title: "Preparación artesanal",
    description:
      "Cada taza de café que servimos es una obra maestra. Desde la selección de granos hasta el proceso de preparación, cuidamos cada detalle para ofrecer una experiencia única llena de sabor y tradición.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
        <path d="M12 22V12"></path>
        <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
        <path d="m7.5 4.27 9 5.15"></path>
      </svg>
    ),
    title: "Venta de café exclusivo",
    description:
      "Lleva a casa los mejores granos de café, cuidadosamente seleccionados por nuestros expertos. Nuestro café de origen único está diseñado para los amantes del café que buscan calidad y autenticidad en cada sorbo.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Espacio de coworking",
    description:
      "Un lugar pensado para inspirarte. Nuestro espacio de coworking combina un ambiente cómodo y relajante con la energía del café, siendo perfecto para trabajar, estudiar o colaborar mientras disfrutas de nuestras especialidades.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
        <path d="M2 21h20"></path>
        <path d="M7 8v3"></path>
        <path d="M12 8v3"></path>
        <path d="M17 8v3"></path>
        <path d="M7 4h.01"></path>
        <path d="M12 4h.01"></path>
        <path d="M17 4h.01"></path>
      </svg>
    ),
    title: "Pasteles caseros",
    description:
      "Disfruta de nuestros pasteles, postres y panes recién horneados, elaborados con ingredientes frescos y recetas tradicionales. Cada bocado es un tributo al sabor casero que tanto amas, creando momentos deliciosos.",
  },
];

export const Services = () => {
  return (
    <section className="py-14 md:py-28" id="servicios">
      <div className="container">
        <Title>Nuestros Servicios</Title>
        <Paragraph>
          Descubre los servicios excepcionales que ofrecemos para brindarte una
          experiencia única.
        </Paragraph>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10">
          {services.map((service, serviceIndex) => (
            <li className="flex flex-col gap-4 bg-white shadow-lg rounded-2xl p-5">
              <div className="relative h-16 w-16 mx-auto">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.1 * serviceIndex,
                  }}
                  className="bg-primary-600 p-2 w-14 h-14 rounded-full flex justify-center items-center mx-auto relative z-10"
                >
                  {service.icon}
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2 * serviceIndex,
                  }}
                  className="bg-primary-600/50 inset-0 rounded-full blur-xl absolute"
                >
                  {service.icon}
                </motion.div>
              </div>
              <div>
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.3 * serviceIndex,
                  }}
                  className="text-xl text-primary-700 font-bold text-center overflow-hidden text-nowrap"
                >
                  {service.title}
                </motion.h3>
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileInView={{
                    width: 80,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.3 * serviceIndex,
                  }}
                  className="h-0.5 w-20 bg-primary-500 mx-auto my-6"
                ></motion.div>
                <motion.p
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.3 * serviceIndex,
                  }}
                  className="text-zinc-500 font-medium italic"
                >
                  {service.description}
                </motion.p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
