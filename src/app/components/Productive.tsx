import React from "react";
import Link from "next/link";
import Image from "next/image";

import stayProductive from "../../../public/images/stayProductive.png";

const Productive = () => {
  return (
    <>
      <section className="flex text-white mx-20 mt-10 pt-10 space-x-5">
        <div>
          <Image
            src={stayProductive}
            alt="stay productive"
          />
        </div>
        <div className="space-y-3">
          <h1 className="flex flex-col text-3xl font-bold">
            Stay productive, <span>wherever you are</span>
          </h1>
          <p>
            Never let the location be an issue when accessing your files. Fylo
            has you covered for all of your life storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family, and
            colleagues for collaboration. No email attachments required.
          </p>
          <Link
            href={"#"}
            className=" active:underline"
          >
            See how Fylo works
          </Link>
        </div>
      </section>
    </>
  );
};

export default Productive;
