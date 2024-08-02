import Image from "next/image";

const Contact = () => (
    <section className="my-12 text-center h-96 flex flex-col justify-end" style={{ backgroundColor: '#04000E' }}>
        <h2 className="text-3xl font-bold text-white mt-32">Contact</h2>
        <p className="text-lg text-white mt-6">
            I&apos;m currently looking for a job offer as a software engineer.
        </p>
        <div className="mt-auto mb-8">
            <a href="mailto:Gabrielange883@gmail.com" className="text-lg mt-8 text-purple-700 font-bold">Gabrielange883@gmail.com</a>
            <div className="flex justify-center mt-6 space-x-4">
                <a href="https://www.linkedin.com" className="text-white transform transition-transform hover:translate-y-[-5px]">
                    <Image src="/IconesSocialMedias/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                </a>
                <a href="https://github.com" className="text-white transform transition-transform hover:translate-y-[-5px]">
                    <Image src="/IconesSocialMedias/github.svg" alt="GitHub" width={30} height={30} />
                </a>
                <a href="https://mail.google.com" className="text-white transform transition-transform hover:translate-y-[-5px]">
                    <Image src="/IconesSocialMedias/gmail.svg" alt="Gmail" width={30} height={30} />
                </a>
            </div>
        </div>
    </section>
);

export default Contact;
