import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

interface PostData {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
}

const Post: React.FC = () => {
  const [postData, setPost] = useState<PostData[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="post min-h-screen p-12 text-white">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>
        <h1 className="text-lg text-gray-50 flex justify-center mb-12">
          Welcome to my Blog
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span className="snip1577 block h-64 relative rounded shadow leading-snug ">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-center items-end pr-4 pb-4 ">
                      <h5 className=" text-white ">{post.title}</h5>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
