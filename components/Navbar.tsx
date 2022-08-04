/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import { CloseIcon, IconGithub, LinkedInIcon, MenuIcon } from './icons';
import { useState } from 'react';

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setHideNav(false);
    } else {
      setHideNav(true);
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div
      className={
        hideNav
          ? `-top-[100px] ease-in duration-500 fixed w-full h-20 shadow-xl z-20 bg-[#1d1d1d] bg-opacity-70`
          : `ease-in duration-500 top-0 fixed w-full h-20 shadow-xl z-20 bg-[#1d1d1d] bg-opacity-70`
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='flex items-center justify-center'>
          <img className='h-10' src='/img/logotduni.png'></img>
        </div>
        <ul className='hidden md:flex mr-5'>
          <Link href='/#home'>
            <div className='flex ml-10 cursor-pointer'>
              <p className='text-teal text-sm '>00.</p>
              <div className='mx-1'></div>
              <li className=' text-white hover:text-teal text-sm  ease-in duration-500  uppercase '>
                Home
              </li>
            </div>
          </Link>
          <Link href='/#about'>
            <div className='flex ml-10 cursor-pointer'>
              <p className='text-teal text-sm '>01.</p>
              <div className='mx-1'></div>
              <li className=' text-white hover:text-teal text-sm  ease-in duration-500  uppercase '>
                About
              </li>
            </div>
          </Link>
          <Link href='/#skills'>
            <div className='flex ml-10 cursor-pointer'>
              <p className='text-teal text-sm '>02.</p>
              <div className='mx-1'></div>
              <li className=' text-white hover:text-teal text-sm  ease-in duration-500  uppercase '>
                Skills
              </li>
            </div>
          </Link>
          <Link href='/#projects'>
            <div className='flex ml-10 cursor-pointer'>
              <p className='text-teal text-sm '>03.</p>
              <div className='mx-1'></div>
              <li className=' text-white hover:text-teal text-sm  ease-in duration-500  uppercase '>
                Projects
              </li>
            </div>
          </Link>
          <Link href='/#contact'>
            <div className='flex ml-10 cursor-pointer'>
              <p className='text-teal text-sm '>04.</p>
              <div className='mx-1'></div>
              <li className=' text-white hover:text-teal text-sm  ease-in duration-500  uppercase '>
                Contact
              </li>
            </div>
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
                src='/img/logotduni.png'
              ></img>
              <div
                onClick={handleNav}
                className='rounded-full shadow shadow-pink-600 p-3 cursor-pointer'
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
                <div className='rounded-full shadow shadow-teal p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <LinkedInIcon className='text-white h-10 w-10' />
                </div>
                <div className='rounded-full shadow shadow-teal p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <IconGithub className='text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
