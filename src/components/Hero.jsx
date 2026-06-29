function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Jaime</span>
        </h1>
        <p className="text-xl text-gray-600">Desarrollador Full Stack</p>
        <a href="#projects" className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform">
          Ver Proyectos
        </a>
      </div>
    </section>
  );
}
export default Hero;
