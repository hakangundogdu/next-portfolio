import React from 'react';

const Skills = () => {
  return (
    <div
      className={
        '  mx-auto p-4 flex flex-wrap justify-center space-x-3 max-w-screen-lg animate-fade   '
      }
    >
      <div className="  bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl ">
        React
      </div>
      <div className="   bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl ">
        NextJS
      </div>
      <div className="  bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl">
        Tailwind
      </div>
      <div className="   bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl ">
        TypeScript
      </div>
      <div className="   bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl ">
        JavaScript
      </div>
      <div className="   bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl">
        Git
      </div>
      <div className="  bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl">
        HTML
      </div>
      <div className="  bg-slate-100 text-slate-500 py-2 px-6  rounded-xl   mt-4 md:mt-0 hover:bg-slate-700 hover:text-white hover:shadow-xl">
        CSS
      </div>
    </div>
  );
};

export default Skills;
