import React from "react";
import Typical from "react-typical";
import '../index.css';
import me from "../media/me.png" 

  
export default function Home(){
    
    return (
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
                                <h1 className="">Hello,<br />I am Mohammad Dabti</h1>
                                <span className="spancolor">
                                    {" "}
                                    <Typical
                                    loop={Infinity}
                                    wrapper='f'
                                    steps={['Cyber security student. 💻',
                                    1500,
                                    'Astrophotography. 📸',
                                    1500, 
                                    'Karate player. 🥋🤜',
                                    1500]}
                                    
                                    className="inline-block"
                                    />                           
                                </span>
                                <p className="">
                                I am a cyber security student , and I keep learning to deal with 
                                programming and modern web technologies and I built some projects
                                that increased my experience and I train constantly, I am a quick
                                learner and I always like to develop myself..
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
                        
                        <span className="section-title text-dark">&lt; Skills /{">"}</span><br></br><br></br>
                        <div className="container">
                            <div className="skills-content ">
                            <div className="container justify-content-between ">
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-html5 bx-burst-hover">HTML</h4>
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-css3 bx-burst-hover">CSS</h4>
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-javascript bx-burst-hover">JavaScript</h4><br></br>
                                <h4 className="text-dark skill  pr-8 skills-content bx bxl-jquery bx-burst-hover">jQuery</h4>
                                <h4 className="text-dark skill  pr-8 skills-content bx bxs-data bx-burst-hover">SQL</h4>
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-react bx-burst-hover">React JS</h4><br></br>
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-nodejs bx-burst-hover">Node JS</h4>
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-bootstrap bx-burst-hover">Bootstrap</h4>
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-github bx-burst-hover">GIT {"&"} Github </h4><br></br>
                                <h4 className="text-dark skill  pr-8 skills-content bx bx-station bx-burst-hover">CCNA</h4>
                                <h4 className="text-dark skill  pr-8 skills-content bx bx-terminal bx-burst-hover">Linux</h4>
                                <h4 className="text-dark skill  pr-8 skills-content bx bxs-terminal bx-burst-hover">PowerShell</h4>
                                <h4 className="text-dark skill pr-8 skills-content bx bxl-adobe bx-burst-hover">Photoshop</h4><br></br>
                                </div>
                            </div>
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
                        +47 40981256
                        </span>
                        <p>© 2021 copyright all right reserved</p>
                    </div>
                </footer>

        </main>
    )
} 
