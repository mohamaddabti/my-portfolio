import React from "react";
import {NavLink}from "react-router-dom";
import { SocialIcon } from "react-social-icons";


function NavBar(){
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white" 
                        className="inline-flex items-center py-6 px-4 mr-8 text-red-100 hover:text-yellow-100 text-4xl font-bold cursive tracking-widest"
                    >
                        Mohammad
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounden text-red-200 hover:text-yellow-100"
                        activeClassName="text-gray-100 bg-gray-700"
                    >
                        Post 
                    </NavLink>
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounden text-red-200 hover:text-yellow-100"
                        activeClassName="text-gray-100 bg-gray-700"

                    >
                        Project
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounden text-red-200 hover:text-yellow-100"
                        activeClassName="text-gray-100 bg-gray-700"

                    >
                        About me!
                    </NavLink>
                </nav>
                <div className= "inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://www.facebook.com/mohammad.dabti/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35,width: 35}} 
                    />
                    <SocialIcon 
                        url="https://www.youtube.com/user/MohamadDabti" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35,width: 35}} 
                    />
                    <SocialIcon 
                        url="https://twitter.com/MDabti" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35,width: 35}} 
                    />
                    <SocialIcon 
                        url="https://www.linkedin.com/in/mohammad-dabti-509476215/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35,width: 35}} 
                    />

                </div>
            </div>
        </header>
    )
} 
export default NavBar;