import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="container px-4 sm:px-12 py-16   animate-fade    "
    >
      <h1 className="text-2xl mb-6 font-bold text-slate-900">Projects</h1>

      <div className="container grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <div className=" pt-8  rounded-xl bg-gradient-to-br from-teal-500 to-cyan-800  px-8 shadow-md aspect-square">
          <p className=" text-xl font-semibold  text-slate-100 "> Project 1 </p>
        </div>
        <div className="  pt-8  rounded-xl bg-gradient-to-bl from-blue-400 via-blue-600 to-blue-900  px-8 aspect-square shadow-md">
          <p className=" text-xl font-semibold  text-slate-100"> Project 2 </p>
        </div>
        <div className="   pt-8  rounded-xl bg-gradient-to-tr from-yellow-500  to-orange-700  px-8 shadow-md aspect-square">
          <p className=" text-xl font-semibold  text-slate-100 "> Project 3 </p>
        </div>
        <div className="   pt-8  rounded-xl bg-gradient-to-tr from-rose-700 to-pink-600  px-8 aspect-square shadow-md">
          <p className=" text-xl font-semibold  text-slate-100 "> Project 4 </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
