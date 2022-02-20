import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [item, setItem] = useState(0);

  const nextItem = (event: any) => {
    item === 0 ? setItem(1) : setItem(0);
  };

  const list = [
    '"I am the CEO of 3 companies and am interacting with service providers on a regular basis. Due to my time constraints I am unfortunately writing feedback not often enough, but this time I really want to give Hakan a big shoutout. What he did was absolutely great: Timewise, pricewise, workwise. He is for sure on our mark for future work. Really, this was extremely good." Dr. Sven Hildebrandt',
    '"It was a pleasure to work with Hakan. Brilliant communication from the very beginning. Quality of work was to an excellent standard & completed well before the deadline - which was a very tight deadline to start with. Would most definitely work with Hakan again & I would highly recommend him to anyone looking for high quality work." Claire Dobson',
  ];

  return (
    <section
      id="testimonials"
      className="container  px-4 sm:px-12 py-16 flex flex-col  animate-fade   "
    >
      <h1 className="text-2xl mb-6 font-bold text-slate-900">Testimonials</h1>
      <div className=" relative flex flex-col py-16  rounded-xl bg-slate-900  px-8 shadow-xl">
        <p className=" text-lg mb-8 text-slate-400 "> {list[item]} </p>

        <div className="flex space-x-2 absolute right-8 bottom-8 items-center ">
          <button
            onClick={nextItem}
            className="   bg-slate-700 hover:bg-slate-400 text-slate-400 hover:text-slate-50 py-2 px-2 rounded-lg "
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextItem}
            className="  bg-slate-700 hover:bg-slate-400 text-slate-400 hover:text-slate-50 py-2 px-2 rounded-lg "
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
