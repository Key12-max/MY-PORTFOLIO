import React from "react";
import '../styles/Mystyle.css';
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
export default function Footer(){
    return(
        <footer>
            <div class="social-links">
                <a href="https://github.com/Key12-max"><img src="../images/github.png" class="img-icon" alt="github"/> < DiGithubBadge/> </a>
                <a href="https://www.linkedin.com/in/kiros-haftu"><img src="../images/linkedin.png" class="img-icon" alt="Linkedin"/> <IoLogoLinkedin /> </a>
            </div>
            <p>&copy; 2024 kiros-haftu</p>
    </footer>
    );
}