import React from 'react';

const Nav = () => {
  return (
    <header className="text-gray-900  body-font">
      <div className="container mx-auto mt-5 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex text-gray-900 hover:text-gray-500 ">
          <span className="ml-3 text-lg ">Hakan Gundogdu</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/about" className="mr-5 hover:text-gray-500">
            About
          </a>
          <a href="/work" className="mr-5 hover:text-gray-500">
            Work
          </a>
          <a href="/testimonials" className="mr-5 hover:text-gray-500 ">
            Testimonials
          </a>
        </nav>
        <a
          href="mailto:hakan.gundogdu@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center bg-sky-100 text-sky-500 border-0 py-1 px-3 focus:outline-none hover:bg-sky-500 hover:text-white  rounded-full text-base  mt-4 md:mt-0 shadow-xl"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Nav;
