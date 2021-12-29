import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient  from "../client.js";
import '../index.css'
import '../Slider.css'




function Post(){
    const [postData, setPost] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "post"]{
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
                <h1 className="text-lg text-gray-50 flex justify-center mb-12">Welcome to my Blog</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {postData && postData.map((post, index) => (
                        <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span className="snip1577 block h-64 relative rounded shadow leading-snug " key={index}>
                                    <img 
                                    src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                    className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="postcolor ">
                                        {post.title}</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
    
} 
export default Post;