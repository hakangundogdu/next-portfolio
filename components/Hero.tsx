import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import Skills from "./Skills";

const Hero = () => {
  return (
    <section className="container flex flex-col content-center p-6 max-w-2xl">
      <div className="mx-auto pt-12 md:pt-24 rounded-xl  px-auto w-full bg-top ">
        <div className=" mx-auto flex flex-col gap-4 animate-fade ">
          <h1 className="sm:text-4xl text-3xl font-bold text-slate-900">
            Hakan Gundogdu
          </h1>
          <p className=" text-lg sm:text-2xl text-slate-600">
            Full Stack Software Engineer
          </p>

          <p className="text-md md:text-lg text-slate-500">
            Hi, I'm Hakan, a seasoned developer specializing in building
            interactive, high-performance applications with React, Next.js,
            Node.js, and TypeScript. With a unique blend of technical expertise
            and creative insight I craft seamless, user-centric digital
            experiences.
          </p>
        </div>

        <div className="mx-auto flex my-8 space-x-4 animate-fade ">
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
          {/* <a
            href="https://www.twitter.com/hakancode/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-slate-100 text-slate-500 0 py-3 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl"
          >
            <FaTwitter className="h-6 w-6" />
          </a> */}
          <a
            href="mailto:hakan.gundogdu@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-slate-100 text-slate-500 0 py-3 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default Hero;
