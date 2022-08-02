import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='max-w-screen max-h-screen'>
      <Navbar />
      <Main />
      <Skills />
    </div>
  );
};

export default Home;
