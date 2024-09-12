import React from "react";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiFlask, SiMicrosoftazure, SiKubernetes, SiAnsible, SiGooglecloud, SiGooglemaps } from "react-icons/si"

const iconMap = {
  react: {
    icon: <FaReact size={25} />,
    alt: "React",
  },
  python: {
    icon: <FaPython size={25} />,
    alt: "Python",
  },
  java: {
    icon: <FaJava size={25} />,
    alt: "Java",
  },
  googleCloud: {
    icon: <SiGooglecloud size={25} />,
    alt: "Google Cloud",
  },
  flask: {
    icon: <SiFlask size={25} />,
    alt: "Flask",
  },
  azure: {
    icon: <SiMicrosoftazure size={25} />,
    alt: "Azure",
  },
  k8s: {
    icon: <SiKubernetes size={25} />,
    alt: "Kubernetes",
  },
  ansible: {
    icon: <SiAnsible size={25} />,
    alt: "Ansible",
  },
  googleMaps: {
    icon: <SiGooglemaps size={25} />,
    alt: "Google Maps API",
  },
};

const ProjectItem = ({ img, title, techIcons, redirect }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex gap-6 justify-center mt-2">
          {techIcons.map((icon, index) => (
            <div key={index} className="text-white" title={iconMap[icon].alt}>
              {iconMap[icon].icon}
            </div>
          ))}
        </div>
        <a href={redirect} target="_blank" rel="noopener noreferrer">
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg mt-4">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
