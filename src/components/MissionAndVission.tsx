import { motion } from "framer-motion";

export const MissionAndVission = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="border-b-2 pb-8"
        >
          <h3 className="text-2xl font-heading text-primary-600">
            Nuestra Misión
          </h3>
          <div className="h-0.5 w-20 bg-primary-500 my-4"></div>
          <p className="text-zinc-500 text-xl">
            Nuestra misión es ofrecer a cada cliente una experiencia excepcional
            a través de cafés de alta calidad, un ambiente acogedor y un
            servicio cercano, creando momentos únicos que inspiren y conecten.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          <h3 className="text-2xl font-heading text-primary-600">
            Nuestra Visión
          </h3>
          <div className="h-0.5 w-20 bg-primary-500 my-4"></div>

          <p className="text-zinc-500 text-xl">
            Queremos ser la cafetería de referencia en nuestra comunidad,
            destacándonos por nuestra dedicación al café de calidad y el
            compromiso con la satisfacción de nuestros clientes, siempre
            innovando y creciendo con ellos.
          </p>
        </motion.div>
      </div>
      <motion.img
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
        src="/about-us.webp"
        alt="Imagen Sobre Nosotros"
        width="600"
        height="320"
        loading="lazy"
        className="w-full rounded-2xl my-auto mx-auto"
      />
    </>
  );
};
