import React from 'react';

const Nav = () => {
  return (
    <header className="text-slate-500  body-font">
      <div className="container mx-auto mt-5 flex flex-wrap flex-col md:flex-row items-center">
        <a href="/" className="flex    items-center">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </a>
        <nav className=" md:ml-auto hidden md:flex flex-wrap items-center text-base  justify-center">
          <a href="/about" className="mr-16 hover:text-sky-500">
            About
          </a>
          <a href="/work" className="mr-16 hover:text-sky-500">
            Work
          </a>
          <a href="/testimonials" className="mr-16 mr- hover:text-sky-500 ">
            Testimonials
          </a>
          <a
            href="mailto:hakan.gundogdu@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center bg-sky-100 text-sky-500 border-0 py-1 px-3 focus:outline-none hover:bg-sky-500 hover:text-white  rounded-full text-base  mt-4 md:mt-0 shadow-xl"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
