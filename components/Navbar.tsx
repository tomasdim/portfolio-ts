/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import { CloseIcon, IconGithub, LinkedInIcon, MenuIcon } from './icons';
import { useState } from 'react';

const navigation = [
  { name: 'Homepage', href: '#', current: true },
  { name: 'About Me', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Works', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className='fixed w-full h-20 shadow-xl z-20'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='flex items-center justify-center'>
          <img className='h-10' src='/img/logotdlong.png'></img>
        </div>
        <ul className='hidden md:flex'>
          <Link href='/'>
            <li className='ml-10 text-teal text-sm uppercase hover:border-b '>
              Home
            </li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-teal text-sm uppercase hover:border-b '>
              About
            </li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-teal text-sm uppercase hover:border-b '>
              Skills
            </li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-teal text-sm uppercase hover:border-b '>
              Project
            </li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-teal text-sm uppercase hover:border-b '>
              Contact
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden'>
          <MenuIcon />
        </div>
      </div>
      {/* //SideMenu */}
      <div
        className={
          openNav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        <div
          onClick={handleNav}
          className={
            openNav
              ? 'fixed left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1d1d1d] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <img
                className='w-[150px] mr-5  sm:h-10 sm:w-auto'
                src='/img/logotdlong.png'
              ></img>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-pink-600 p-3 cursor-pointer'
              >
                <CloseIcon />
              </div>
            </div>
            <div className='my-4'>
              <p className='text-white '>
                Let's build something legendary together!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='flex-col uppercase'>
              <Link href='/'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link href='/'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  About
                </li>
              </Link>
              <Link href='/'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  Skills
                </li>
              </Link>
              <Link href='/'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  Project
                </li>
              </Link>
              <Link href='/'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='absolute bottom-10'>
              <p className='uppercase -tracking-wider text-white'>
                Let's connect
              </p>
              <div className='flex items-center gap-10 my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-teal p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <LinkedInIcon />
                </div>
                <div className='rounded-full shadow-lg shadow-teal p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <IconGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}