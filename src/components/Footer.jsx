import link from "../assets/icons/linked.png"
export function Footer(){
    return(
        <footer>
        <div class="lineclass"><div class="line"></div><h3>SAY HI</h3></div>
        <a href="nanaaisha2106@gmail.com"><h1>nanaaisha2106@gmail.com</h1></a><br /><br /><br />
        <p>If you want to know more about my experiences and journey, or just talk in general, get in touch! ✌️</p><br /><br /><br />

        <nav>
            <ul>
                        <li><a href="https://drive.google.com/file/d/1qInXzMJND4GuBL2GJl3PrLPvLioyrecv/view?usp=sharing" id="resume">Resume</a></li>
                        <li><a href="https://www.linkedin.com/in/aisha-adamu-" class="navIcons"><img src={link} alt="linkedin link"/></a></li>
                        <li><a href="https://github.com/aisha2106" class="navIcons"><img src="assets/icons/githubBlack.png" alt="link to github"/></a></li>
                        <li><a href="mailto:nanaaisha2106@gmail.com" class="navIcons"><img src="assets/icons/mail (1).png" alt="link to mail"/></a></li>
            </ul><br />  
        </nav><br /><br />

        <section>
            <p>This site is specially-crafted by me.</p>
            <p>&copy;2026 All Rights Reserved</p>

        </section>
    </footer>
    )
}