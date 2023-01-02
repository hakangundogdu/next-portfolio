import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container  px-0 sm:px-12  flex  items-center justify-center    ">
      <div className="mx-auto py-16   rounded-xl bg-slate-100  px-auto w-full  ">
        <h2 className="text-2xl mb-6 text-center font-bold text-slate-900">
          Contact Me
        </h2>
        <div className="flex justify-center space-x-4">
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
            className="inline-flex items-center  text-slate-500 0 py-3 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl"
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
        <h2 className=" text-center  mt-6 text-slate-400">
          © {new Date().getFullYear()} Hakan Gundogdu
        </h2>
      </div>
    </div>
  );
};

export default Footer;
