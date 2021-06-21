import React from "react";
//import image from "../wall.jpg";
import video from "../video-1.mp4";

export default function Home(){
    return (
        <main>
            <video
                src={video} alt="Nordlys" autoPlay loop muted
                className="absolute object-cover w-full h-full sm:absolute " 
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h4 className="text-2xl text-indigo-100 font-bold cursivie leading-none lg:leading-snug"> Hello, I am Mohammad. </h4>
            </section>
        </main>
    )
} 
