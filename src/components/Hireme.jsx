import hireMe from '../assets/images/hireMe.png';

const Hireme = () => {
  const email = 'peterbahgat21@gmail.com';

  return (
    <section id='hireme' className='py-10 px-3 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          Hire <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
      </div>
      <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
        <div>
          <h2 className='text-2xl font-semibold'>Let's Work Together</h2>
          <p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6'>
            I'm passionate about what I do and always ready to take on new
            challenges. Whether it's a web development project, collaboration
            opportunity, or just a friendly chat, I'm here for it!
          </p>
          <a href={`mailto:${email}`}>
            <button className='btn-primary mt-10'>Say Hello</button>
          </a>
        </div>
        <img
          src={hireMe}
          alt='Hire Me'
          className='lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover'
        />
      </div>
    </section>
  );
};

export default Hireme;

<button className='btn-primary mt-10'>Say Hello</button>;
