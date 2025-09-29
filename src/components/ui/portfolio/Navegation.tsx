import { motion } from "framer-motion";
import  { fadeIn } from "../../../lib/animations";

export default function Navigation() {
  return (
    <motion.nav
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={{ ...fadeIn.transition, delay: 0.1,ease: "easeOut"}}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a 
            href="#" 
            className="text-lg font-medium !text-neutral-900 hover:text-neutral-600 transition-colors duration-300"
          >
            Logo Portfolio
          </a>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a 
              href="#about" 
              className="text-sm uppercase tracking-wide !text-neutral-900 hover:text-neutral-900 transition-colors duration-300"
            >
              Sobre mi
            </a>
            <a 
              href="#work" 
              className="text-sm uppercase tracking-wide !text-neutral-900 hover:text-neutral-900 transition-colors duration-300"
            >
              trabajos
            </a>
            <a 
              href="#contact" 
              className="text-sm uppercase tracking-wide !text-neutral-900 hover:text-neutral-900 transition-colors duration-300"
            >
              Contactame
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}