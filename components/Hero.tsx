import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="container px-12 py-4 flex flex-col content-center   ">
      <div className="mx-auto py-12 md:py-36 rounded-xl  px-auto w-full bg-top ">
        <div className=" mx-auto flex flex-col text-center animate-fade ">
          <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-slate-900">
            Hakan Gundogdu
          </h1>
          <p className=" text-lg sm:text-xl text-slate-500">
            Frontend Developer based in{" "}
            <a
              className="hover:text-slate-900 text-slate-700"
              href="https://en.wikipedia.org/wiki/izmir"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Izmir, Turkey{" "}
            </a>
          </p>
        </div>
        <div className="mx-auto flex mt-10 justify-center space-x-4 pt-6 animate-fade ">
          <a
            href="https://www.linkedin.com/in/hakangundogdu1/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-slate-100 text-slate-500 0 py-3 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/hakangundogdu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-slate-100 text-slate-500 0 py-3 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.twitter.com/hakancode/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-slate-100 text-slate-500 0 py-3 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="mailto:hakan.gundogdu@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-slate-100 text-slate-500 0 py-3 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
