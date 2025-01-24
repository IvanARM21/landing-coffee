import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <form action="" className="max-w-2xl mx-auto mt-10 flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <input
          type="text"
          id="name"
          className="peer block border-b-2 appearance-none border-primary-700 focus:border-primary-600
        py-2.5 w-full px-0 bg-transparent outline-none font-medium
        transition-colors duration-300 text-primary-700 placeholder-transparent"
          placeholder="Tu nombre"
          autoComplete="off"
        />
        <label
          htmlFor="name"
          className="absolute text-zinc-500 duration-300 scale-75
        top-3 left-0 origin-[0] -z-10 -translate-y-6 transform
        peer-placeholder-shown:translate-y-0
        peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-primary-700"
        >
          Tu nombre
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <input
          type="email"
          id="email"
          className="peer block border-b-2 appearance-none border-primary-700 focus:border-primary-600
      py-2.5 w-full px-0 bg-transparent outline-none font-medium
      transition-colors duration-300 text-primary-700 placeholder-transparent"
          placeholder="Tu email"
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className="absolute text-zinc-500 duration-300 scale-75
        top-3 left-0 origin-[0] -z-10 -translate-y-6 transform
        peer-placeholder-shown:translate-y-0
        peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-primary-700"
        >
          Tu email
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <input
          type="text"
          id="phone"
          className="peer block border-b-2 appearance-none border-primary-700 focus:border-primary-600
        py-2.5 w-full px-0 bg-transparent outline-none font-medium
        transition-colors duration-300 text-primary-700 placeholder-transparent"
          placeholder="Tu número"
          autoComplete="off"
        />
        <label
          htmlFor="phone"
          className="absolute text-zinc-500 duration-300 scale-75
        top-3 left-0 origin-[0] -z-10 -translate-y-6 transform
        peer-placeholder-shown:translate-y-0
        peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-primary-700"
        >
          Tu número
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <input
          type="text"
          id="subject"
          placeholder="Tu asunto"
          autoComplete="off"
          className="peer block border-b-2 appearance-none border-primary-700 focus:border-primary-600
        py-2.5 w-full px-0 bg-transparent outline-none font-medium
        transition-colors duration-300 text-primary-700 placeholder-transparent"
        />
        <label
          htmlFor="subject"
          className="absolute text-zinc-500 duration-300 scale-75
        top-3 left-0 origin-[0] -z-10 -translate-y-6 transform
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6
        peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-primary-700"
        >
          Asunto
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <textarea
          name="message"
          id="message"
          placeholder="Tu mensaje"
          className="peer block border-b-2 appearance-none border-primary-700 focus:border-primary-600
        py-2.5 w-full px-0 bg-transparent outline-none font-medium
        transition-colors duration-300 text-primary-700 placeholder-transparent"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute text-zinc-500 duration-300 scale-75
        top-3 left-0 origin-[0] -z-10 -translate-y-6 transform
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6
        peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-primary-700"
        >
          Tu mensaje
        </label>
      </motion.div>

      <motion.input
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        type="submit"
        className="mt-5 py-2.5 px-5 bg-primary-600 text-xl text-white font-medium hover:bg-transparent hover:text-primary-600 border-2 border-primary-600 transition-all duration-300 cursor-pointer"
        value="Enviar mensaje"
      />
    </form>
  );
};
