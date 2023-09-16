import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

// Import the Upwork SVG image
import upworkIcon from '../assets/images/upwork-white.svg';

const Hero = () => {
  const social_media = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/peter-bahgat-0b3012131/',
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      link: 'https://twitter.com/peterbahgat12',
    },
    {
      name: 'Upwork',
      icon: upworkIcon,
      link: 'https://www.upwork.com/freelancers/~010663b080070958ba',
    },
    {
      name: 'GitHub',
      icon: faGithub,
      link: 'https://github.com/peterBahgat',
    },
  ];

  const [isUpworkHovered, setIsUpworkHovered] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex flex-col justify-center items-center py-10 md:px-24'
    >
      <div className='md:text-left text-center'>
        <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
          <span className='text-cyan-600 md:text-6xl text-5xl'>
            Hello!
            <br />
          </span>
          My Name is{' '}
          <span className='text-cyan-600 md:text-6xl text-5xl'>
            Peter Bahgat
          </span>
        </h1>
        <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
          Fullstack Developer - MERN
        </h4>
        <button className='btn-primary mt-8' onClick={scrollToContact}>
          Contact Me
        </button>
        <div className='mt-16 text-4xl flex items-center justify-center gap-5'>
          {social_media.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target='_blank'
              rel='noopener noreferrer'
              className='social-media-logo group'
            >
              {platform.name === 'Upwork' ? (
                <img
                  src={upworkIcon}
                  alt='Upwork logo'
                  width='30'
                  height='30'
                  className='transform transition-transform scale-100 group-hover:scale-150 shadow-lg group-hover:shadow-none mx-1'
                />
              ) : (
                <FontAwesomeIcon
                  icon={platform.icon}
                  className='transform transition-transform scale-100 group-hover:scale-150 mx-1'
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
