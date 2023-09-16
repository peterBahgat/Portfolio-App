// About.js
import React from 'react';

const About = () => {
  const info = [
    { text: 'Years experience', count: '01' },
    { text: 'Completed Projects', count: '5' },
    { text: 'Companies Work', count: '01' },
  ];

  return (
    <section
      id='about'
      className='flex flex-col justify-center items-center p-4 md:p-24 text-white'
    >
      <div className='flex flex-col justify-center items-center text-center'>
        <h3 className='text-3xl md:text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-base md:text-lg'>
          My introduction
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center mt-4 md:mt-8 mx-auto max-w-6xl justify-center'>
        <div className='text-gray-300 mx-auto md:w-1/2'>
          <p className='text-justify leading-6 md:leading-7 w-full md:w-11/12 mx-auto'>
            I'm a passionate Full-Stack MERN Developer dedicated to delivering
            high-quality web applications. I thrive in the world of web
            development and have honed my skills in MongoDB, Express.js, React,
            and Node.js (MERN) to provide comprehensive solutions to clients.
          </p>
          <div className='flex mt-6 md:mt-10 items-center justify-center gap-4 md:gap-10 align-items-center'>
            {info.map((content) => (
              <div key={content.text} className='text-center'>
                <h3 className='md:text-3xl text-2xl font-semibold text-white'>
                  {content.count}
                  <span className='text-cyan-600'>+</span>{' '}
                </h3>
                <span className='md:text-base text-xs md:text-base'>
                  {content.text}
                </span>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className='text-center mx-auto'>
        <a
          href='https://drive.usercontent.google.com/download?id=1ad3kLo_RWljts7REIX8tRyThzlTuZ15t&export=download&authuser=0&confirm=t&uuid=42d3c7ec-34dd-4e92-a303-e8ffec6834dd&at=APZUnTUrocHe2GnIimOYC5deezAi:1694866970562'
          download
        >
          <button className='btn-primary mx-auto'>Download CV</button>
        </a>
      </div>
    </section>
  );
};

export default About;
