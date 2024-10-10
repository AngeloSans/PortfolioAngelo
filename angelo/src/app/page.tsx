import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WorkExperience from '@/components/WorkExperience';
import React from "react";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen ">
            <Head>
                <title>Angelo Portfolio</title>
                <meta name="description" content="Angelo's Portfolio"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <About/>
            <WorkExperience/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
    );
}
