import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2026 - Todos los derechos reservados
          </p>
          
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
