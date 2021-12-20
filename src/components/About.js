import React, { useState, useEffect } from "react";
import sanityClient  from "../client.js";
import imageUrlBuilder  from "@sanity/image-url";
import Galaxy from "../media/stars.jpg" 
import BlockContent from "@sanity/block-content-to-react"
import '../index.css'


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, []);
    if (!author) return <div>Loading...</div>;


    return (
        <main className="relative">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bf-blue-900 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-100 mb-4">
                            Hey there. I'm {" "}
                            <span className="name">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent //blocks={author.bio}
                            //projectId= "ncdfzity" 
                            //dataset= "production"
                            />
                            <h5> A Cyber security student at  <a target="_blank" class="ntnu" href="https://www.ntnu.no/">NTNU</a> </h5>
                        </div>
                    </div>
                    <div className="foot">
                        
                    </div>
                </section>
                
            </div>
            
        </main>
        
    )
}

