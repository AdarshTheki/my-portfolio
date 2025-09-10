import { useEffect, useState } from 'react';
import client from '../client';
import { Link } from 'react-router-dom';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <main className='min-h-screen py-12'>
      <section className='mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='text-center mb-12'>
          <h1 className='text-5xl font-bold mb-4'>Blog Posts</h1>
          <p className='text-lg text-neutral-300'>Welcome to my collection of blog articles</p>
        </header>

        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.slug.current}
              className='bg-opacity-10 z-10 bg-neutral-700 rounded-2xl overflow-hidden hover:scale-95 duration-300'>
              <Link to={`/post/${post.slug.current}`}>
                <div className='relative h-48'>
                  <img
                    src={post.mainImage?.asset?.url}
                    alt={post.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                <div className='p-4'>
                  <h2 className='text-xl font-semibold'>{post.title}</h2>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
