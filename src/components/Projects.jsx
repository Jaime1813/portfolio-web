function Projects() {
  const proyectos = [
    {
      titulo: "Proyecto 1",
      descripcion: "Descripción del proyecto 1",
      tecnologias: ["React", "Tailwind", "Node.js"]
    },
    {
      titulo: "Proyecto 2",
      descripcion: "Descripción del proyecto 2",
      tecnologias: ["Vue.js", "Express", "MongoDB"]
    },
    {
      titulo: "Proyecto 3",
      descripcion: "Descripción del proyecto 3",
      tecnologias: ["Angular", "Spring Boot", "MySQL"]
    },
    {
      titulo: "Proyecto 4",
      descripcion: "Descripción del proyecto 4",
      tecnologias: ["Angular", "Spring Boot", "MySQL"]
    },
    {
      titulo: "Proyecto 5",
      descripcion: "Descripción del proyecto 5",
      tecnologias: ["Angular", "Spring Boot", "MySQL"]
    },
    {
      titulo: "Proyecto 6",
      descripcion: "Descripción del proyecto 6",
      tecnologias: ["Angular", "Spring Boot", "MySQL"]
    }

  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h3>
              <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
