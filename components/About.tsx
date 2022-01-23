import React from 'react';

const About = () => {
  return (
    <section className="container text-gray-400 px-5 py-36 flex flex-col content-center animate-fade   ">
      <div className=" mx-auto flex flex-col text-center  ">
        <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
          Hakan Gundogdu
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
