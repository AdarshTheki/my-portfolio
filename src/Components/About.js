import React, { useEffect, useState } from "react";
import client from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import asset_1 from "../assets/asset_1.png";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);
const urlFor = (source) => {
  return builder.image(source);
};

const About = () => {
  const [author, setAuthor] = useState();
  // "bio": bio[0].children[0].text,
  useEffect(() => {
    client.fetch(
        `*[_type == "author"]{
        name, 
        bio,
        "authorImage":image.asset -> url
      }
    `).then((data) => setAuthor(data)).catch(console.error);
  }, []);

  if (!author) return <div className='text-6xl text-center font-semibold '>Loading...</div>;

  return (
    <>
      {author.map((author, index) => {
        // console.log(author);
        return (
          <main key={index} className='relative'>
            <img 
              src={asset_1} 
              alt={"img"} 
              className='absolute w-full'
            />
              <div className='p-10 lg:pt-48 container mx-auto relative'>
                <section className='rounded-lg bg-green-800 shadow-2xl lg:flex p-20'>
                  <img
                    src={urlFor(author.authorImage).url()}
                    alt={author.name}
                    className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
                  />
                  <div className='text-lg flex-col flex justify-center'>
                    <h1 className='cursive text-6xl text-green-300 mb-4'>
                      Hey there. I am{" "}
                      <span className='text-green-100'>{author.name}</span>
                    </h1>
                    <div className='prose lg:prose-xl text-white'>
                      <BlockContent
                        blocks={author.bio}
                        projectId='0mp8me9l'
                        dataset='production'
                      />
                    </div>
                  </div>
                </section>
              </div>
          </main>
        );
      })}
    </>
  );
};

export default About;
