import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I'm Tanya Katiyar, a Computer Science student from VIT Bhopal University, with a passion for web development. I'm constantly 
          learning and exploring new technologies to enhance my skills. I'm working on creating new and interesting projects
          to showcase my skills.
          

        </p>

        <br />

        <p className="text-xl">
        I believe that the skills I have attained from dynamic environment and competitive university life define me and I am looking forward to implementing 
        and polishing them in any opportunity I receive. My goal is to create high-quality innovative solutions 
        and I am committed to delivering exceptional results for my clients.
        </p>
      </div>
    </div>
  );
};

export default About;
