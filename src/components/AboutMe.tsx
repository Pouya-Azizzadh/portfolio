import React from "react";

// img
import { Pouya } from "../assets";

//components
import Avatar from "./Avatar";
import { Button } from "./Button";
import Header1 from "./Header1";
import Paragraf from "./Paragraf";

const AboutMe = () => {
  return (
    <section className="reversSection justify-between items-center mt-20">
      <div className="md:text-left text-center max-w-[505px]">
        <Header1>
          Hi, I am Pouya,
          <br />
          React developer
        </Header1>
        <Paragraf>
          Junior developer by react.js. I started coding in 2020. I have chosen
          frontend and I intend to progress in this direction I am currently
          doing my best to get acquainted with new technologies and methods in
          REACT.JS
        </Paragraf>
        <Button>Download cv</Button>
      </div>
      <Avatar image={Pouya} />
    </section>
  );
};

export default AboutMe;
