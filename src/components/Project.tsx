import React from "react";

// constants
import { project } from "../constants";
// components
import Paragraf from "./Paragraf";
import Header2 from "./Header2";

// icons
import { BsGithub } from "react-icons/bs";

const Project = () => {
  return (
    <div className="mt-20 flex flex-col  text-center md:text-left">
      <p className="text-[26px] text-white">Project</p>
      <div className="flex flex-col">
        {project.map((item) => (
          <>
            <section className="flex md:flex-row flex-col w-full p-4">
              <img
                src={item.img}
                alt={item.title}
                className="md:w-[246px] rounded-[20px] md:h-[180px] w-full"
              />
              <div className="flex md:mx-5 flex-col text-left">
                <Header2 className="mb-4">{item.title}</Header2>
                <div className="flex justify-between items-center my-4 w-1/4">
                  <span className="bg-white flexCenter w-[70px] text-sm text-dark rounded-[10px] mr-4 p-2 font-bold">
                    {item.date}
                  </span>
                  {item.github && (
                    <a
                      href={item.github}
                      className="mx-4	text-3xl text-white font-bold"
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  )}
                  <a
                    href={item.link}
                    className="text-white whitespace-nowrap	font-bold"
                    target="_blank"
                  >
                    Go to project
                  </a>
                  
                </div>

                <Paragraf>{item.description}</Paragraf>
              </div>
            </section>
            <div className="border h-[1px] text-white w-full" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Project;
