import Image from "next/image";
import React from "react";

import security from "../../../public/images/security.svg";
import anywhere from "../../../public/images/anywhere.svg";
import collaboration from "../../../public/images/collaboration.svg";
import anyfile from "../../../public/images/anyfile.svg";

const Features = () => {
  return (
    <section className="grid grid-cols-2 gap-5  text-white mx-20">
      <div className="flex flex-col justify-center items-center space-y-2">
        <Image
          src={anywhere}
          alt="Anywhere access"
          className="flex justify-center items-center"
        />
        <p>Access your files, anywhere</p>
        <p className="flex flex-col">
          The ability to use a smartphone, tablet, or computer{" "}
          <span>to access your account means your files will follow you</span>{" "}
          <span className="flex justify-center">everywhere.</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Image
          src={security}
          alt="security"
        />
        <p>Security you can trust</p>
        <p className="flex flex-col">
          2-factor authentication and user-controlled encryption are{" "}
          <span className="px-8">
            just a couple of security features we allow to help
          </span>
          <span className="flex justify-center">secure your files.</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Image
          src={collaboration}
          alt="Collaboration"
        />
        <p>Real-time collaboration</p>
        <p className="flex flex-col">
          Securely share files and folders with friends, family, and{" "}
          <span>colleagues for live collaboration. No email attachments</span>{" "}
          <span className="flex justify-center"> required.</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Image
          src={anyfile}
          alt="Store any file"
        />
        <p>Store any type of file</p>
        <p className="flex flex-col">
          <span className="pl-6">
            Where you're sharing holidays photo or work
          </span>{" "}
          <span>documents, Fylo has you covered allowing for all file </span>{" "}
          <span className="flex justify-center">
            types to be securely stored and shared.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Features;
