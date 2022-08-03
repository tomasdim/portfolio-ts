import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className='max-w-screen max-h-screen'>
      <Navbar />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
