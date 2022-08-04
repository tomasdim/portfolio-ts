import React from 'react';

const skills = [
  { name: 'HTML', img: '/img/skills/html.png' },
  { name: 'CSS', img: '/img/skills/css.png' },
  { name: 'JavaScript', img: '/img/skills/javascript.png' },
  { name: 'GitHub', img: '/img/skills/github.png' },
  { name: 'React', img: '/img/skills/react.png' },
  { name: 'NodeJS', img: '/img/skills/node.png' },
  { name: 'MongoDB', img: '/img/skills/mongo.png' },
  { name: 'Tailwind', img: '/img/skills/tailwind.png' },
  { name: 'NextJS', img: '/img/skills/nextjs.png' },
  { name: 'TypeScript', img: '/img/skills/typescript.png' },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full px-2 md:px-[217px] pb-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col h-full'>
        <div className='flex text-xl tracking-widest uppercase text-white'>
          <p className='text-teal mr-2'>01.</p>Skills
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='p-6 mt-4 shadow shadow-teal rounded-xl hover:scale-105 ease-in duration-300'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={`${skill.img}`}></img>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h1 className='bold text-teal'>{skill.name}</h1>
                </div>
              </div>
            </div>
          ))}

          {/* <div className='p-6 shadow-xl shadow-teal rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src='/img/skills/html.png'></img>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='bold text-teal'>HTML</h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
