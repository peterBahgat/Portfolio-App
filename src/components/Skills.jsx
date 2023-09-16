import IonIcon from '@reacticons/ionicons';
import MongoDBIcon from '../assets/images/mongodb-icon.svg';
import ExpressIcon from '../assets/images/icons8-express-js.svg'; // Import Express.js logo

const Skills = () => {
  const skills = [
    {
      logo: 'logo-html5',
      level: 'Advanced',
      count: 95,
      skill: 'HTML5',
    },
    {
      logo: 'logo-css3',
      level: 'Intermediate',
      count: 75,
      skill: 'CSS3',
    },
    {
      logo: 'logo-javascript',
      level: 'Advanced',
      count: 95,
      skill: 'JavaScript',
    },
    {
      logo: 'logo-nodejs',
      level: 'Intermediate',
      count: 80,
      skill: 'Node.js',
    },
    {
      logo: 'logo-react',
      level: 'Intermediate',
      count: 80,
      skill: 'React',
    },
    {
      logo: 'mongodb-icon', // Change to the string identifier for IonIcon
      level: 'Intermediate',
      count: 80,
      skill: 'MongoDB',
    },
    // Add the new Express.js skill here
    {
      logo: 'express-icon', // Change to the string identifier for Express.js
      level: 'Intermediate',
      count: 80,
      skill: 'Express.js',
    },
  ];

  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Skills</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My knowledge</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {skills?.map((skill, i) => (
            <div
              key={i}
              className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className='w-32 h-32 flex items-center justify-center rounded-full'
              >
                <div
                  className={`text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out`}
                >
                  {/* Check if the logo is not 'mongodb-icon' or 'express-icon' to use IonIcon */}
                  {typeof skill.logo === 'string' &&
                  skill.logo !== 'mongodb-icon' &&
                  skill.logo !== 'express-icon' ? (
                    <IonIcon name={skill.logo} className='text-center' />
                  ) : (
                    <img
                      src={
                        skill.logo === 'mongodb-icon'
                          ? MongoDBIcon
                          : skill.logo === 'express-icon'
                          ? ExpressIcon
                          : null // Add the correct path for Express.js
                      }
                      alt='Skill Icon'
                      className={`w-20 h-20`}
                    />
                  )}
                </div>
              </div>
              <p className='text-xl mt-3'>{skill.level}</p>
              <p className='text-gray-400 mt-3 text-lg'>{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
