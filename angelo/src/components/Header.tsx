import Image from 'next/image';


const Header = () => (
    <header className="text-center my-1 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex justify-center">
            <Image src="/buraconegro.png" alt="Buraco Negro" width={700} height={700} className="w-full max-w-md h-auto" />
        </div>
        <h1 className="text-4xl font-bold text-white mt-4 sm:mt-6 lg:mt-8 sm:text-5xl lg:text-6xl" style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '90%' }}>
            Hey I&apos;m Angelo
        </h1>
        <h2 className="text-5xl font-bold mt-4 sm:mt-6 lg:mt-8 sm:text-9xl lg:text-5xl" style={{ color: '#5007C8', fontWeight: 'bolder' }}>
            Software Engineer
        </h2>
        <p className="text-lg text-white mt-2 sm:mt-4 lg:mt-6 sm:text-xl lg:text-2xl max-w-2xl mx-auto">
            I&apos;m a software engineer from Brazil, who loves to develop new solutions.
        </p>
        <button
            className="inline-block mt-6 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-purple-700 sm:mt-8 lg:mt-10" style={{ background: '#5007C8', borderRadius: '50px' }}>
            Download CV
        </button>
    </header>
);

export default Header;
