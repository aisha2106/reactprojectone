import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Header} from "./components/Header"
import { HeroSection} from './components/Hero'
import { Project } from './components/Projects'
import { AboutMe } from './components/Aboutme'
import { Footer } from './components/Footer'
import favmovimg from "./assets/images/project1.png"
import landingimg from "./assets/images/project2.png"
import { Linethingy } from './components/Linethingy'

function App() {
  

  return (
    <>
    <Header/>
    <HeroSection/>
    <Linethingy text={"FEATURED PROJECTS"}/>
    <Project 
      Name={"Favorite Movie"}
      Date={"March 2026 - Present"}
      About={"A simple website containing information about my favorite movie -Code Geass"}
      Stacks={["HTML", "CSS"]}
      url1={"https://aisha2106.github.io/favmovie/"}
      url2={"https://aisha2106.github.io/favmovie/"}
      image={favmovimg}
      

    />
    <Project id="twoimg"
      Name={"Simple Landing Page"}
      Date={"March 2026 - Present"}
      About={"A simple Landing Page interface design with navigation links to Sign Up/In"}
      Stacks={["HTML", "CSS"]}
      url1={"https://aisha2106.github.io/Assignment-2/"}
      url2={"https://aisha2106.github.io/https://github.com/aisha2106/Assignment-2"}
      image={landingimg}
    />

    <AboutMe/>
    <Footer/>

    
    
      
    </>
  )
}

export default App
