import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

const Project = () => {
  const projects = [
    {
      img: project1,
      name: 'Comfy - E-Commerce App',
      github_link: 'https://github.com/peterBahgat/comfy.git',
      live_link: 'https://comfy-beta.vercel.app/',
    },
    {
      img: project2,
      name: 'React native app - st. Paul',
      github_link: 'https://github.com/peterBahgat/st-paul-graduates-app.git',
      live_link: 'https://github.com/peterBahgat/st-paul-graduates-app.git',
    },
    {
      img: project3,
      name: 'An api for a blog - Posts & users',
      github_link: 'https://github.com/peterBahgat/blog-node.js-api.git',
      live_link: 'https://github.com/peterBahgat/blog-node.js-api.git',
    },
  ];
  return (
    <section id='projects' className='py-10 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
      </div>
      <br />
      <div className='flex max-w-6xl gap-6 px-5 mx-auto items-center relative justify-center'>
        <div className='lg:w-2/3 w-full'>
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesperView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                  <img src={project_info.img} alt='' className='rounded-lg' />
                  <h3 className='text-xl my-4'>{project_info.name}</h3>
                  <div className='flex gap-3'>
                    <a
                      href={project_info.github_link}
                      target='_blank'
                      rel='noreferrer'
                      className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target='_blank'
                      rel='noreferrer'
                      className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
