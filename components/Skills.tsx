import React from 'react';

const Skills = () => {
  return (
    <div
      className={
        '  mx-auto p-4 flex flex-wrap justify-center space-x-4 text-white '
      }
    >
      <div className="  bg-gradient-to-r from-cyan-500 to-blue-500  border-0 py-2 px-6  rounded-full text-base  mt-4 md:mt-0 ">
        React
      </div>
      <div className="  bg-gradient-to-r from-orange-500 to-red-500  border-0 py-2 px-6  rounded-full text-base  mt-4 md:mt-0 ">
        NextJS
      </div>
      <div className="  bg-gradient-to-r from-teal-500 to-green-500 border-0 py-2 px-6  rounded-full text-base  mt-4 md:mt-0 ">
        Tailwind
      </div>
      <div className="  bg-gradient-to-r from-indigo-500 to-violet-500 border-0 py-2 px-6  rounded-full text-base  mt-4 md:mt-0 ">
        Git
      </div>
      <div className="  bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-2 px-6  rounded-full text-base  mt-4 md:mt-0 ">
        TypeScript
      </div>
      <div className=" bg-gradient-to-r from-sky-400 to-blue-600 border-0 py-2 px-6  rounded-full text-base  mt-4 md:mt-0 ">
        HTML/CSS
      </div>
      <div className="  bg-gradient-to-r from-fuchsia-500 to-pink-500 border-0 py-2 px-6  rounded-full text-base  mt-4 md:mt-0 ">
        Agile
      </div>
    </div>
  );
};

export default Skills;
