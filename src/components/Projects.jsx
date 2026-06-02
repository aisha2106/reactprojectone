import link from "../assets/icons/link.png"
import github from "../assets/icons/githubBlack.png"
export function Project({Name, Date, About, Stacks, url1 , url2, image, classname}){
    return(
        <>
         <section id="Projects">

        <section className="project">
            <div>
                <h1>{Name} <span>{Date}</span></h1>
                <p>{About}</p>
                {Stacks.map((stack, index) => (
                <p key={index} id="stack">{stack}</p>
            ))}
            <br /><br /><br />
                        
    
                        <div>
                            <a href={url1}><img src={link} alt="link"/>Live Demo</a>
                            <a href={url2}><img src={github} alt="link"/>GitHub</a>
                        </div>
                    </div>
                    
                    <div className={classname}>
                        <img src={image} />
                    </div>
        </section>
            </section>

        </>
    )

}