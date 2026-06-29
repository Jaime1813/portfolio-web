import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <a href="#">MiPortafolio</a>
        </h1>
        
        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition">Sobre Mí</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Proyectos</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contacto</a></li>
        </ul>

        {/* Botón móvil */}
        <button 
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Sobre Mí</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Proyectos</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contacto</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Header3;