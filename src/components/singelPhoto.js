import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient  from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import '../index.css'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}


export default function SinglePhoto(){
    const [singlePhoto, setSinglePhoto] = useState(null);
    const {slug} = useParams();
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url,
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePhoto(data[0]))
        .catch(console.error);
    }, [slug]);

        if (!singlePhoto) return <div> Loading... </div>;

    return(
        <main className="min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">
                                {singlePhoto.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                
                                <p className="cursive flex items-center pl-2 text-2xl">
                                    {singlePhoto.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={singlePhoto.mainImage.asset.url}
                    alt={singlePhoto.title}
                    className="w-full object-cover rounded-t"
                    style={{height: "400px"}}
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent 
                    blocks={singlePhoto.body}
                    projectId= "ncdfzity" 
                    dataset= "production"/>
                </div>

            </article>
        </main>
    );
} 