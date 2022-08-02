import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen'>
      <div className=''>
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
