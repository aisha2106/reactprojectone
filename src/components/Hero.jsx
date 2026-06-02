import profile from "../assets/images/profile.jpeg";
import linkedinRed from "../assets/icons/linked.png";

import React from "react"
export function HeroSection(){
    return(
        
        <section className="hero-section">
                
            <div className="landingText">

                <h1>Hello, <span>I'm Aisha Adamu.</span></h1>

                <p>
                    Welcome 👋 I'm a Full-Stack Web Developer at <span>Code Campus International</span> based in Abuja, Nigeria. I am a undergraduate student of bachelors in Computer Engineering at Nile University of Nigeria and I'm passionate about Software Development, UX Design and Artificial Intelligence.
                </p><br />

                <ul>
                    <p>I'm currently working with,</p><br />
                    <li>HTML/CSS</li>
                    <li>React (TS)</li>
                    <li>Node.js</li>
                </ul><br />
            <div className="contactMe">
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1qInXzMJND4GuBL2GJl3PrLPvLioyrecv/view?usp=sharing" id="resume">Resume</a></li>
                        <li><a href="https://www.linkedin.com/in/aisha-adamu-/" className="navIcons"><img src={linkedinRed} alt="linkedin link"/></a></li>
                        <li><a href="https://github.com/aisha2106" className="navIcons"><img src="assets/icons/githubBlack.png" alt="link to github"/></a></li>
                        <li><a href="mailto:nanaaisha2106@gmail.com" className="navIcons"><img src="assets/icons/mail (1).png" alt="link to mail"/></a></li>
                    </ul>      
        </div>
        </div>
        
        <img src={profile} alt="Profile Picture"/>

    
        </section>
    )
}