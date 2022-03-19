import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpenHandler = (event: any) => {
    setIsOpen(true);
  };
  const menuCloseHandler = (event: any) => {
    setIsOpen(false);
  };

  const router = useRouter();

  const changeURL = () => {
    setTimeout(() => {
      router.push('/');
    }, 1);
  };

  return (
    <header className="text-slate-500  body-font">
      <nav className="container mx-auto mt-6 flex justify-between px-6 md:px-12 items-center  md:max-w-screen-lg">
        <a href="/" className="flex  items-center">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </a>
        {/* <div className="group md:ml-5 items-center border border-gray-200 rounded-lg relative px-3 py-1.5 text-xs font-medium">
          <span className="w-2.5 h-2.5 bg-teal-500 rounded-full absolute -top-1 -right-1"></span>
          <span className="group-hover:hidden w-2.5 h-2.5 bg-teal-500 rounded-full absolute -top-1 -right-1"></span>
          <span className="group-hover:hidden text-slate-900 ">
            Open to Work
          </span>{' '}
          <a
            className="hidden group-hover:block text-slate-900"
            href="mailto:hakan.gundogdu@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
          <span className="animate-ping w-2.5 h-2.5 bg-teal-500/75 rounded-full absolute -top-1 -right-1"></span>
          <span className="group-hover:hidden animate-ping w-2.5 h-2.5 bg-teal-500/75 rounded-full absolute -top-1 -right-1"></span>
        </div> */}

        <div className=" md:ml-auto hidden md:flex  text-base space-x-12 justify-center">
          <Link href="/#about">
            <a className=" hover:text-slate-900 " onClick={changeURL}>
              About
            </a>
          </Link>
          <Link href="/#projects">
            <a className=" hover:text-slate-900 " onClick={changeURL}>
              Projects
            </a>
          </Link>
          <Link href="/#testimonials">
            <a className=" hover:text-slate-900 " onClick={changeURL}>
              Testimonials
            </a>
          </Link>
          <Link href="/#testimonials">
            <a
              className=" hover:text-slate-900 "
              href="mailto:hakan.gundogdu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </Link>
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
