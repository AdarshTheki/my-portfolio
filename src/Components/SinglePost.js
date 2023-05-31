import React, { useEffect, useState } from "react";
import client from "../client.js";
import { useParams } from "react-router-dom";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';

const builder = ImageUrlBuilder(client);
const urlFor = (source) => {
  return builder.image(source);
};

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState();
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset -> {
            _id,
            url,
          } 
        },
        body,
        "name": author -> name,
        "authorImage": author -> url
        
      }
    `
      )
      .then((data) => setSinglePost(data))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <>
      { singlePost.map((data, index) => (
      <main className='bg-gray-200 min-h-screen p-12'>
        <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
          <header className='relative'>
            <div className='absolute h-full w-full flex items-center justify-center p-8'>
              <div className='bg-white bg-opacity-75 rounded p-12'>
                <h1 className='cursive text-3xl lg:text-6xl mb-4'>
                  {data.title}
                </h1>
                <div className='flex justify-center text-gray-800'>
                  <img
                    src={urlFor(data.authorImage).url()}
                    alt='imag_1'
                    className='w-10 h-10 rounded-full'
                  />
                  <p className='cursive flex items-center pl-2 text-2xl'>
                    {data.name}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={data.mainImage.asset.url}
              alt='ima_2'
              className='w-full object-cover rounded-l'
              style={{ height: "400px" }}
            />
          </header>
          <div className="px-16 lg:px-48 lg:py-20 prose lg:prose-xl max-w-full">
            <BlockContent blocks={data.body} projectId="0mp8me9l" dataset='production'/>
          </div>
        </article>
      </main>
      ))}
    </>
  );
};

export default SinglePost;
