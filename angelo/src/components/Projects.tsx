import Image from "next/image";

const projects = [
    {
        title: "Sivir Coffe",
        description: "Aplicação de café feita usando .Net",
        technologies: ["C#", "ASP.NET", "SQL"],
        image: "/IconesProjetos/Coffe.svg",
    },
    {
        title: "Retriever",
        description: "Blog sobre Ansiedade",
        technologies: ["TypeScript", "Tailwind", "Next.js", "Sanity.IO"],
        image: "/IconesProjetos/Dog.svg",
    },
    {
        title: "My Finances",
        description: "APi de finanças pessoais",
        technologies: ["Java", "SpringBoot", "SQL"],
        image: "/IconesProjetos/Money.svg",
    },
    {
        title: "XPhone",
        description: "API de Aluguel de SmartPhones",
        technologies: ["C#", "ASP.NET", "SQL", "CQRS", "Docker"],
        image: "/IconesProjetos/Iphone.svg",
        githubLink: "https://github.com/Anjocaido13/XPhone",
    },
    {
        title: "Capital Invest",
        description: "Aplicação de Mercado Financeiro",
        technologies: ["Java", "SpringBoot", "SQL", "HTML/CSS"],
        image: "/IconesProjetos/Invest.svg",
    }
];

const Projects = () => (
    <section className="bg-custom-dark my-12 text-center">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map(project => (
                <div key={project.title} className="rounded-lg p-6 shadow-lg" style={{backgroundColor: '#090018'}}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={200}
                        height={200}
                        className="w-12 h-12 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
                    <p className="text-white mt-2">{project.description}</p>
                    {project.githubLink && (
                        <a href={project.githubLink} className="text-sm text-purple-500 mt-4 inline-block">
                            See Project on GitHub
                        </a>
                    )}
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
