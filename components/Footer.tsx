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
    <div className="container  px-4 sm:px-12  flex  items-center justify-center    ">
      <div className="mx-auto py-16  flex justify-center space-x-4 rounded-xl bg-slate-100  px-auto w-full  ">
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
  );
};

export default Footer;
