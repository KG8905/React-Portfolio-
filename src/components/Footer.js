// src/components/Footer.js

import React from "react";

export default function Footer() {
return (
    <footer className="bg-gray-800 text-gray-400 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">Shaketa Giles</span> {/* Your name */}
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
        © 2024 Shaketa Giles —
        <a
            href="https://twitter.com/shaketagiles" 
            className="text-gray-500 ml-1"
            rel="noopener noreferrer"
            target="_blank"
        >
            @shaketagiles {/* Your Twitter handle */}
        </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400" href="https://github.com/kg8905" target="_blank" rel="noopener noreferrer"> {/* Your GitHub */}
            <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03a9.58 9.58 0 015 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"></path>
            </svg>
        </a>
          <a className="ml-3 text-gray-400" href="https://linkedin.com/in/shaketagiles" target="_blank" rel="noopener noreferrer"> {/* Your LinkedIn */}
            <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            >
            <path d="M16 8a6 6 0 00-6 6v6H7v-6a6 6 0 0112 0v6h-3v-6a6 6 0 00-6-6z"></path>
            <rect width="24" height="24" fill="none"></rect>
            </svg>
        </a>
        </span>
    </div>
    </footer>
);
}