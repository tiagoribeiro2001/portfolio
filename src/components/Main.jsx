import React from "react";
import fundo from "./../assets/fundo.png";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaOrcid } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={fundo}
        alt="/"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4l font-bold text-gray-800">
            I'm Tiago Ribeiro
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/tiago-ribeiro-265257270/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform ease-in duration-200 hover:scale-110 hover:text-blue-700"
            >
              <FaLinkedin className="cursor-pointer" size={30} />
            </a>
            <a
              href="https://github.com/tiagoribeiro2001"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform ease-in duration-200 transform hover:scale-110 hover:text-gray-900"
            >
              <FaGithub className="cursor-pointer" size={30} />
            </a>
            <a
              href="https://orcid.org/0009-0006-2961-8236"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform ease-in duration-200 hover:scale-110 hover:text-green-600"
            >
              <FaOrcid className="cursor-pointer" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
