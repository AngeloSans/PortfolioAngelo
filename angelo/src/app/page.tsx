import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import React from "react";

export default function Home() {
    return (
        <div className="bg-custom-dark max-h-screen">
            <Head>
                <title>Angelo Portfolio</title>
                <meta name="description" content="Angelo's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/buraconegro.png')" }}>
                <Header />
            </div>

            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
