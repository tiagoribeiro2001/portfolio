import React from "react";
import profile from "./../assets/profile.jpg";
import cv from "./../assets/Tiago_Ribeiro_Resume.pdf";
import { FaReact, FaNodeJs, FaJsSquare, FaPython } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiMicrosoftazure,
  SiTensorflow,
  SiMysql,
} from "react-icons/si";

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

const Profile = () => {
  return (
    <div id="profile" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Profile</h1>
      <div className="max-w-[1040px] flex flex-col lg:flex-row items-center justify-between px-4 py-8">
        <div className="w-64 h-64">
          <img
            src={profile}
            alt="Tiago Ribeiro"
            loading="lazy"
            className="w-full h-full object-cover rounded-full border-4 border-[#001b5e]"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-lg mt-4">
            I'm a {calculateAge("2001-08-26")} year old portuguese Software
            Engineer based in Barcelos, Braga.
          </p>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#001b5e] text-gray-100 mt-4 p-4 rounded-lg transition-transform ease-in duration-200 hover:scale-105"
          >
            See Resume
          </a>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#001b5e]">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-8 text-[#001b5e]">
              <FaReact size={30} title="React" />
              <FaJsSquare size={30} title="JavaScript" />
              <SiHtml5 size={30} title="HTML" />
              <SiCss3 size={30} title="CSS" />
              <FaPython size={30} title="Python" />
              <FaNodeJs size={30} title="Node.js" />
              <SiMicrosoftazure size={30} title="Azure" />
              <SiTensorflow size={30} title="Tensorflow" />
              <SiMysql size={30} title="MySQL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
