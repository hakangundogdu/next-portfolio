import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="container  px-4 sm:px-12 py-16 flex flex-col  animate-fade    "
    >
      <div className=" relative  py-16  rounded-xl bg-slate-100  px-8 shadow-xl">
        <h1 className="text-2xl mb-6 font-bold text-slate-900">Projects</h1>

        <div className="grid-cols-2 gap-12 ">
          <div className=" relative flex flex-col py-16  rounded-xl bg-slate-100  px-8 shadow-xl">
            <p className=" text-lg  text-slate-400 "> text </p>
          </div>
          <div className=" relative flex flex-col py-16  rounded-xl bg-slate-100  px-8 shadow-xl">
            <p className=" text-lg  text-slate-400 "> text </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
