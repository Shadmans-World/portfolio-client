import { div } from "motion/react-client";
import React from "react";
import aboutImg from "/about.png";
const AboutMe = () => {
  return (
    <div className="my-5 pb-10">
      <h3 className="text-center text-3xl font-bold ">About Me</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
        {/* Image */}
        <div className="flex justify-center md:justify-end px-5 lg:mr-32">
          <div className=" ">
            <img
              className="h-[454px] w-[330px] rounded-full border-8"
              src={aboutImg}
              alt=""
            />
          </div>
        </div>
        <div className=" flex items-center px-5">
          <p className="text-start">
            From a young age, I developed a deep fascination with computers,
            largely sparked by playing many computer games. Watching a friend
            engage in graphics-related work and gaming further fueled my
            curiosity and inspired me to dream of doing something creative and
            impactful with my computer. As I explored my interests, I discovered
            the field of web development, which captivated me with its endless
            possibilities to build and design dynamic online experiences. The
            process of creating something from scratch and seeing it come to
            life amazes me and drives my passion for programming. It feels
            fulfilling to combine creativity and logic in web development,
            making it the perfect avenue for me to channel my enthusiasm for
            computers into meaningful work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
