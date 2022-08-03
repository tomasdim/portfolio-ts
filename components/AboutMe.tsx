import React from 'react';
import { RightArrow } from './icons';

const skills = [
  'NextJS',
  'TypeScript',
  'React',
  'GraphQL',
  'Node.js',
  'Apollo',
];

const AboutMe = () => {
  return (
    <div className='w-full p-2 pb-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col h-full'>
        <div className='flex text-xl tracking-widest uppercase text-white'>
          <p className='text-teal mr-2'>00.</p>About Me
        </div>
      </div>
      <div className='my-4 max-w-[1240px] grid grid-cols-5'>
        <div className='ml-[200px] col-span-3 items-center justify-center  text-white'>
          <div className='m-4 text-lg'>
            Hello! My name is Tomas and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to create my own blog on blogspot. Turns out that taught me
            some HTML & CSS!
          </div>
          <div className=' text-lg m-4'>
            Since then I've shared the passion for sports and literature with
            Web Development. My main focus these days is building accessible,
            inclusive products and digital experiences.
          </div>
          <div className=' text-lg m-4'>
            Here are a few technologies I&apos;ve been working with recently:
          </div>

          <div className='grid grid-cols-2 max-w-md m-4'>
            {skills.map((skill) => (
              <div className='flex items-center'>
                <RightArrow className='h-3 w-3 text-teal mr-2' />
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className='my-4 col-span-2'></div>
      </div>
    </div>
  );
};

export default AboutMe;
