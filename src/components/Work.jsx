import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Co-founder - CrowdFlow",
    duration: "1 year",
    details:
      "I have co-developed a plug-and-play initiative, aimed at revolutionizing the physical commerce industry by enhancing the gathering and examination of consumer data. This project integrates AI and surveillance cameras across various establishments to collect data related to consumer behavior. Currently, the project is being incubated at Startup Braga. We achieved notable recognition by <a href='https://www.rum.pt/news/bebida-vegetal-oh-chata-foi-a-grande-vencedora-do-demo-day-da-startup-point-24' target='_blank' rel='noopener noreferrer'>winning second place at Startup Point</a>, and were <a href='https://www.fjuventude.pt/pt/noticias/fundacao/conhecidos-os-projetos-vencedores-da-mostra-nacional-de-jovens-empreendedores' target='_blank' rel='noopener noreferrer'>awarded at the Mostra Nacional de Jovens Empreendedores 2024</a>.",
  },
  {
    year: 2022,
    title: "Electrician's assistant - Sandokan",
    duration: "3 months",
    details:
      "During the summer break, I had the opportunity to work as an electrician’s assistant at Sandokan. By assisting experienced technicians, handling tools safely and collaborating as part of a team, I gained valuable practical skills about how a work environment works.",
  },
  {
    year: 2019,
    title: "Degree and Master’s in Informatics Engineering - UMinho",
    duration: "5 years",
    details:
      "Completing the Master’s in Informatics Engineering at UMinho was an enriching and life-changing experience. I acquired in-depth theoretical and practical knowledge in several fundamental areas, including algorithms, artificial intelligence, computer networks and distributed systems.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-4">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
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

export default Work;
