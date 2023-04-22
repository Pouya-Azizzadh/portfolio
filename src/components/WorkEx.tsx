import React from "react";

// constants
import { workExperience } from "../constants";

// components
import Paragraf from "./Paragraf";
import Header3 from "./Header3";

const WorkEx = () => {
  return (
    <section className="mt-20 flex flex-col text-center md:text-left">
      <p className="text-[26px] text-white">Work experience</p>
      <div className="reversSection">
        {workExperience.map((item) => {
          return (
            <div className="flex flex-col  md:w-1/2  shadow-xl px-8 py-16  m-4">
              <Header3>{item.title}</Header3>
              <div className="w-full my-4 flex justify-between">
                <Paragraf>{item.type}</Paragraf>{" "}
                <Paragraf>{item.periodTime}</Paragraf>
                <Paragraf></Paragraf>
                <Paragraf></Paragraf>

              </div>
              <Paragraf>{item.description}</Paragraf>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkEx;
