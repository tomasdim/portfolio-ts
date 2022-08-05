import Link from 'next/link';
import React from 'react';
import { IconGithub, OpenTab } from './icons';
import { useRef, useEffect, useState } from 'react';

const ProjectsInfo = [
  {
    id: 1,
    title: 'Budget Manager',
    description: `You can create your own financial operations and store them in your account to keep track of your finances. Login with Github, Google or Facebook to do so.`,
    tags: ['NextJS', 'Tailwind', 'NodeJS', 'MongoDB', 'TypeScript'],
    img: 'https://imgur.com/VNsojy9.png',
    translate: 'hover:-translate-y-[1130px] duration-[8000ms]',
  },
  {
    id: 2,
    title: 'Buller Web Layout',
    description: `A work request, needed to replicate the homepage of a pub website based on a Figma file.`,
    tags: ['React', 'CSS', 'Material UI'],
    img: 'https://imgur.com/psZlUox.png',
    translate: 'hover:-translate-y-[450px] duration-[4000ms]',
  },
  {
    id: 3,
    title: 'Chat App',
    description:
      'Create your own or join a chat room and start chatting with people in it. Share your location with other users.',
    tags: ['NodeJS', 'Socket.io', 'Express', 'CSS'],
    img: 'https://imgur.com/fVccCDI.png',
    translate: 'hover:-translate-y-[200px] duration-[3000ms]',
  },
  {
    id: 4,
    title: 'My Old Portfolio',
    description: `My past portfolio made on React with pure CSS. There I
hosted all my projects until that moment. Utilized
Material UI for some material components.`,
    tags: ['React', 'CSS', 'Material UI'],
    img: 'https://imgur.com/XEYFnrB.png',
    translate: 'hover:-translate-y-[1150px] duration-[8000ms]',
  },
];

