import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleOnHover,
  staggerContainer,
} from "../../../lib/animations";

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "Web Design",
    description:
      "A modern web application with clean interface and smooth interactions.",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Project Two",
    category: "Branding",
    description: "Complete brand identity design for a tech startup.",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Project Three",
    category: "Development",
    description: "Full-stack application with modern architecture and design.",
    image: "/api/placeholder/600/400",
  },
  {
    id: 4,
    title: "Project Four",
    category: "UI/UX",
    description: "Mobile app interface design with focus on user experience.",
    image: "/api/placeholder/600/400",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Proyectos
          </h2>
          <div className="w-16 h-px bg-neutral-400 mx-auto mb-8" />
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Una colección de proyectos que muestran mi enfoque del diseño y el
            desarrollo.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              {...scaleOnHover}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Project image placeholder */}
                <div className="aspect-[4/3] bg-neutral-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-neutral-600 text-lg">
                      Project Image
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-neutral-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center text-neutral-500 group-hover:text-neutral-900 transition-colors">
                    <span className="text-sm uppercase tracking-wide mr-2">
                      View Project
                    </span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
