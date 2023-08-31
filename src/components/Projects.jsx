import React from "react";
import ProjectItem from "./ProjectItem";
import oneImg from "../assets/1.jpg";
import twoImg from "../assets/2.jpg";
import threeImg from "../assets/3.jpg";
import fourImg from "../assets/4.jpg";
import fiveImg from "../assets/5.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        veniam obcaecati, reiciendis rerum quod magnam sequi id, esse, molestias
        necessitatibus dolores deserunt reprehenderit omnis autem facere numquam
        veritatis quibusdam. Molestias.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={oneImg} title="Crypto App" />
        <ProjectItem img={twoImg} title="Property App" />
        <ProjectItem img={threeImg} title="Netflix App" />
        <ProjectItem img={fourImg} title="Prime App" />
      </div>
    </div>
  );
};

export default Projects;
