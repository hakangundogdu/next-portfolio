import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="container text-slate-400  px-4 sm:px-12 py-16 flex flex-col  animate-fade   "
    >
      <div className="  flex flex-col py-16  rounded-xl bg-slate-900  px-8 shadow-xl">
        <h1 className="text-2xl mb-6 font-bold text-slate-100">About Me </h1>
        <p className=" text-lg leading-relaxed">
          I'm a React, Frontend Developer with 2+ years of experience, currently
          looking for new opportunities. I have been a top-rated freelancer for
          3 years on
          <a
            className=" text-slate-50"
            href="https://www.upwork.com/freelancers/hakan"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Upwork.{' '}
          </a>
          I helped +200 clients with designing/developing websites and marketing
          materials.
        </p>
      </div>
    </section>
  );
};

export default About;
