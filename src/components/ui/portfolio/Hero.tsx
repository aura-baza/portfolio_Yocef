import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../../../lib/animations";
import ImageSlider from "./ImageSlider";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-200 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-100 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          // transition={{ ...fadeIn.transition, delay: 0.2, ease: "easeOut" }}
          transition={{ ...fadeIn.transition, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-neutral-900 mb-6">
            Yocef Steven Roca
          </h1>
          <div className="w-24 h-px bg-neutral-400 mx-auto mb-8" />
        </motion.div>

        <motion.p
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-neutral-600 font-light tracking-wide"
        >
          Diseñador Creativo
        </motion.p>

        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp}}
          className="mt-12"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
          >
            <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {/* Image Slider */}
        <motion.div variants={fadeInUp}>
          <ImageSlider />
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}