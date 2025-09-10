import { useEffect, useState } from 'react';
import client from '../client.js';
import { useParams } from 'react-router-dom';
import ImageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = ImageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          _id,
          slug,
          mainImage{ asset -> { _id, url } },
          body,
          "name": author-> name,
          "authorImage": author-> url
        }`,
        { slug }
      )
      .then((data) => setSinglePost(data))
      .catch(console.error);
  }, [slug]);

  if (singlePost.length === 0)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <p className='text-xl'>Loading post...</p>
      </div>
    );

  return (
    <>
      {singlePost.map((data) => (
        <main key={data._id} className='min-h-screen py-10'>
          <article className='max-w-4xl mx-auto'>
            {/* Hero Image */}
            <div className='relative h-96 overflow-hidden'>
              <img
                src={data.mainImage?.asset?.url}
                alt={data.title}
                className='w-full h-full object-contain'
              />
            </div>

            {/* Author Info */}
            <div className='flex items-center px-6 py-4 space-x-4'>
              <img
                src={data.authorImage ? urlFor(data.authorImage).url() : ''}
                alt={data.name}
                className='w-12 h-12 rounded-full object-cover border'
              />
              <div>
                <p className='text-lg font-medium'>{data.name}</p>
                <p className='text-sm'>Author</p>
              </div>
            </div>

            <h1 className='text-4xl font-bold py-5'>{data.title}</h1>

            {/* Post Body */}
            <div className='prose prose-lg px-6 py-8 max-w-none'>
              <div className='reset-tw'>
                <BlockContent blocks={data.body} projectId='0mp8me9l' dataset='production' />
              </div>
            </div>
          </article>
        </main>
      ))}
    </>
  );
};

export default SinglePost;
