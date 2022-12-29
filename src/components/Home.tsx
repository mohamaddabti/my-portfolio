import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
//import Typical from "react-typical";
import '../index.css';
import me from "../media/me.png"
import { Typewriter } from 'react-simple-typewriter';
import ReactReadMoreReadLess from "react-read-more-read-less";

interface SkillsData {
  map(arg0: (skill: any, index: any) => JSX.Element): React.ReactNode;
  title: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
}

interface ProjectData {
  map(arg0: (project: any, index: any) => JSX.Element): React.ReactNode;
  title: string;
  date: string;
  place: string;
  description: string;
  projectType: string;
  link: string;
  tags: string[];
}

export default function Home(): JSX.Element {
  const [skillsData, setskills] = useState<SkillsData | null>(null);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skills"]{
            title,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setskills(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <main className="home ">
        <script src="https://unpkg.com/scrollreveal"></script>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <section className="home section" id="home">
          <div className="container text-white">
            <div className="home-content">
              <div className="home-desc">
                <h1 className="">
                  Hello,<br />I am Mohammad Dabti
                  </h1>
                    <span className="spancolor">
                    {" "}
                    <Typewriter
                    loop
                    cursor
                    cursorStyle="!"
                    typeSpeed={65}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    words={[
                    "Cyber security student 💻",
                    "Astrophotography 📸",
                    "Karate player 🥋🤜",
                    ]}
                    className="inline-block"
                    />
                                </span>
                                <p className="">
                                I am a cyber security student , and I keep learning to deal with 
                                programming and modern web technologies and I built some projects
                                that increased my experience and I train constantly, I am a quick
                                learner and I always like to develop myself..
                                <br/>
                                <a rel="noreferrer" className="contact p-0.5 hover:text-red" href="https://mohammaddabti.netlify.app/Contact"> Get in touch with me!</a> 
                                </p>
                                <ul className="home-social">
                                <li>
                                    <a
                                    href="https://github.com/mohamaddabti"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <i className="bx bxl-github bx-spin-hover text-white"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                    href="https://www.linkedin.com/in/mohammad-dabti-509476215/"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <i className="bx bxl-linkedin-square bx-spin-hover text-white"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                    href="https://www.facebook.com/mohammad.dabti/"
                                    className="cv text-dark bx bxl-facebook bx-spin-hover bg-white"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="home-img rounded w-32 h-32 lg:w-60 lg:h-60 mr-8">
                                <img className="me" src={me} alt="profile" />
                            </div>
                        </div> 
                        <br></br><br></br><br></br><br></br><br></br>
                        

                        <span className="projectn-title text-dark">&lt; My Projects /{">"}</span><br></br><br></br>
                            <div className="container"> 
                                <section className=" container mx-auto text-white">
                                        <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {projectData && projectData.map((project, index) => (
                                                <article className="projectcolor relative rounded-lg shadow-xl text-white p-8">
                                                    <h3 className="text-gray-800 text-3xl font-bold mb-0 hover:text-gray-700">
                                                        <a className="text-gray-800 text-3x1 font-bold mb-2 hover:text-gray-100"
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
                                                        <p className="my-2 text-lg text-gray-900 leading-relaxed">
                                                            
                                                            <ReactReadMoreReadLess
                                                                charLimit={90}
                                                                readMoreText={"Read more ▼"}
                                                                readLessText={"Read less ▲"}
                                                                readMoreClassName="read-more-less--more"
                                                                readLessClassName="read-more-less--less"
                                                            >
                                                                {project.description}
                                                            </ReactReadMoreReadLess>
                                                        </p>
                                                        
                                                    </div>
                                                </article>
                                            ))}
                                        </section>
                                </section>
                                
                            </div>
                            <br/><br/><br/>

                        <span className="section-title text-dark">&lt; Skills /{">"}</span><br/><br/><br/>
                        <div className="d-flex flex-wrap"> 
                            {skillsData && skillsData.map((skill, index) => (
                                <article>
                                        <span className=" flex p-2 shadow " key={index}>
                                            <img 
                                            src={skill.mainImage.asset.url}
                                            alt={skill.mainImage.alt}
                                            className="h-10 w-10"
                                            />
                                            <span className="p-2">
                                                <h5 className=" text-white">
                                                {skill.title}</h5>
                                            </span>
                                        </span>
                                </article>
                            ))}
                        </div>
                    </div> 
                </section>
                <footer>
                    <div className="container text-dark">
                        <h2 className="footer__title ">MOHAMMAD DABTI</h2>
                        <div className="footer__social">
                                    <a
                                    href="https://github.com/mohamaddabti"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <i className="bx bxl-github bx-spin-hover text-dark"></i>
                                    </a>
                                    <a
                                    href="https://www.linkedin.com/in/mohammad-dabti-509476215/"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <i className="bx bxl-linkedin-square bx-spin-hover text-dark"></i>
                                    </a>
                        </div>
                        <span className="phone__number">
                            <i className="bx bxs-phone bx-tada-hover"></i>
                        +1 609-803-9031
                        </span>

                        <p>© 2022 copyright all right reserved</p>
                    </div>
                </footer>

        </main>
        </>
    )
} 
