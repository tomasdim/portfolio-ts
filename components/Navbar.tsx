/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import { CloseIcon, IconGithub, LinkedInIcon, MenuIcon } from './icons';
import { useState } from 'react';

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className='fixed w-full h-20 shadow-xl z-20 bg-[#1d1d1d] bg-opacity-70'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='flex items-center justify-center'>
          <img className='h-10' src='/img/logotdlong.png'></img>
        </div>
        <ul className='hidden md:flex'>
          <Link href='/#home'>
            <li className='ml-10 text-white hover:text-teal text-sm  ease-in duration-500 cursor-pointer uppercase '>
              Home
            </li>
          </Link>
          <Link href='/#about'>
            <li className='ml-10 text-white hover:text-teal text-sm  ease-in duration-500 cursor-pointer uppercase  '>
              About
            </li>
          </Link>
          <Link href='/#skills'>
            <li className='ml-10 text-white hover:text-teal text-sm  ease-in duration-500 cursor-pointer uppercase  '>
              Skills
            </li>
          </Link>
          <Link href='/#projects'>
            <li className='ml-10 text-white hover:text-teal text-sm  ease-in duration-500 cursor-pointer uppercase  '>
              Project
            </li>
          </Link>
          <Link href='/#contact'>
            <li className='ml-10 text-white hover:text-teal  ease-in duration-500 cursor-pointer text-sm uppercase  '>
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
                Let&apos;s build something legendary together!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='flex-col uppercase'>
              <Link href='/#home'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                  Project
                </li>
              </Link>
              <Link href='/#contact'>
                <a>
                  <li className='mb-3 text-white py-4 text-sm hover:text-teal hover:text-lg ease-in duration-500 cursor-pointer'>
                    Contact
                  </li>
                </a>
              </Link>
            </ul>
            <div className='absolute bottom-5'>
              <p className='uppercase -tracking-wider text-white'>
                Let&apos;s connect
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
