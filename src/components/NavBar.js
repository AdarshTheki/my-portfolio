import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full z-50 h-fit'>
      <div className='relative w-full bg-slate-900  backdrop-blur-lg'>
        <div className='max-w-6xl mx-auto flex items-center justify-between px-4 py-4'>
          {/* Logo */}
          <NavLink
            to='/'
            className='text-xl font-bold text-red-100 tracking-wide hover:text-indigo-300'>
            Sanity
          </NavLink>

          {/* Hamburger Button (Mobile) */}
          <button className='text-red-100 md:hidden' onClick={() => setIsOpen(!isOpen)}>
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6 items-center'>
            <NavLink to='/post' className='text-red-100 hover:text-indigo-300 font-semibold'>
              Post
            </NavLink>
            <NavLink to='/project' className='text-red-100 hover:text-indigo-300 font-semibold'>
              Project
            </NavLink>
            <NavLink to='/author' className='text-red-100 hover:text-indigo-300 font-semibold'>
              Author
            </NavLink>
          </nav>

          {/* Social Icons (Desktop) */}
          <div className='hidden md:flex space-x-4'>
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden px-4 pb-4'>
            <nav className='flex flex-col space-y-3'>
              <NavLink
                to='/post'
                className='text-red-100 hover:text-indigo-300 font-semibold'
                onClick={() => setIsOpen(false)}>
                Post
              </NavLink>
              <NavLink
                to='/project'
                className='text-red-100 hover:text-indigo-300 font-semibold'
                onClick={() => setIsOpen(false)}>
                Project
              </NavLink>
              <NavLink
                to='/author'
                className='text-red-100 hover:text-indigo-300 font-semibold'
                onClick={() => setIsOpen(false)}>
                Author
              </NavLink>

              <div className='flex space-x-4 pt-4'>
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
