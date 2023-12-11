import Image from "next/image";
import React from "react";

import logo from "../../../public/images/logo.svg";
import location from "../../../public/images/location.svg";
import phone from "../../../public/images/phone.svg";
import email from "../../../public/images/email.svg";

const Footer = () => {
  return (
    <>
      <section className="text-white mt-10">
        <div className="flex justify-center ">
          <div className="border p-4 rounded-md">
            <h1 className="flex justify-center text-3xl font-bold">
              Get early access today
            </h1>
            <p className="flex flex-col">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any{" "}
              <span>
                questions, our support team would be happy to help you.
              </span>
            </p>
            <input
              type="text"
              className="px-10 rounded-xl mr-6"
            />
            <button>Get Started For Free</button>
          </div>
        </div>
      </section>
      <footer className="text-white">
        <div className="flex">
          <div>
            <Image
              src={logo}
              alt={"logo"}
            />
            <Image
              src={location}
              alt={""}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              porro sequi ex eveniet totam magnam non beatae voluptas a, odio
              necessitatibus dolore. Itaque, quam.
            </p>
          </div>
          <div>
            <div>
              <Image
                src={phone}
                alt={""}
              />
              <p>+233593764249</p>
            </div>
            <div>
              <Image
                src={email}
                alt={""}
              />
              <p>+233593764249</p>
            </div>
          </div>
          <div className="">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </div>
          <div>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </div>
        </div>
        {/* <div>
          <li>
            <Image
              src={""}
              alt={""}
            />
          </li>
          <li></li>
          <li></li>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
