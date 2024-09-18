import React from "react";

const projects = () => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <iframe
        src="/Projects.pdf"
        className="w-full h-full"
        title="Sample Projects"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default projects;
