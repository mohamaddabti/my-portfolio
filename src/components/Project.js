import React, {useEffect, useState } from "react";
import sanityClient  from "../client.js";
import '../index.css'

export default function Project(){
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    
    return (
        <main className="project min-h-screen p-12">
            <section className=" container mx-auto text-white">
                <h1 className="text-5xl flex justify-center cursive"> My Projects</h1>
                <h2 className=" text-lg text-gray-50 flex justify-center mb-12">Welcome to my projects page!</h2>
                <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="projectcolor relative rounded-lg shadow-xl text-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-gray-700">
                                <a className="text-gray-800 text-3xl font-bold mb-2 hover:text-gray-100"
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-gray-900 text-xs space-x-4"><br/>
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()} 
                                </span><br/>
                                <span>
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span><br/>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-900 leading-relaxed">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-700 font-bold hover:underline hover:text-red-800 text-xl"
                                >
                                    View The Project{" "}
                                    <span role="img" aria-label="right pointer"> </span> 
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
} 
