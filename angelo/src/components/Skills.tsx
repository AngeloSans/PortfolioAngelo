const skills = [
    { name: "Java", icon: "/path/to/java-icon.svg" },
    { name: "PostgreSQL", icon: "/path/to/postgresql-icon.svg" },
    // Adicione todos os seus skills aqui
];

const Skills = () => (
    <section className="my-12 text-center">
        <h2 className="text-3xl font-bold text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center mt-6">
            {skills.map(skill => (
                <div key={skill.name} className="m-4">
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto" />
                    <p className="text-white mt-2">{skill.name}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
