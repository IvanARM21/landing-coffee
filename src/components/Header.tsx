import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header
        className="w-full h-20 md:h-28 fixed top-0 z-40 py-4 md:py-6"
        id="header-nav"
      >
        <div className="container flex items-center justify-between">
          <a href="#">
            <motion.img
              initial={{
                y: -10,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              src="/logo.svg"
              alt=""
              className="w-12 md:w-16 h-auto"
            />
          </a>
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="hidden md:flex gap-5"
          >
            <a
              href="#servicios"
              className="text-white hover:text-primary-600 transition-colors duration-300 text-lg font-medium"
            >
              Servicios
            </a>
            <a
              href="#menu"
              className="text-white hover:text-primary-600 transition-colors duration-300 text-lg font-medium"
            >
              Menú
            </a>
            <a
              href="#testimonios"
              className="text-white hover:text-primary-600 transition-colors duration-300 text-lg font-medium"
            >
              Testimonios
            </a>
            <a
              href="#galeria"
              className="text-white hover:text-primary-600 transition-colors duration-300 text-lg font-medium"
            >
              Galería
            </a>
            <a
              href="#sobre-nosotros"
              className="text-white hover:text-primary-600 transition-colors duration-300 text-lg font-medium"
            >
              Sobre nosotros
            </a>
            <a
              href="#contacto"
              className="text-white hover:text-primary-600 transition-colors duration-300 text-lg font-medium"
            >
              Contacto
            </a>
          </motion.div>

          <div
            className="relative h-10 w-10 cursor-pointer md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={twMerge(
                  "-translate-y-1 w-6 h-0.5 bg-white  transition-all duration-500",
                  showMenu && "translate-y-0 rotate-45"
                )}
              ></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={twMerge(
                  "translate-y-1 w-6 h-0.5 bg-white transition-all duration-500",
                  showMenu && "translate-y-0 -rotate-45"
                )}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={twMerge(
          "bg-zinc-900  flex flex-col justify-between fixed h-screen w-full z-30 -translate-y-full transition-all duration-500",
          showMenu && "translate-y-0"
        )}
      >
        <div className="h-20"></div>
        <nav className=" flex flex-col justify-center items-center gap-8 p-5">
          <a
            href="#servicios"
            className="text-white hover:text-primary-600 transition-colors duration-300 font-semibold text-xl sm:text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Servicios
          </a>
          <a
            href="#menu"
            className="text-white hover:text-primary-600 transition-colors duration-300 font-semibold text-xl sm:text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Menú
          </a>
          <a
            href="#testimonios"
            className="text-white hover:text-primary-600 transition-colors duration-300 font-semibold text-xl sm:text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Testimonios
          </a>
          <a
            href="#galeria"
            className="text-white hover:text-primary-600 transition-colors duration-300 font-semibold text-xl sm:text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Galería
          </a>
          <a
            href="#sobre-nosotros"
            className="text-white hover:text-primary-600 transition-colors duration-300 font-semibold text-xl sm:text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Sobre nosotros
          </a>
          <a
            href="#contacto"
            className="text-white hover:text-primary-600 transition-colors duration-300 font-semibold text-xl sm:text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Contacto
          </a>
        </nav>

        <div className="flex justify-center gap-10 p-5">
          <a href="" className="text-zinc-300 text-xl font-semibold hover:">
            Facebook
          </a>
          <a href="" className="text-zinc-300 text-xl font-semibold hover:">
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};
