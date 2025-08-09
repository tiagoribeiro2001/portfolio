import React from "react";
import ResumeItem from "./ResumeItem";

const data = [
  {
    year: "2024",
    title: "Associate Software Engineer - Accenture",
    duration: "Now",
    details:
      "At Accenture, I completed an initial training program in front-end development before joining large-scale projects for a major European institution. In my current role as a full-stack developer, I focus primarily on front-end development with Angular, while also working on API integration and management, data pipelines, and enterprise systems such as Oracle and Master Data Management (MDM).",
  },
  {
    year: "2023-2024",
    title: "Co-founder - CrowdFlow",
    duration: "1 year and 2 months",
    details:
      "I co-developed a plug-and-play initiative that aims to revolutionize physical retail by enhancing consumer data collection and analysis. The project integrates AI and surveillance cameras to capture insights on consumer behavior across various establishments. My main focus has been on front-end development using React, and managing the deployment process with Azure. Currently incubated at Startup Braga, it earned <a href='https://www.rum.pt/news/bebida-vegetal-oh-chata-foi-a-grande-vencedora-do-demo-day-da-startup-point-24' target='_blank' rel='noopener noreferrer'>second place at Startup Point</a> and was <a href='https://www.fjuventude.pt/pt/noticias/fundacao/conhecidos-os-projetos-vencedores-da-mostra-nacional-de-jovens-empreendedores' target='_blank' rel='noopener noreferrer'>awarded at the Mostra Nacional de Jovens Empreendedores 2024</a>.",
  },
  {
    year: 2022,
    title: "Electrician assistant - Sandokan",
    duration: "3 months",
    details:
      "During the summer break, I had the opportunity to work as an electrician assistant at Sandokan. By assisting experienced technicians, handling tools safely and collaborating as part of a team, I gained valuable practical skills about how a work environment works.",
  },
  {
    year: "2019-2024",
    title: "Degree and Master’s in Informatics Engineering - University of Minho",
    duration: "5 years",
    details:
      "I gained strong theoretical and practical knowledge in computer science through my studies, becoming proficient in Python, C, and Java. My experience includes working with various database systems, such as MySQL, and covers fundamental areas like algorithms, computer networks, and distributed systems. During my Master's specialization in Intelligent Systems and Application Engineering, I applied TensorFlow for deep learning and machine learning projects. Additionally, I developed a range of applications using React, HTML, and CSS, integrating advanced AI solutions with practical application development.",
  },
];

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-4">
        Resume
      </h1>
      {data.map((item, idx) => (
        <ResumeItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Resume;
