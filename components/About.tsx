import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="container text-slate-400  px-4 sm:px-12 pt-16 flex flex-col  animate-fade   "
    >
      <div className="  flex flex-col py-16  rounded-xl bg-slate-900  px-8 shadow-xl">
        <h1 className="text-2xl mb-6 font-bold text-slate-100">About Me </h1>
        <p className=" text-lg leading-relaxed">
          I'm a React, Frontend Developer with 2+ years of experience. <br /> I
          am skilled in React / NextJS / Typescript / Javascript / TailwindCSS.
        </p>
      </div>
    </section>
  );
};

export default About;
