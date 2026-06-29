import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bjacklender726@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setEnviado(true);
        setFormData({ nombre: '', email: '', mensaje: '' });
        setTimeout(() => setEnviado(false), 5000);
      } else {
        alert('Error al enviar. Intenta de nuevo.');
      }
    } catch (error) {
      alert('Error de conexión. Intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        
        <div className="max-w-2xl mx-auto">
          {enviado ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
              ¡Mensaje enviado con éxito! Te responderé pronto. 📧
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <button
                type="submit"
                disabled={cargando}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cargando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                📧 Recibirás una copia en tu email
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
export default Contact;
