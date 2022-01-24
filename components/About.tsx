import React from 'react';

const About = () => {
  return (
    <section className="container text-gray-400 px-10 py-36 flex flex-col  animate-fade   ">
      <div className="  flex flex-col   ">
        <h1 className="sm:text-2xl text-2xl mb-4 font-bold text-gray-900">
          About Me{' '}
        </h1>
        <p className=" text-xl leading-relaxed">
          Frontend Developer based in{' '}
          <a
            className="hover:text-gray-600"
            href="https://en.wikipedia.org/wiki/izmir"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Izmir{' '}
          </a>
          , Turkey.
        </p>
      </div>
    </section>
  );
};

export default About;
