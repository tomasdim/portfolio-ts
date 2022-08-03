import Link from 'next/link';
import React from 'react';
import { IconGithub, OpenTab } from './icons';

const ProjectsInfo = [
  {
    id: 1,
    title: 'Budget Manager',
    description: `You can create your own financial operations and store them in your account to keep track of your finances. Login with Github, Google or Facebook to do so.`,
    tags: ['NextJS', 'Tailwind', 'NodeJS', 'MongoDB', 'TypeScript'],
    img: 'https://imgur.com/VNsojy9.png',
    translate: '-translate-y-3/4',
  },
  {
    id: 2,
    title: 'My Old Portfolio',
    description: `My past portfolio made on React with pure CSS. There I
hosted all my projects until that moment. Utilized
Material UI for some material components.`,
    tags: ['React', 'CSS', 'Material UI'],
    img: 'https://imgur.com/XEYFnrB.png',
    translate: '-translate-y-3/4',
  },
];

const Projects = () => {
  return (
    <div className='w-full px-4 sm:px-40 pb-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col h-full'>
        <div className='text-xl flex tracking-widest uppercase text-white'>
          <p className='text-teal mr-2 mb-5'>02.</p> Projects
        </div>

        {ProjectsInfo.map((project) => {
          if (project.id % 2 == 0)
            return (
              <div className='grid grid-cols-1 lg:grid-cols-2 sm:my-20'>
                <div className='flex my-8 flex-col justify-around sm:ml-10 text-left'>
                  <h1 className='text-teal text-2xl my-2'>{project.title}</h1>
                  <div className='rounded shadow-md  bg-gray-300 p-5'>
                    <h2 className='text-left text-lg tracking-wide'>
                      {project.description}
                    </h2>
                  </div>
                  <div className='flex text-left text-gray-300 my-2'>
                    {project.tags.map((tag) => (
                      <h1 key={tag} className='px-2 text-pink-600 '>
                        {tag}
                      </h1>
                    ))}
                  </div>
                  <div className='flex   text-white'>
                    <div className='mx-2'>
                      <Link href='https://www.github.com'>
                        <a target='_blank' rel='noopener noreferrer'>
                          <IconGithub className='hover:text-teal h-8 w-8' />
                        </a>
                      </Link>
                    </div>
                    <div className='mx-2 mt-0.5'>
                      <Link href='https://www.google.com'>
                        <a target='_blank' rel='noopener noreferrer'>
                          <OpenTab className='hover:text-teal h-7 w-7' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='hidden sm:block w-full h-80 ml-4 mt-2 border rounded overflow-hidden'>
                  <div className='h-5 bg-gray-200 flex items-center sticky z-10'>
                    <div className='h-2 w-2 rounded-md m-2 bg-red-600'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-yellow-500'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-green-500'></div>
                  </div>
                  <a>
                    <img
                      src={project.img}
                      className='w-[full] ease-in duration-[10000ms] hover:-translate-y-3/4'
                    ></img>
                  </a>
                </div>
              </div>
            );
          else
            return (
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='hidden sm:block w-full h-80 ml-4 my-8 border rounded overflow-hidden'>
                  <div className='h-5 bg-gray-200 flex items-center sticky z-10'>
                    <div className='h-2 w-2 rounded-md m-2 bg-red-600'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-yellow-500'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-green-500'></div>
                  </div>
                  <a>
                    <img
                      src={project.img}
                      className='w-full ease-in duration-[10000ms] hover:-translate-y-3/4'
                    ></img>
                  </a>
                </div>
                <div className='flex my-8 flex-col justify-around ml-10 text-right'>
                  <h1 className='text-teal text-2xl my-2'>{project.title}</h1>
                  <div className='rounded shadow-md  bg-gray-300 p-5'>
                    <h2 className='text-right text-lg tracking-wide'>
                      {project.description}
                    </h2>
                  </div>
                  <div className='flex text-right justify-end text-gray-300 my-2'>
                    {project.tags.map((tag) => (
                      <h1 key={tag} className='px-2 text-pink-600'>
                        {tag}
                      </h1>
                    ))}
                  </div>
                  <div className='flex justify-end  text-white'>
                    <div className='mx-2'>
                      <Link href='https://www.github.com'>
                        <a target='_blank' rel='noopener noreferrer'>
                          <IconGithub className='hover:text-teal h-8 w-8' />
                        </a>
                      </Link>
                    </div>
                    <div className='mx-2 mt-0.5'>
                      <Link href='https://www.google.com'>
                        <a target='_blank' rel='noopener noreferrer'>
                          <OpenTab className='hover:text-teal h-7 w-7' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Projects;
