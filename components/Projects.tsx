import React from 'react';
import Project from './Project';

import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const projectList = [
    {
      image: '/images/project-4.png',
      title: 'Ecommerce Website',
      description: 'React / Hooks / CSS Modules',
      live: 'https://figma-ecommerce.vercel.app/',
      code: 'https://github.com/hakangundogdu/figma-ecommerce',
      style:
        'w-full bg-gradient-to-br from-pink-600  to-rose-500  flex flex-col justify-between px-8 py-8',
    },
    {
      image: '/images/project-1.png',
      title: 'EasyBank Landing Page',
      description: 'React / NextJS / Tailwind CSS / Responsive',
      live: 'https://easybank-git-main-hakangundogdu.vercel.app/',
      code: 'https://github.com/hakangundogdu/easybank',
      style:
        ' w-full bg-gradient-to-br from-teal-500 to-teal-600 flex flex-col justify-between px-8 py-8',
    },

    //Other Projects
    // {
    //   image: '/images/project-2.png',
    //   title: 'Natural Events Tracker',
    //   description: 'React / REST API / Responsive',
    //   live: 'https://hakangundogdu.github.io/Natural-Events-Tracker/',
    //   code: 'https://github.com/hakangundogdu/Natural-Events-Tracker',
    //   style:
    //     'w-full bg-gradient-to-br from-blue-400  to-blue-900  flex flex-col justify-between px-8 py-8',
    // },
    // {
    //   image: '/images/project-3.png',
    //   title: 'Task App',
    //   description: 'React / Hooks / SCSS',
    //   live: 'https://hakangundogdu.github.io/task-app/',
    //   code: 'https://github.com/hakangundogdu/task-app',
    //   style:
    //     'w-full bg-gradient-to-br from-slate-500  to-slate-700  flex flex-col justify-between px-8 py-8',
    // },
  ];

  const projects = projectList.map((item) => {
    return (
      <Project
        image={item.image}
        title={item.title}
        description={item.description}
        live={item.live}
        code={item.code}
        style={item.style}
      />
    );
  });

  return (
    <section
      id="projects"
      className="container px-4 sm:px-12 pt-16   animate-fade    "
    >
      <h1 className="text-2xl mb-6 font-bold  text-slate-900">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 "> {projects} </div>
      <a
        className="group inline-flex items-center gap-1 justify-self-end  rounded-xl py-2 px-6 focus:outline-none focus:ring-2 bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white shadow-md hover:shadow-xl mt-4"
        href="https://github.com/hakangundogdu"
        target="_blank"
        rel="noreferrer"
      >
        More projects
        <FiArrowUpRight />
      </a>
    </section>
  );
};

export default Projects;
