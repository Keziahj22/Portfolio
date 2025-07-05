import { ArrowDown } from "lucide-react";
import profileCropped from "../assets/profileCropped.jpg"; // Adjust the path as necessary
import { FaGithub, FaPython,FaReact, FaNodeJs, FaSquareJs   } from "react-icons/fa6";
import { SiMysql, SiMongodb, SiHtml5, SiCss3, SiTailwindcss , SiCplusplus } from "react-icons/si";

export const HeroSection = () => {
    return (
        
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10" >
                <span className="w-50 h-50 left rounded-full overflow-hidden shadow-lg">
                    <img
                        src={profileCropped}
                        alt="KeziProfile"
                        className="w-50 h-50 mx-auto rounded-full shadow-lg object-cover"
                    />
                </span>
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold  tracking-tight " >
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span> {" "}
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Keziah</span> {" "}
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">John</span>
                    </h1>
                </div>
                <div className="space-y-6 ">
                    

                    
                    <p className="text-lg md:text-xl text-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a Full-Stack Developer  specializing in MERN technologies, with a strong drive for crafting thoughtful, user-focused web experiences, and a desire to solve real-world problems through clean, efficient code. 
                    </p>
                    <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
                        <a
                            href="#projects"
                            className="cosmic-button "
                        >
                            View My Work
                        </a>
                        {"  "}
                        <a
                            href=""
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                    {" "}
                    <div className="tag-list mt-8 opacity-0 animate-fade-in-delay-4">
                    <h2 className="text-1xl md:text-3xl font-bold  tracking-tight"><span className="opacity-0 animate-fade-in">Tools</span> and <span> Technologies </span></h2>
                    
                    <div className="inner top-10">
                        {/* Original list */}
                        <div className="tag"><span className="tag-span"><SiHtml5 size={24} /></span>HTML5</div>
                        <div className="tag"><span className="tag-span"><SiCss3 size={24} /></span>CSS</div>
                        <div className="tag"><span className="tag-span"><FaSquareJs size={24} /></span>JavaScript</div>
                        <div className="tag"><span className="tag-span"><FaReact size={24} /></span>ReactJS</div>
                        <div className="tag"><span className="tag-span"><FaGithub size={24} /></span>Git/Github</div>
                        <div className="tag"><span className="tag-span"><SiMongodb size={24} /></span>MongoDB</div>
                        <div className="tag"><span className="tag-span"><FaNodeJs size={24} /></span>NodeJs</div>
                        <div className="tag"><span className="tag-span"><SiMysql size={24} /></span>MySQL</div>
                        <div className="tag"><span className="tag-span"><SiCplusplus size={24} /></span>C++</div>
                        <div className="tag"><span className="tag-span"><FaPython size={24} /></span>Python</div>
                        <div className="tag"><span className="tag-span"><SiTailwindcss size={24} /></span>Tailwind</div>

                        {/* Duplicate list for seamless looping */}
                        <div className="tag"><span className="tag-span"><SiHtml5 size={24} /></span>HTML5</div>
                        <div className="tag"><span className="tag-span"><SiCss3 size={24} /></span>CSS</div>
                        <div className="tag"><span className="tag-span"><FaSquareJs size={24} /></span>JavaScript</div>
                        <div className="tag"><span className="tag-span"><FaReact size={24} /></span>ReactJS</div>
                        <div className="tag"><span className="tag-span"><FaGithub size={24} /></span>Git/Github</div>
                        <div className="tag"><span className="tag-span"><SiMongodb size={24} /></span>MongoDB</div>
                        <div className="tag"><span className="tag-span"><FaNodeJs size={24} /></span>NodeJs</div>
                        <div className="tag"><span className="tag-span"><SiMysql size={24} /></span>MySQL</div>
                        <div className="tag"><span className="tag-span"></span>C++</div>
                        <div className="tag"><span className="tag-span"><FaPython size={24} /></span>Python</div>
                        <div className="tag"><span className="tag-span"><SiTailwindcss size={24} /></span>Tailwind</div>
                    </div>
                    
                    </div>

                </div>
            </div> 
            <br></br>
            <br></br>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="text-primary animate-bounce" />
            </div>
        </section>

    ) ; 
}; 