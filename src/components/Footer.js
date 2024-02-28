import React from "react";
import '../styles/Mystyle.css';
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { IconContext } from "react-icons";
export default function Footer(){
    return(
        <footer>
            <div className="social-links">
                <h2>Social media profile</h2>
                <a href="https://github.com/Key12-max">
                    <IconContext.Provider value={{ className: "img-icons"}}>
                        < DiGithubBadge/>
                        </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/kiros-haftu">
                    <IconContext.Provider value={{className: "img-icons"}}>
                        <IoLogoLinkedin /> 
                    </IconContext.Provider>
                    </a>
            </div>
            <p>&copy; 2024 kiros-haftu</p>
    </footer>
    );
}