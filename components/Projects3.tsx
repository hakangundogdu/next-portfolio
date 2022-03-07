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
    {
      image: '/images/project-2.png',
      title: 'Natural Events Tracker',
      description: 'React / REST API / Responsive',
      live: 'https://hakangundogdu.github.io/Natural-Events-Tracker/',
      code: 'https://github.com/hakangundogdu/Natural-Events-Tracker',
      style:
        'md:w-1/2 w-full bg-gradient-to-br from-blue-400  to-blue-900  flex flex-col justify-between px-8 py-8',
    },
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
      {projects}
    </section>
  );
};

export default Projects;
