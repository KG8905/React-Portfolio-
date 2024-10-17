import React from "react";

function Footer() {
  // Replace these with your actual information
  const name = "Shaketa Giles";
  const twitterHandle = "shaketagiles";
  const githubUrl = "https://github.com/kg8905";
  const linkedInUrl = "https://linkedin.com/in/shaketagiles";
  const year = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="bg-gray-800 text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">{name}</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
          © {year} {name} —
          <a
            href={`https://twitter.com/${twitterHandle}`}
            className="text-gray-500 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @{twitterHandle}
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400" href={githubUrl} target="_blank" rel="noopener noreferrer">
            <svg /* ... SVG code for GitHub icon ... */
          </a>
          <a className="ml-3 text-gray-400" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <svg /* ... SVG code for LinkedIn icon ... */
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
