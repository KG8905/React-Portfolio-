// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Apps
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> 
        </p>
        </div>
        <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
            <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
                <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                </div>
            </div>
            </a>
        ))}
        </div>
    </div>
    </section>
);
}

// src/data.js
export const projects = [
    {
    title: "PWA Text Editor",
    subtitle: "Progressive Web App",
    description: "A text editor that can be installed and used offline, following PWA best practices.",
      image: "./images/pwa-text-editor.png", // Update with your actual image path
      link: "https://your-deployed-app-link.com", // Update with your deployed app link
    },
    {
    title: "Employee Directory",
    subtitle: "React and Bootstrap",
    description: "A searchable employee directory built with React and Bootstrap.",
      image: "./images/employee-directory.png", // Update with your actual image path
      link: "https://your-deployed-app-link.com", // Update with your deployed app link
    },
    {
    title: "Weather Dashboard",
    subtitle: "Open Weather Map Api",
    description: "A weather Api that can search the weather based on your current location.",
      image: "./images/mood-board-app.png", // Update with your actual image path
      link: "https://your-deployed-app-link.com", // Update with your deployed app link
    },
    {
    title: "Disc Golf App",
    subtitle: "Node.js and Express",
    description: "A disc golf app for managing user data and disc collections with protected routes.",
      image: "./images/disc-golf-app.png", // Update with your actual image path
      link: "https://your-deployed-app-link.com", // Update with your deployed app link
    },
    {
    title: "SVG Logo Maker",
    subtitle: "Command Line Tool",
    description: "A Node.js command line tool to generate SVG logos based on user input.",
      image: "./images/svg-logo-maker.png", // Update with your actual image path
      link: "https://your-deployed-app-link.com", // Update with your deployed app link
    },
    {
    title: "Employee Payroll System",
    subtitle: "JavaScript and HTML",
    description: "A simple payroll system that calculates and manages employee salaries.",
      image: "./images/employee-payroll-system.png", // Update with your actual image path
      link: "https://your-deployed-app-link.com", // Update with your deployed app link
    }
];
