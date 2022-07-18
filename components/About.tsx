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
          Experienced frontend developer with a demonstrated history of working
          in information technology, financial services, and graphic design.
          <br />
          Skilled in React JS, Next JS, TypeScript, Javascript, Economics,
          Business, and Finance. <br />
          Helped +200 clients from all over the world in past 3 years. <br />
          Strong sense of responsibility, problem-solving, and communication
          skills. <br />
          Self-motivated and able to work in a diverse global team.
        </p>
      </div>
    </section>
  );
};

export default About;
