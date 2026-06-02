// export function Header(){
//     return(
//         <header>
//         <section className="navbar">
//                 <a href="#">
//                     <h2>
//                         Aisha Adamu
//                     </h2>
//                 </a>

//                 <button className="hamburger" aria-label="Toggle navigation" >
//                     <span class="bar"></span>
//                     <span class="bar"></span>
//                     <span class="bar"></span>
//                 </button>

//             <nav>
//                 <a href="#Projects">Work</a>
//                 <a href="#about">About</a>
//                 <a href="https://drive.google.com/file/d/1qInXzMJND4GuBL2GJl3PrLPvLioyrecv/view?usp=sharing"><span>Resume</span></a>
//                 {/* <a href="#"><img src="assets/icons/moon_61412.png" alt="darkmode"></a> */}
                
//             </nav>
//         </section>
//     </header>
//     )
// }

import React, { useState } from 'react';

const Navbar = () => {
    // 1. Define the state: 'isOpen' is false by default (menu is closed)
    const [isOpen, setIsOpen] = useState(false);

    // 2. Create a function to toggle the state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 3. Create a function to force-close the menu (useful when a link is clicked)
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="navbar">
                <h2>aisha adamu</h2>
                
                {/* 4. The Hamburger Button */}
                <button 
                    // Use template literals to add the 'active' class only when isOpen is true
                    className={`hamburger ${isOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* 5. The Navigation Links */}
                <nav className={isOpen ? 'active' : ''}>
                    {/* Add onClick={closeMenu} so the menu shuts when they pick a page */}
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;