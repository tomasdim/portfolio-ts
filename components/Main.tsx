import React from 'react';
import { IconGithub, LinkedInIcon } from './icons';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='flex text-6xl text-center content-center justify-center'>
            <p className='text-white'>Hi</p>
            <div className='px-1'></div>
            <p className='text-teal jello-vertical'>I</p>
            <p className='text-teal jello-vertical'>&apos;</p>
            <p className='text-teal jello-vertical'>m </p>
            <div className='px-1'></div>
            <p className='text-teal jello-vertical'>T</p>
            <p className='text-teal jello-vertical'>o</p>
            <p className='text-teal jello-vertical'>m</p>
            <p className='text-teal jello-vertical'>a</p>
            <p className='text-teal jello-vertical'>s</p>
            <p className='text-teal jello-vertical'>,</p>
          </h1>
          <h1 className='flex text-white text-4xl text-center content-center justify-center'>
            Web Developer
          </h1>
          <div className='max-w-2xl py-4'>
            <p className='text-md text-white'>
              I&apos;m a Web Developer located in Argentina. I have a serious
              passion for creating intuitive, dynamic and enjoyable user
              experiences. Well organised person, problem solver, logic thinker.
              Interested in the whole Front adn Back End spectrum.
            </p>
          </div>
          <p className='uppercase text-sm tracking-widest text-teal'>
            Let&apos;s make something special
          </p>
          <div className='flex items-center lg:mt-5 justify-between max-w-xs md:max-w-sm  m-auto py-4'>
            <div className='rounded-full shadow shadow-pink-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <LinkedInIcon />
            </div>
            <div className='rounded-full shadow shadow-pink-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <IconGithub className='text-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
