import React from 'react';
import { RightArrow } from './icons';
import { useRef, useEffect, useState } from 'react';

const skills = [
  'NextJS',
  'TypeScript',
  'React',
  'GraphQL',
  'Node.js',
  'Apollo',
];

const AboutMe = () => {
  //Lazy Loading
  const aboutRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [aboutIsVisible, setAboutIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('animateMain', entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
        const entry = entries[0];
        setAboutIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-300px',
      }
    );
    observer.observe(aboutRef.current);
  }, []);

  return (
    <div ref={aboutRef} id='about' className='opacity-0 w-full p-2 pb-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col h-full'>
        <div className='flex text-xl tracking-widest uppercase text-white md:ml-[170px]'>
          <p className='text-teal mr-2'>01.</p>About Me
        </div>
      </div>
      <div className='my-4 max-w-[1240px] grid-cols-1 grid md:grid-cols-5'>
        <div className='md:ml-[200px] col-span-1 md:col-span-3 items-center justify-center  text-white'>
          <div className='m-4 text-lg'>
            Hello! My name is Tomas and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to create my own blog on blogspot. Turns out that taught me
            some HTML & CSS!
          </div>
          <div className=' text-lg m-4'>
            Since then I&apos;ve shared the passion for sports and literature
            with Web Development. My main focus these days is building
            accessible, inclusive products and digital experiences.
          </div>
          <div className=' text-lg m-4'>
            Here are a few technologies I&apos;ve been working with recently:
          </div>

          <div className='grid grid-cols-2 max-w-md m-4'>
            {skills.map((skill) => (
              <div key={skill} className='flex items-center'>
                <RightArrow className='h-3 w-3 text-teal mr-2' />
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className='my-4 md:col-span-2 flex justify-center items-center md:mr-5 md:mb-52'>
          <div className='relative w-72'>
            <img className='rounded block w-full' src='/img/cv.jpg'></img>
            <div className=' rounded absolute top-0 left-0 w-full h-full bg-teal bg-opacity-30 hover:bg-opacity-0 ease-in duration-300'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
