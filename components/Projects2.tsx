import React from 'react';
import Project from './Project';

const Projects = () => {
  const projectList = [
    {
      image: '/images/project-1.png',
      title: 'EasyBank Landing Page',
      description: 'React / NextJS / Tailwind CSS / Responsive',
      live: 'https://easybank-git-main-hakangundogdu.vercel.app/',
      code: 'https://github.com/hakangundogdu/easybank',
      style:
        'md:w-1/2 w-full bg-gradient-to-br from-teal-500 to-teal-600 flex flex-col justify-between px-8 py-8',
    },
  ];

  return (
    <section
      id="projects"
      className="container px-4 sm:px-12 pt-16   animate-fade    "
    >
      <h1 className="text-2xl mb-6 font-bold  text-slate-900">Projects</h1>
      <div className="container   ">
        <div className=" flex flex-col md:flex-row  overflow-hidden border border-slate-200 shadow-xl rounded-xl ">
          <div className="w-full md:w-1/2   ">
            <img
              src="/images/project-1.png"
              alt="project"
              className=" w-full object-contain   "
            />{' '}
          </div>

          <div className={projectList[0].style}>
            <div>
              <p className=" text-2xl  mb-4 font-semibold  text-white">
                {' '}
                EasyBank Landing Page{' '}
              </p>
              <p className="  mb-4  text-teal-100">
                {' '}
                React / NextJS / Tailwind CSS / Responsive
              </p>
            </div>

            <div className="flex space-x-4  text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-md bg-slate-900 text-white">
                  <a
                    href="https://easybank-git-main-hakangundogdu.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live{' '}
                  </a>
                </button>
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-300 bg-teal-100 text-teal-500">
                  <a
                    href="https://github.com/hakangundogdu/easybank"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container grid md:grid-cols-2 grid-cols-1 gap-4  my-4">
        <div className="relative flex flex-col  rounded-xl bg-gradient-to-br from-teal-500 to-cyan-800   shadow-md aspect-square">
          <p className=" text-xl px-8 pt-6 mb-4 font-semibold  text-slate-100">
            {' '}
            EasyBank Landing Page{' '}
          </p>
          <img
            src="/images/project-1.png"
            alt="project"
            className="absolute bottom-0 w-full object-contain   "
          />
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
      </div> */}
    </section>
  );
};

export default Projects;
