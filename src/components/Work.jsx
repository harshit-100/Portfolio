import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "March 2023 - Current",
    title: "Backend Devloper",
    company: "Igtechso",
    location: "Indore, Madhya Pradesh",
    description:
      "I am a skilled backend developer specializing in Node.js and Django. With a passion for crafting efficient and robust solutions, I contribute my expertise to the dynamic team at Igtechso Company. My portfolio showcases a diverse range of projects, highlighting my proficiency in building scalable APIs, managing databases, and ensuring seamless server-side functionality. I take pride in my role as a key player in developing cutting-edge applications that drive innovation and meet the needs of our clients.",
  },
  {
    year: "July 2022 - December 2022",
    title: "Junior Devloper",
    company: "Job Cloud India",
    location: "Remote",
    description:
      "As an accomplished Angular developer at Job Cloud India, I thrive on creating dynamic and interactive web applications. With a keen eye for detail and a commitment to delivering engaging user experiences, I bring innovative front-end solutions to the forefront. My portfolio reflects my expertise in crafting responsive designs, implementing intricate UI components, and optimizing performance for seamless navigation. At Job Cloud India, I take pride in contributing to a collaborative environment and translating ideas into captivating digital realities.",
  },
  {
    year: "Feb 2022 - May 2022",
    title: "Python Intern",
    company: "Technovation Unicorn",
    location: "Remote",
    description:
      "During my tenure as a Python Intern at TechnoVation Unicorn, I immersed myself in the world of Python programming, acquiring valuable skills and gaining hands-on industry experience. I enthusiastically embraced opportunities to learn and contribute, collaborating with seasoned professionals on diverse projects. This internship allowed me to delve into real-world applications, solidify my understanding of Python, and lay the foundation for a promising career in the tech industry.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4  py-16">
      <h1 className="text-4xl font-bold text-center" style={{ marginBottom: '50px', color: '#001b5e' }}>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          kry={idx}
          year={item.year}
          title={item.title}
          company={item.company}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Work;
