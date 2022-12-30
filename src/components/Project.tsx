import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import "../index.css";

interface ProjectData {
  title: string;
  date: string;
  place: string;
  description: string;
  projectType: string;
  link: string;
  tags: string[];
}
interface Props {
  children: React.ReactNode;
}
  const ReadMore: React.FC<Props> = ({ children }) => {
      const text = children as string;
      const [isReadMore, setIsReadMore] = useState(true);
      const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
      return (
        <p className="text">
          {isReadMore ? text.slice(0, 150) : text}
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
          </span>
        </p>
      );
    };
const Project: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"]{
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
    <main className="project min-h-screen p-3">
      <section className=" container mx-auto text-white">
        <h1 className="text-5xl flex justify-center cursive"> My Projects</h1>
        <h2 className=" text-lg text-gray-50 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project) => (
              <article className="projectcolor relative rounded-lg shadow-xl text-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-gray-700">
                  <a
                    className="text-gray-800 text-3xl font-bold mb-2 hover:text-gray-100"
                    href={project.link}
                    //alt={project.title}
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
                          <p className="my-2 text-lg text-gray-900 leading-relaxed">                                
                          <div>
                            <ReadMore>
                              {project.description}
                            </ReadMore>
                          </div>
                       </p>                                
                   </div>
                </article>
              ))}
          </section>
        </section>
      </main>
    );
  };
  
  export default Project;
  