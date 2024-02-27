import React from "react";
//create the basic structure of react components and export them from that file
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Kiros.
                        <br className="hidden lg:inline-block" />I love to build amazing
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I am Kiros, dedicated Full-Stack Web Developer. Since I have earned my bachelor's degree on Electrical and computer engineering in Agust 2016,I have spent past few years working, Designing, Troublshooting both software and hardware components as Electrical Engineer.
                    I have been working diligently to advance my skills on the IT and decided to took action in 2022 to join Coding Dojo Bootcamp and earned a certificate as full stack web developer on Python and MERN programing languages. 
                    During my time at Bootcamp, I have developed two projects as team and individual. Now, I am ready to work as full-stack web developer and applying all my skills.
                    </p>
                    
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./kiros.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}