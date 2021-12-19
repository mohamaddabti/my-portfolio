import React from "react";
//import image from "../wall.jpg";
import video from "../media/video-1.mp4";
import Typical from "react-typical";

export default function Home(){
    return (
        <main>
            
            <video
                src={video} alt="Nordlys" autoPlay loop muted
                className="absolute object-cover w-full h-full sm:absolute " 
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <div className="text-white font-dosis text-center">
                <h2 className="text-2xl font-bold">
                    Hi!
                </h2>
                <h2 className="text-2xl font-bold">
                    It's me MOHAMMAD
                </h2>
                <h1 className="font-bold text-3xl text-gray-100">
                    I'm {" "}
                    <Typical
                    steps={['Cyber security student. 💻', 2000,'Astrophotography. 📸',2000, 'Karate player. 🥋🤜',2000]}
                    loop={Infinity}
                    className="inline-block"
                    />
                </h1>
            </div>
            </section>


        </main>
    )
} 
/*            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h4 className="text-2xl text-indigo-100 font-bold cursivie leading-none lg:leading-snug"> Hello, I am Mohammad. </h4>
            </section>*/