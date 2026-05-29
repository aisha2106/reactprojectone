import profile from "../assets/images/profile.jpeg";
export function AboutMe(){
    return(
        <scetion id="about" className="aboutMe">
            <div className="lineclass"><div className="line"></div><h3>ABOUT ME</h3></div>
            <div className="about">
                <img src={profile} alt="Profile Picture" width="200px" />
                <div>
                    <h1>Aisha Adamu</h1><br />
                    <p>Hi there ✌️ nice to meet you! I'm a I'm a Full-Stack Web Developer at <span>Code Campus International</span> based in Abuja, Nigeria.</p><br />
    
                    <p>I'm an aspiring Software Engineer with a passion for writing code and making things on the web look pretty. I'm well acquainted with various UX design & research methods as well as frontend, backend, database and cloud technologies. I have always been a firm believer in the human element of design and knowing your audience. Therefore, I strive to create simple, functional and impactful user experiences. </p><br />
    
                    <p>In my free time, I love to play volleyball, watch football ⚽, cook, explore neighborhoods through food and occasionally br /ing out my inner photographer. </p><br />
                
                </div><hr />
                
            </div><br /><br /><br />
            <div className="education">
                
                    <div>
                        <h1>Education</h1>
                        <p>I-Scholars International Academy</p>
                        <p>High-School Certificate</p>
                        <p><span>Oct 2019 - May 2022</span></p>
                    </div>
    
                    <div>
                        <p>Nile University of Nigeria</p>
                        <p>Bachelor of Engineering in Computer Engineering</p>
                        <p><span>Oct 2022- Ongoing</span></p>
                        <p>Courses: Data Structures, OOP, Algorithms, Data Communication and Networks, Introduction to Machine Learning</p>
                    </div>
                

            
                <div>
                    <h1>Experiences</h1>
                    <p>Code Campus International</p>
                    <p>Software Engineer Intern</p>
                    <p><span>March 2026 - Ongoing</span></p>
                </div>
            </div><br /><br /><br />

            <div className="skills">
                <h1>Skills</h1><br />
                <h2>Programming</h2><br />
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </div>

        </scetion>
    )
}