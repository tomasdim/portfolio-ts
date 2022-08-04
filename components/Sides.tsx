import Link from 'next/link';
import React from 'react';
import { IconGithub, LinkedInIcon } from './icons';

const Sides = () => {
  return (
    <>
      <div className='hidden md:block fixed transform rotate-0 text-teal left-10 bottom-0'>
        <ul>
          <Link href='https://www.github.com/tomasdim'>
            <a target='_blank' rel='noopener noreferrer'>
              <li className='items-center flex hover:-translate-y-1 hover:text-pink-500 ease-in duration-100 justify-center text-teal'>
                <IconGithub />
              </li>
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/tomasdim'>
            <a target='_blank' rel='noopener noreferrer'>
              <li className='items-center flex hover:-translate-y-1 hover:text-pink-500 ease-in duration-100 justify-center text-teal'>
                <LinkedInIcon />
              </li>
            </a>
          </Link>
          <li className='block w-[1px] h-[90px] mx-auto my-0 bg-teal'></li>
        </ul>
      </div>
      <div className='hidden md:block fixed  text-teal -right-10 bottom-0'>
        <ul>
          <Link href='mailto:tomasdim1996@gmail.com'>
            <a>
              <li className='transform rotate-90 hover:-translate-y-1 ease-in duration-100 hover:text-pink-500 flex mb-[100px]'>
                tomasdim1996@gmail.com
              </li>
            </a>
          </Link>
          <li className='block w-[1px] h-[90px] mx-auto my-0 bg-teal'></li>
        </ul>
      </div>
    </>
  );
};

export default Sides;
