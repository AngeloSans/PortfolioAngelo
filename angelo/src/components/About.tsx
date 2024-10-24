import Image from "next/image";

const About = () => (
    <section className="bg-custom-dark w-full min-h-1.5 my-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="lg:flex-2">
            <h2 className="text-3xl font-bold text-white sm:text-2xl lg:text-3xl">About</h2>
            <p className="text-lg text-white mt-4 mx-auto max-w-2xl sm:text-xl lg:text-2xl">
                Hi, my name is Angelo, I&apos;m based in Brazil.
                I&apos;ve been learning software development since 2022.
                I&apos;ve been developing some skills and earning some recognition, for example,
                I ranked 20th in the Banco Pan bootcamp.
                I enjoy developing applications using <span className="text-[#5007C8] font-bold">C#, Java, and TypeScript</span>.
            </p>
        </div>
        <div className="mt-6">
            <Image
                src="/Angeloprofile.png"
                alt="Angelo"
                width={200}
                height={200}
                className="rounded-full mt-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover"
            />
        </div>
    </section>
);

export default About;
