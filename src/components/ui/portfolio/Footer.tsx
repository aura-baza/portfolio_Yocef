export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Yocef Roca. Todos Los Derechos Reservados
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm">
            <a 
              href="#about" 
              className="!text-white hover:text-white transition-colors duration-300 uppercase"
            >
              Sobre mi
            </a>
            <a 
              href="#work" 
              className="!text-white hover:text-white transition-colors duration-300 uppercase"
            >
              Proyectos
            </a>
            <a 
              href="#" 
              className="!text-white hover:text-white transition-colors duration-300 uppercase"
            >
              Inicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}