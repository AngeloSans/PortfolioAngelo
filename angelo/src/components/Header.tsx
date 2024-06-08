const Header = () => (
    <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-white">Hey I'm Angelo</h1>
        <h2 className="text-2xl font-bold" style={{color: '#5007C8', marginTop: '2rem', fontSize: '50px'}}>Software Engineer</h2>
        <p className="text-lg text-white mt-4">
            I'm a software engineer from Brazil, who loves to develop new solutions.
        </p>
        <button
           className="inline-block mt-6 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-purple-700" style={{background: '#5007C8', marginTop: '2rem', borderRadius: '50px'}}>
            Download CV
        </button>
    </header>
);

export default Header;
