import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { fadeInUp } from "../../../lib/animations";
import SocialMediaIcons from "./SocialMediaIcons";
import ContactIcons from "./ContactIcons";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50 ">
      <div className="max-w-4xl mx-auto ">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={{...fadeInUp.transition,duration: 0.6, ease: "easeOut"}}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Ponte en contacto
          </h2>
          {/* <div className="w-16 h-px bg-neutral-400 mx-auto mb-8 " /> */}
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
           Siempre me interesan nuevas oportunidades y colaboraciones. Hablemos sobre cómo podemos trabajar juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 p-6 rounded-lg  shadow-xl/20 border">
          {/* Contact form */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={{ ...fadeInUp}}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-neutral-300 focus:border-neutral-500 text-lg py-6"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-neutral-300 focus:border-neutral-500 text-lg py-6"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-neutral-300 focus:border-neutral-500 text-lg resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full  !bg-neutral-900 text-white py-6 text-lg font-light tracking-wide "
                variant={"outline"}
              >
                Enviar
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={{ ...fadeInUp }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div >
              <h3 className="text-xl font-medium text-neutral-900 mb-6">Informacion De Contacto</h3>
              <div className="space-y-4 text-neutral-600 ">
                {/*Contain Info Iconos */}
               <ContactIcons/>
              </div>
            </div>

            <div className="flex items-center gap-2 ">
              <h3 className="text-xl font-medium text-neutral-900">Sigueme</h3>
              {/* Social Media Icons */}
              <SocialMediaIcons/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}