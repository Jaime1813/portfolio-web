import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hola, soy <span className="text-yellow-300">Jaime Rodríguez</span>
        </h1>
        <p className="text-xl mb-6">Desarrollador Full Stack</p>
        <div className="flex justify-center gap-4 text-3xl">
          <a href="#" className="hover:text-yellow-300 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaTwitter />
          </a>
        </div>
        <a 
          href="#projects" 
          className="inline-block mt-8 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Ver Proyectos
        </a>
      </div>
    </section>
  );
}

export default Hero;