const MoreprojectsInfo = [
  {
    id: 1,
    title: 'Tetris Game',
    description: `Play the classic Tetris game, clear lines and earn points.`,
    tags: ['JavaScript', 'React', 'Styled Components'],
    img: 'https://imgur.com/RYaTXfO.png',
    translate: '',
  },
  {
    id: 2,
    title: 'Weather Finder',
    description: `Search the current weather by location or coordinates. View real-time temperature and weather conditions.`,
    tags: ['React', 'CSS', 'API'],
    img: 'https://imgur.com/M6VKv6L.png',
    translate: '',
  },
  {
    id: 3,
    title: 'Movie Center',
    description: `View the latest releases, search for movies by name and see the ratings they have received from critics.`,
    tags: ['JavaScript', 'React', 'API'],
    img: 'https://imgur.com/6C1LQO5.png',
    translate: 'hover:-translate-y-[700px] duration-[4000ms]',
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  //Lazy Loading
  const projectsRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [projectsIsVisible, setProjectsIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('animateMain', entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
        const entry = entries[0];
        setProjectsIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-300px',
      }
    );
    observer.observe(projectsRef.current);
  }, []);

  return (
    <div
      ref={projectsRef}
      id='projects'
      className='opacity-0 w-full px-4 md:px-[217px] pb-20'
    >
      <div className='max-w-[1240px] mx-auto flex flex-col h-full'>
        <div className='text-xl flex tracking-widest uppercase text-white'>
          <p className='text-teal mr-2 mb-5'>03.</p> Projects
        </div>

        {ProjectsInfo.map((project) => {
          if (project.id % 2 == 0)
            return (
              <div
                key={project.id}
                className='grid grid-cols-1 lg:grid-cols-2 sm:my-20'
              >
                <div className='flex my-8 flex-col justify-around sm:ml-10 text-left'>
                  <h1 className='text-teal text-2xl my-2'>{project.title}</h1>
                  <div className='rounded shadow-md  bg-gray-300 p-5'>
                    <h2 className='text-left text-lg tracking-wide'>
                      {project.description}
                    </h2>
                  </div>
                  <div className='flex flex-wrap text-left text-gray-300 my-2'>
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
                          <IconGithub className='hover:text-teal h-8 w-8 ease-in duration-300' />
                        </a>
                      </Link>
                    </div>
                    <div className='mx-2 mt-0.5'>
                      <Link href='https://www.google.com'>
                        <a target='_blank' rel='noopener noreferrer'>
                          <OpenTab className='hover:text-teal h-7 w-7 ease-in duration-300' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='hidden sm:block w-full h-80 ml-4 my-8 border rounded overflow-hidden'>
                  <div className='h-5 bg-gray-200 flex items-center sticky z-10'>
                    <div className='h-2 w-2 rounded-md m-2 bg-red-600'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-yellow-500'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-green-500'></div>
                  </div>
                  <a>
                    <img
                      src={project.img}
                      className={`${'w-full ease-in'} ${project.translate}`}
                    ></img>
                  </a>
                </div>
              </div>
            );
          else
            return (
              <div key={project.id} className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='hidden sm:block w-full h-80 ml-4 my-8 border rounded overflow-hidden'>
                  <div className='h-5 bg-gray-200 flex items-center sticky z-10'>
                    <div className='h-2 w-2 rounded-md m-2 bg-red-600'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-yellow-500'></div>
                    <div className='h-2 w-2 rounded-md m-2 bg-green-500'></div>
                  </div>
                  <a>
                    <img
                      src={project.img}
                      className={`${'w-full ease-in'} ${project.translate}`}
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
                  <div className='flex flex-wrap  text-right justify-end text-gray-300 my-2'>
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
                          <IconGithub className='hover:text-teal h-8 w-8 ease-in duration-300' />
                        </a>
                      </Link>
                    </div>
                    <div className='mx-2 mt-0.5'>
                      <Link href='https://www.google.com'>
                        <a target='_blank' rel='noopener noreferrer'>
                          <OpenTab className='hover:text-teal h-7 w-7 ease-in duration-300' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
        {!showMore ? (
          <div className='flex items-center justify-center'>
            <button className='sendmessage p-2' onClick={handleShowMore}>
              Show More
            </button>
          </div>
        ) : (
          ''
        )}
        {showMore ? (
          <div className='animateMain' ref={projectsRef}>
            {MoreprojectsInfo.map((project) => {
              if (project.id % 2 == 0)
                return (
                  <div
                    key={project.id}
                    className='grid grid-cols-1 lg:grid-cols-2 sm:my-20'
                  >
                    <div className='flex my-8 flex-col justify-around sm:ml-10 text-left'>
                      <h1 className='text-teal text-2xl my-2'>
                        {project.title}
                      </h1>
                      <div className='rounded shadow-md  bg-gray-300 p-5'>
                        <h2 className='text-left text-lg tracking-wide'>
                          {project.description}
                        </h2>
                      </div>
                      <div className='flex flex-wrap text-left text-gray-300 my-2'>
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
                              <IconGithub className='hover:text-teal h-8 w-8 ease-in duration-300' />
                            </a>
                          </Link>
                        </div>
                        <div className='mx-2 mt-0.5'>
                          <Link href='https://www.google.com'>
                            <a target='_blank' rel='noopener noreferrer'>
                              <OpenTab className='hover:text-teal h-7 w-7 ease-in duration-300' />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='hidden sm:block w-full h-80 ml-4 my-8 border rounded overflow-hidden'>
                      <div className='h-5 bg-gray-200 flex items-center sticky z-10'>
                        <div className='h-2 w-2 rounded-md m-2 bg-red-600'></div>
                        <div className='h-2 w-2 rounded-md m-2 bg-yellow-500'></div>
                        <div className='h-2 w-2 rounded-md m-2 bg-green-500'></div>
                      </div>
                      <a>
                        <img
                          src={project.img}
                          className={`${'w-full ease-in'} ${project.translate}`}
                        ></img>
                      </a>
                    </div>
                  </div>
                );
              else
                return (
                  <div
                    key={project.id}
                    className='grid grid-cols-1 lg:grid-cols-2'
                  >
                    <div className='hidden sm:block w-full h-80 ml-4 my-8 border rounded overflow-hidden'>
                      <div className='h-5 bg-gray-200 flex items-center sticky z-10'>
                        <div className='h-2 w-2 rounded-md m-2 bg-red-600'></div>
                        <div className='h-2 w-2 rounded-md m-2 bg-yellow-500'></div>
                        <div className='h-2 w-2 rounded-md m-2 bg-green-500'></div>
                      </div>
                      <a>
                        <img
                          src={project.img}
                          className={`${'w-full ease-in'} ${project.translate}`}
                        ></img>
                      </a>
                    </div>
                    <div className='flex my-8 flex-col justify-around ml-10 text-right'>
                      <h1 className='text-teal text-2xl my-2'>
                        {project.title}
                      </h1>
                      <div className='rounded shadow-md  bg-gray-300 p-5'>
                        <h2 className='text-right text-lg tracking-wide'>
                          {project.description}
                        </h2>
                      </div>
                      <div className='flex flex-wrap  text-right justify-end text-gray-300 my-2'>
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
                              <IconGithub className='hover:text-teal h-8 w-8 ease-in duration-300' />
                            </a>
                          </Link>
                        </div>
                        <div className='mx-2 mt-0.5'>
                          <Link href='https://www.google.com'>
                            <a target='_blank' rel='noopener noreferrer'>
                              <OpenTab className='hover:text-teal h-7 w-7 ease-in duration-300' />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
            <div className='flex items-center justify-center'>
              <button className='sendmessage p-2' onClick={handleShowMore}>
                Show less
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Projects;
