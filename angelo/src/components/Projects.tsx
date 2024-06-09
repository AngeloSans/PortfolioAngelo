const projects = [
    {
        title: "Project Example 1",
        description: "I made this project to for example",
        technologies: ["C#", "ASP.NET", "SQL"],
        image: "/path/to/project-image-1.jpg"
    },
    // Adicione mais projetos aqui
];

const Projects = () => (
    <section className="my-12 text-center">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map(project => (
                <div key={project.title} className=" rounded-lg p-6 shadow-lg" style={{backgroundColor: '#090018'}}>
                    <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-lg" />
                    <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
                    <p className="text-white mt-2">{project.description}</p>
                    <div className="flex flex-wrap justify-center mt-4">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-purple-600 text-white text-sm rounded-full px-4 py-1 m-1">
                {tech}
              </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
