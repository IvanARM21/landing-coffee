import type { InferEntrySchema } from "astro:content";
import { formattCurrency } from "../utils";
import { motion } from "framer-motion";
import { Image } from "astro:assets";

type DrinkSchema = InferEntrySchema<"drink">;

interface Props {
  drinks: DrinkSchema[];
}

export const MenuList = ({ drinks }: Props) => {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-y-20 gap-x-10">
      {drinks.map((drink, drinkIndex) => (
        <motion.li
          key={drink.image}
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
            ease: "easeInOut",
            duration: 0.3,
          }}
          className="flex flex-col gap-4 bg-primary-600/50 rounded-2xl shadow-lg group transition duration-300"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -24,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.3,
              delay: 0.1 * drinkIndex,
            }}
          >
            <motion.img
              alt={`Imagen bebida ${drink.title}`}
              src={drink.image}
              loading="lazy"
              width={208}
              height={208}
              className="w-40 md:w-52 mx-auto aspect-square -mt-20 md:scale-110 group-hover:scale-125 group-hover:-translate-y-10 transition duration-300"
            />
          </motion.div>

          <div className="h-4 w-24 mx-auto bg-transparent rounded-full group-hover:bg-black/70 transition-all duration-300 blur-md group-hover:blur-lg " />

          <div className="p-5 bg-white group-hover:bg-zinc-100 transition duration-300 h-full flex flex-col justify-between rounded-b-xl">
            <motion.h3
              initial={{
                opacity: 0,
                y: -24,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1 * drinkIndex,
              }}
              className="text-2xl font-semibold text-primary-700"
            >
              {drink.title}
            </motion.h3>
            <motion.div
              initial={{
                opacity: 0,
                width: 0,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                width: 96,
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.1 * drinkIndex,
              }}
              className="h-0.5 w-20 bg-primary-600 my-4"
            />
            <motion.p
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.2 * drinkIndex,
              }}
              className="text-zinc-600 text-sm italic"
            >
              {drink.description}
            </motion.p>
            <span className="text-3xl font-bold text-primary-600 text-right">
              {formattCurrency(drink.price)}
            </span>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};
