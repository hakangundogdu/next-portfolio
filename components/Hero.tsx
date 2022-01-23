import React from 'react';
import { FaGithub, FaLinkedinIn, FaArrowDown, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="container text-slate-500 px-5 py-36 flex flex-col content-center    ">
      <div className=" mx-auto flex flex-col text-center animate-fade ">
        <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
          Hakan Gundogdu
        </h1>
        <p className=" text-lg sm:text-xl leading-relaxed">
          Frontend Developer based in{' '}
          <a
            className="hover:text-sky-500"
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
      <div className="mx-auto flex my-4 justify-center space-x-4 pt-6 animate-fade ">
        <a
          href="https://www.linkedin.com/in/hakangundogdu1/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-sky-100 text-sky-500 border-0 py-3 px-3 focus:outline-none hover:bg-sky-500 hover:text-white rounded-full text-base  mt-4 md:mt-0 shadow-xl"
        >
          <FaLinkedinIn className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/hakangundogdu"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-sky-100 text-sky-500 border-0 py-3 px-3 focus:outline-none hover:bg-sky-500 hover:text-white rounded-full text-base  mt-4 md:mt-0 shadow-xl"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.twitter.com/hakancode/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-sky-100 text-sky-500 border-0 py-3 px-3 focus:outline-none hover:bg-sky-500 hover:text-white rounded-full text-base  mt-4 md:mt-0 shadow-xl"
        >
          <FaTwitter className="h-6 w-6" />
        </a>
        <a
          href="mailto:hakan.gundogdu@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-sky-100 text-sky-500 border-0 py-3 px-3 focus:outline-none hover:bg-sky-500 hover:text-white rounded-full text-base  mt-4 md:mt-0 shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </div>
      {/* <div className=" mx-auto items-center bg-sky-100 text-sky-500 border-0 py-3 px-3  rounded-full animate-bounce ">
        <FaArrowDown />
      </div> */}
    </section>
  );
};

export default Hero;
