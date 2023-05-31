import React, { useEffect, useState } from "react";
import client from "../client";
import { Link } from "react-router-dom";

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
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h2 className='text-5xl flex justify-center cursive'>
          Blog Post Pages
        </h2>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Welcome to my page of blog posts
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* this is map function  used for  */}
          {posts.map((post, index) => {
            // console.log(post);
            return (
              <article key={index}>
                <Link to={post.slug.current} key={post.slug.current}>
                  <span className='block h-64 relative rounded shadow leading-sung bg-white border-l-8 border-green-400'>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className='absolute right-0 bottom-0 h-small flex justify-end item-end pr-4 pb-4'>
                      <h3 className='text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
