import { useEffect, useState } from 'react';
import client from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import ImageUrlBuilder from '@sanity/image-url';

const builder = ImageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"]{
          name, 
          bio,
          "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className='flex justify-center items-center min-h-screen text-4xl font-semibold'>
        Loading...
      </div>
    );

  return (
    <main className='relative min-h-screen'>
      <div className='mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {author.map((auth) => (
          <section
            key={auth.name}
            className='bg-opacity-10 bg-neutral-700 p-6 rounded-lg hover:scale-95 duration-300 flex flex-col gap-5 items-center sm:text-center'>
            {/* Author Image */}
            <img
              src={urlFor(auth.authorImage).url()}
              alt={auth.name}
              className='rounded-full h-32 w-32'
            />

            {/* Author Info */}
            <div className='text-white flex flex-col justify-center'>
              <h1 className='text-3xl font-bold cursive mb-4'>
                Hi, I'm <span className='text-green-100'>{auth.name}</span>
              </h1>

              <div className='prose prose-lg lg:prose-xl max-w-none text-white'>
                <div className='reset-tw'>
                  <BlockContent blocks={auth.bio} projectId='0mp8me9l' dataset='production' />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default About;
