import React from 'react';
import { FaCaretUp } from 'react-icons/fa';

const Up = () => {
  return (
    <a
      className="hidden sm:block fixed right-10 bottom-10 rounded-xl items-center bg-slate-100 text-slate-500 z-30 py-3 px-3"
      href="#top"
    >
      <FaCaretUp />
    </a>
  );
};

export default Up;
