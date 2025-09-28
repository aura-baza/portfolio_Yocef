import { motion } from "framer-motion";
import { fadeInUp, slideInLeft } from "../../../lib/animations";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white w-screen ">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait placeholder */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            transition={slideInLeft}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                <span className="text-neutral-500 text-lg">Portrait Image</span>
              </div>
            </div>
          </motion.div>

          {/* About content */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
                ¿Quien soy?
              </h2>
              <div className="w-16 h-px bg-neutral-400 mb-8" />
            </div>

            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p className="text-lg">
                Productor multimedia especializado en diseño gráfico, enfocado en la creación de contenido visual moderno y de alto impacto. Domino herramientas como Photoshop, Illustrator, After Effects y Premiere, lo que me permite desarrollar piezas claras, creativas e innovadoras. Mi pasión por el diseño me motiva a aprender continuamente para aportar valor en cada proyecto.
              </p>
              
              <p className="text-lg">
                Con experiencia tanto en diseño visual como en implementación técnica, aporto una perspectiva única a cada proyecto. Creo en el poder de un diseño limpio y reflexivo para comunicar ideas complejas de forma sencilla y eficaz.
              </p>

              <p className="text-lg">
              Cuando no estoy diseñando, puedes encontrarme explorando nuevos medios creativos, leyendo sobre tecnologías emergentes o disfrutando del aire libre.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Design', 'Development', 'Strategy', 'Branding', 'UI/UX', 'Frontend'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}