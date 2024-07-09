import Image from "next/image";

const skills = [
    { name: "Java", icon: "/icones/java.svg" },
    { name: "SpringBoot", icon: "/icones/springboot.svg" },
    { name: "PostgreSQL", icon: "/icones/postgre.svg" },
    { name: "C#", icon: "/icones/csharp.svg" },
    { name: ".Net", icon: "/icones/net.svg" },
    { name: "TypeScript", icon: "/icones/typescript.svg" },
    { name: "Next.js", icon: "/icones/nextjs.svg" },
    { name: "Git", icon: "/icones/git.svg" },
    { name: "AWS", icon: "/icones/aws.svg" },
    { name: "Python", icon: "/icones/python.svg" },
    { name: "Tailwind", icon: "/icones/tailwind.svg" },
    { name: "Kubernets", icon: "/icones/kubernetes.svg" },

];

const Skills = () => (
    <section className="my-12 text-center">
        <h2 className="text-3xl font-bold text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center mt-6">
            {skills.map(skill => (
                <div key={skill.name} className="m-10">
                    <Image src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto" />
                    <p className="text-white mt-2">{skill.name}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
