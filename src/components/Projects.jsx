import React from "react";
import ProjectItem from "./ProjectItem";
import crowdflow from "./../assets/crowdflow.png";
import andaaqui from "./../assets/andaaqui.png";
import ghost from "./../assets/ghost.png";
import rasbet from "./../assets/rasbet.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-lg text-center py-8">
        Here are some of my projects, showcasing the technologies and tools I've worked with. Take a look at the work I've done so far.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={crowdflow}
          title="CrowdFlow"
          techIcons={['react', 'azure']}
          redirect="https://www.crowdflow.pt"
        />
        <ProjectItem
          img={andaaqui}
          title="Andaaqui"
          techIcons={['react', 'flask', 'googleMaps']}
          redirect="https://github.com/tiagoribeiro2001/andaaqui"
        />
        <ProjectItem
          img={ghost}
          title="Ghost"
          techIcons={['googleCloud', 'ansible', 'k8s']}
          redirect="https://github.com/tiagoribeiro2001/Projeto-de-ASCN"
        />
        <ProjectItem
          img={rasbet}
          title="RASBet"
          techIcons={['react', 'python', 'java']}
          redirect="https://github.com/tiagoribeiro2001/Projeto-de-Requisitos-e-Arquiteturas-de-Software-RASBet"
        />
      </div>
    </div>
  );
};

export default Projects;
