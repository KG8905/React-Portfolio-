import React from "react";

export default function Resume() {
return (
    <section id="resume" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto flex flex-col">
        <div className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Resume
        </h1>
        <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-base">
            Below you'll find a downloadable version of my resume, as well as a list of my technical skills and proficiencies.
        </p>
        </div>
        <div className="flex justify-center">
        <a
            href="/resume.pdf" // Provide the path to your actual resume PDF file
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            target="_blank"
            rel="noopener noreferrer"
        >
            Download Resume
        </a>
        </div>
        <div className="mt-10 text-center">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            My Proficiencies
        </h2>
        <div className="flex justify-center space-x-4 flex-wrap">
            <div className="p-4 sm:w-1/3 w-full">
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg text-white font-medium title-font mb-2">
                Front-End
                </h3>
                <p className="leading-relaxed text-base">
                HTML, CSS, JavaScript, React, Responsive Design
                </p>
            </div>
            </div>
            <div className="p-4 sm:w-1/3 w-full">
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg text-white font-medium title-font mb-2">
                Back-End
                </h3>
                <p className="leading-relaxed text-base">
                Node.js, Express.js, REST APIs, MongoDB, SQL
                </p>
            </div>
            </div>
            <div className="p-4 sm:w-1/3 w-full">
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg text-white font-medium title-font mb-2">
                Tools & Technologies
                </h3>
                <p className="leading-relaxed text-base">
                Git, Webpack, Docker, Jest, Agile Methodology
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
);
}