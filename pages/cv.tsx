import React from "react";

const cv = () => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <iframe
        src="/HakanGundogdu.pdf"
        className="w-full h-full"
        title="Hakan Gundogdu CV"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default cv;
