import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-gradient-to-t from-indigo-200'>
      <Navbar />
    </div>
  );
};

export default Home;
