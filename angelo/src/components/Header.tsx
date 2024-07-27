import Image from 'next/image';

const Header = () => (
    <header className="bg-custom-dark text-center my-1 px-4 sm:px-6 lg:px-8 min-h-screen h-[70vh]">
        <div className="flex justify-center">
        </div>
        <h1 className="text-4xl font-bold text-white mt-40 sm:mt-40 lg:mt-40 sm:text-5xl lg:text-6xl" style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '90%' }}>
            Hey I&apos;m Angelo
        </h1>
        <h2 className="text-5xl font-bold mt-8 sm:mt-10 lg:mt-12 sm:text-9xl lg:text-5xl" style={{ color: '#5007C8', fontWeight: 'bolder' }}>
            Software Engineer
        </h2>
        <p className="text-lg text-white mt-2 sm:mt-4 lg:mt-6 sm:text-xl lg:text-2xl max-w-2xl mx-auto">
            I&apos;m a software engineer from Brazil, who loves to develop new solutions.
        </p>
        <a href="/AngeloSantosCurriculo.pdf"
            className="inline-block mt-6 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-purple-700 sm:mt-8 lg:mt-10"
            style={{ background: '#5007C8', borderRadius: '50px' }}
           download
        >
            Download CV
        </a>
    </header>
);

export default Header;
