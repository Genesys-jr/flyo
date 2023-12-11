import Image from "next/image";
import React from "react";

import intro from "../../../public/images/intro.png";

const Intro = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white space-y-7 ">
      <div>
        <Image
          src={intro}
          alt=""
        />
      </div>
      <div>
        <p className="text-3xl font-bold flex flex-col">
          All your files in one secure location,{" "}
          <span className="flex justify-center">accessible anywhere</span>{" "}
        </p>
      </div>
      <div className="small-regular text-light-3 ">
        <p className="flex flex-col">
          Fylo stores all your most important files in one secure location.
          <span className="pl-2">
            Access them wherever you need, share, and collaborate with
          </span>
          <span className="flex justify-center">
            friends, family, and co-workers
          </span>
        </p>
      </div>
      <button className="rounded-full  bg-cyan-600 py-2 px-10 hover:bg-cyan-500">
        Get Started
      </button>
    </section>
  );
};

export default Intro;
