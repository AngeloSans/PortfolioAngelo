"use client"; // Certifique-se de que esta linha esteja correta

import { useEffect, useState } from 'react';

const Header = () => {
    const [text, setText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const targetText = 'SSoftware Engineer'; 
    const typingSpeed = 200;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => {
                if (index < targetText.length) {
                    return prev + targetText[index];
                }
                
                index = 0;
                setText('');
                return prev;
            });
            index += 1;
            if (index > targetText.length) {
                index = 0; 
                setText(''); 
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <header className="bg-custom-dark text-center my-1 px-4 sm:px-6 lg:px-8 min-h-screen h-[70vh]">
            <div className="flex justify-center">
            </div>
            <h1 className="text-4xl font-bold text-white mt-40 sm:mt-40 lg:mt-40 sm:text-5xl lg:text-6xl" style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '90%' }}>
                Hey I&apos;m Angelo
            </h1>
            <h2 className="text-5xl font-bold mt-8 sm:mt-10 lg:mt-12 sm:text-9xl lg:text-5xl" style={{ color: '#5007C8', fontWeight: 'bolder' }}>
                <span className="typing">{text}</span>
            </h2>
            <p className="text-lg text-white mt-2 sm:mt-4 lg:mt-6 sm:text-xl lg:text-2xl max-w-2xl mx-auto">
                I&apos;m a software engineer from Brazil, who loves to develop new solutions.
            </p>
            <a
                href="/AngeloSantosCurriculo.pdf"
                className={`inline-block mt-6 px-6 py-3 font-bold rounded-full shadow-lg sm:mt-8 lg:mt-10 ${isClicked ? 'bg-white text-black shadow-glow' : 'bg-[#5007C8] text-white shadow-glow'} hover:bg-white hover:text-black hover:border-purple transition-all duration-300`}
                style={{borderRadius: '50px', textDecoration: 'none'}}
                onClick={handleClick}
                download
            >
                Download CV
            </a>
        </header>
    );
};

export default Header;
