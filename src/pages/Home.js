/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  return (
    <main className='relative max-w-5xl mx-auto'>
      <section className='bg-neutral-900 overflow-hidden flex items-center'>
        <div className='max-w-6xl mx-auto px-4 py-16 relative z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
            <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
              <div className='relative'>
                <div className='relative w-64 h-64'>
                  <img
                    src='/user.png'
                    alt='image'
                    className='relative w-full h-full overflow-hidden rounded-full'
                  />
                </div>
              </div>
            </div>

            <div className='w-full lg:w-7/12 sm:text-center lg:text-left'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'>
                Hey, I'm Adarsh,{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600'>
                  I Love to build{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600'>
                    things
                  </span>
                </span>
              </h1>

              <p className='text-lg md:text-xl text-neutral-300 mb-8'>
                <span className='inline-block px-3 py-1 bg-neutral-800 rounded-full mr-2 mb-2'>
                  Tech enthusiast
                </span>

                <span className='inline-block px-3 py-1 bg-neutral-800 rounded-full mr-2 mb-2'>
                  Piano player
                </span>
                <span className='inline-block px-3 py-1 bg-neutral-800 rounded-full mr-2 mb-2'>
                  Curious human
                </span>
              </p>

              <div className='flex space-x-4'>
                <SocialIcon
                  url='https://twitter.com/AdarshV85809682/'
                  className='bg-white border border-white hover:opacity-80 hover:scale-90 duration-300 rounded-full overflow-hidden'
                  target='_blank'
                  style={{ height: 32, width: 32 }}
                />
                <SocialIcon
                  url='https://linkedin.com/in/adarshvermadeveloper/'
                  className='bg-white border border-white hover:opacity-80 hover:scale-90 duration-300 rounded-full overflow-hidden'
                  target='_blank'
                  style={{ height: 32, width: 32 }}
                />
                <SocialIcon
                  url='https://github.com/AdarshTheki/'
                  className='bg-white border border-white hover:opacity-80 hover:scale-90 duration-300 rounded-full overflow-hidden'
                  target='_blank'
                  style={{ height: 32, width: 32 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className='mx-auto max-w-6xl px-4 py-10 bg-neutral-900 overflow-hidden'>
        <div className='text-center mb-10 w-fit mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <div className='w-[80%] h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto'></div>
        </div>

        <div className=''>
          <p className='text-lg text-gray-300 leading-relaxed'>
            I am a passionate MERN Stack Developer with experience in building end-to-end web
            applications, from scalable backends to responsive frontends. I’ve delivered projects
            like an AI-powered e-commerce platform, real-time chat system, and media streaming apps.
            My expertise includes React.js, Next.js, Node.js, Express.js, MongoDB, and cloud
            deployment (AWS, Docker, CI/CD). Currently seeking opportunities in Full-Stack / MERN
            Development, where I can contribute to building impactful digital products while
            continuing to grow as a developer.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
