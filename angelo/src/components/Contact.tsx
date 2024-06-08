const Contact = () => (
    <section className="my-12 text-center">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <p className="text-lg text-white mt-4">
            I'm currently looking for a job offer as a software engineer.
        </p>
        <a href="mailto:Gabrielange883@gmail.com" className="text-purple-400 text-lg mt-2">Gabrielange883@gmail.com</a>
        <div className="flex justify-center mt-6 space-x-4">
            <a href="#" className="text-white"><img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#" className="text-white"><img src="/path/to/github-icon.svg" alt="GitHub" className="w-6 h-6" /></a>
        </div>
    </section>
);

export default Contact;
