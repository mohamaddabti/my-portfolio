import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient  from "../client.js";
import '../index.css'

export default function Gallery(){
    const [galleryData, setGalleryData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "gallery"]{
            title,
            slug,
            date,
            place,
            tags,
            description,
            mainPhoto{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setGalleryData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="project min-h-screen p-12">
            <section className=" container mx-auto text-white">
                <h1 className="text-5xl flex justify-center cursive"> Gallery</h1>
                <h2 className=" text-lg text-gray-50 flex justify-center mb-12">still working on it ^_^</h2>
                    {galleryData && galleryData.map((gallery, index) => (
                        <article>
                            <Link to={"/gallery/" + gallery.slug.current} key={gallery.slug.current}>

                                <span className="postcolor block h-64 relative rounded shadow leading-snug border-l-8" key={index}>
                                    <img 
                                    src={gallery.mainPhoto}
                                    alt={gallery.mainPhoto}
                                    className="w-full h-full rounded-r object-cover absolute"
                                    />
                                </span>
                            
                            <div className="text-gray-900 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(gallery.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {gallery.place}
                                </span>
                                <p className="my-6 text-lg text-gray-900 leading-relaxed">
                                    {gallery.description}
                                </p>
                                
                            </div>
                            </Link>
                        </article>
                    ))}
                
            </section>
        </main>
    )
} 
