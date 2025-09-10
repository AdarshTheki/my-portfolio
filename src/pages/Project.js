import { useEffect, useState } from 'react';
import client from '../client.js';

const Project = () => {
  const [projectData, setProject] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'project']{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags
        }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <main className='min-h-screen py-12'>
      <section className='mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='text-center mb-12'>
          <h1 className='text-5xl font-bold mb-4'>My Projects</h1>
          <p className='text-lg text-neutral-300'>
            Welcome to my portfolio of projects. Check out my work!
          </p>
        </header>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {projectData.map((project) => (
            <article
              key={project.link}
              className='bg-opacity-10 z-10 bg-neutral-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition'>
              <h3 className='text-2xl font-semibold mb-4'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-blue-600 transition'>
                  {project.title}
                </a>
              </h3>

              <div className='flex flex-wrap text-sm text-neutral-300 space-x-4 mb-4 capitalize'>
                <span>{new Date(project.date).toLocaleDateString()}</span>
                <span>{project.place}</span>
                <span>{project.projectType}</span>
              </div>

              <p className='text-neutral-300 leading-relaxed line-clamp-4 mb-6'>
                {project.description}
              </p>

              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition'>
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
