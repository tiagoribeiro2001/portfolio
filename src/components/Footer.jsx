import React from "react";
import { FaLinkedin, FaGithub, FaOrcid } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001b5e] text-gray-100 py-6 mt-16">
      <div className="max-w-[1040px] m-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Tiago Ribeiro</h2>
          <p className="text-sm">
            <a
              href="https://github.com/tiagoribeiro2001/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:underline"
            >
              View source code
            </a>
          </p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/tiago-ribeiro-265257270/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform ease-in duration-200 hover:scale-110 hover:text-blue-700"
          >
            <FaLinkedin className="cursor-pointer" size={25} />
          </a>
          <a
            href="https://github.com/tiagoribeiro2001"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform ease-in duration-200 transform hover:scale-110 hover:text-gray-900"
          >
            <FaGithub className="cursor-pointer" size={25} />
          </a>
          <a
            href="https://orcid.org/0009-0006-2961-8236"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform ease-in duration-200 hover:scale-110 hover:text-green-600"
          >
            <FaOrcid className="cursor-pointer" size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
