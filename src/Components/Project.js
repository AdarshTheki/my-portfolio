import React, { useEffect, useState } from "react";
import client from "../client.js";

const Project = () => {
  const [projectData, setProject] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == 'project']{
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags
      }
    `
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <main className='bg-green-100 min-h-screen p-12'>
        <section className='container mx-auto'>
          <h1 className='text-5xl flex justify-center cursive'>My Project</h1>
          <h2 className='text-lg text-green-600 flex justify-center mb-12'>
            Welcome to my Project Page!.
          </h2>
          <section className='grid md:grid-cols-2 gap-8'>
            {projectData && projectData.map((project, index) => (
              <article
                key={index}
                className='relative rounded-lg shadow-xl bg-white p-16'>
                <h3 className='font-bold mb-2 capitalize hover:text-red-700 text-gray-800 text-3xl'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {project.title}
                  </a>
                </h3>
                <div className='text-sm space-x-4'>
                  <span className=" text-blue-600">
                    <strong className='font-bold'>Finished on:</strong>{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span className="text-orange-600">
                    <strong className='font-bold'>Company:</strong>{" "}
                    {project.place}
                  </span>
                  <span className="text-green-600">
                    <strong className='font-bold'>Type:</strong>{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                  <a 
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="text-white bg-blue-500 px-4 py-2 rounded-full font-bold hover:text-gray-300 hover:bg-blue-600"
                  >{" >> "}Project View
                  </a>
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default Project;
