import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpenHandler = (event: any) => {
    setIsOpen(true);
  };
  const menuCloseHandler = (event: any) => {
    setIsOpen(false);
  };

  return (
    <header className="text-slate-500  body-font">
      <nav className="container mx-auto mt-6 flex justify-between px-6 md:px-12 items-center  md:max-w-screen-lg">
        <a href="/" className="flex  items-center">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </a>
        <div className=" md:ml-auto hidden md:flex  text-base space-x-12 justify-center">
          <a href="#about" className=" hover:text-slate-900 ">
            About
          </a>
          <a href="#projects" className=" hover:text-slate-900">
            Projects
          </a>
          <a href="#testimonials" className="  hover:text-slate-900 ">
            Testimonials
          </a>
          <a
            href="mailto:hakan.gundogdu@gmail.com"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-slate-900"
          >
            Contact
          </a>
        </div>
        {!isOpen && (
          <button
            className=" flex md:hidden text-2xl text-slate-900"
            onClick={menuOpenHandler}
          >
            <FaBars />
          </button>
        )}

        {isOpen && (
          <button
            className=" flex md:hidden text-2xl text-slate-900"
            onClick={menuCloseHandler}
          >
            <FaTimes />
          </button>
        )}
      </nav>
      {isOpen && (
        <div className=" absolute z-50 block h-screen w-full bg-gradient-to-b from-primary md:hidden">
          <div className="mx-6 mt-6 flex h-96 text-xl text-slate-900 flex-col items-center justify-center space-y-8 bg-white ">
            <a
              className=" text-primary"
              href="#about"
              onClick={menuCloseHandler}
            >
              About
            </a>
            <a
              className=" text-primary"
              href="#projects"
              onClick={menuCloseHandler}
            >
              Projects
            </a>
            <a
              className=" text-primary"
              href="#testimonials"
              onClick={menuCloseHandler}
            >
              Testimonials
            </a>
            <a
              className=" text-primary"
              href="#contact"
              onClick={menuCloseHandler}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
