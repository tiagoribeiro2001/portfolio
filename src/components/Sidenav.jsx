import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* Menu Button */}
      <div
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
      >
        {/* Condicionalmente renderizar o ícone com efeito de rotação */}
        {nav ? (
          <AiOutlineClose className="text-2xl transform transition-transform duration-300 ease-in-out rotate-180" />
        ) : (
          <AiOutlineMenu className="text-2xl transform transition-transform duration-300 ease-in-out" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-100" : "translate-x-full"
        }`}
      >
        <a
          onClick={handleNav}
          href="#main"
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <AiOutlineHome size={20} />
          <span className="pl-4">Home</span>
        </a>
        <a
          onClick={handleNav}
          href="#work"
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <GrProjects size={20} />
          <span className="pl-4">Work</span>
        </a>
        <a
          onClick={handleNav}
          href="#projects"
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <AiOutlineProject size={20} />
          <span className="pl-4">Projects</span>
        </a>
        <a
          onClick={handleNav}
          href="#resume"
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <BsPerson size={20} />
          <span className="pl-4">Resume</span>
        </a>
        <a
          onClick={handleNav}
          href="#contact"
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <AiOutlineMail size={20} />
          <span className="pl-4">Contact</span>
        </a>
      </div>

      {/* Desktop Menu*/}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
