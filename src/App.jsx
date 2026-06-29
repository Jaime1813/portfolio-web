function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          ¡Bienvenido a mi Portafolio! 🚀
        </h1>
        <p className="text-xl text-gray-600">
          Estoy construyendo mi portafolio con Vite + React + Tailwind CSS
        </p>
        <a 
          href="#" 
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          Ver Proyectos
        </a>
      </div>
    </div>
  )
}

export default App