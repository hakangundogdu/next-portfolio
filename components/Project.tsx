import React from 'react';

type AppProps = {
  image: string;
  title: string;
  description: string;
  live: string;
  code: string;
  style: string;
};

const Project = ({
  image,
  title,
  description,
  live,
  code,
  style,
}: AppProps) => {
  return (
    <section className="container mb-6">
      <div className="container   ">
        <div className=" flex flex-col overflow-hidden border border-slate-200 shadow-xl rounded-xl ">
          <div className="w-full max-h-[19rem] overflow-hidden duration-300 ease-in-out hover:scale-102 ">
            <a href={live} target="_blank" rel="noreferrer">
              <img
                src={image}
                alt="project"
                className=" w-full object-fit h-[19rem]  "
              />{' '}
            </a>
          </div>
          <div className={style}>
            <div>
              <p className=" text-2xl  mb-4 font-semibold  text-white">
                {title}
              </p>
              <p className="  mb-4  text-white">{description}</p>
            </div>
            <div className="flex space-x-4  text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <a href={live} target="_blank" rel="noreferrer">
                  <button className="h-10 px-6 font-semibold rounded-md bg-slate-900 text-white">
                    Live
                  </button>
                </a>

                <a href={code} target="_blank" rel="noreferrer">
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-300 bg-slate-100 text-slate-900">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
