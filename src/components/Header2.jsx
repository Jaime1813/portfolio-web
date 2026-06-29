function Header2() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
          <a href="#">MiPortafolio</a>
        </h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition">Sobre Mí</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Proyectos</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header2;