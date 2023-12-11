import Image from "next/image";
import React from "react";

import bgQuotes from "../../../public/images/bgQuotes.png";
import profile1 from "../../../public/images/profile1.jpg";
import profile2 from "../../../public/images/profile2.jpg";
import profile3 from "../../../public/images/profile3.jpg";

const Testimonials = () => {
  return (
    <section className="text-white mx-20 ">
      <div>
        <Image
          src={bgQuotes}
          alt="Quotes"
        />
      </div>
      <div className="flex  gap-5">
        <div className="border p-4 rounded-md">
          <p>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex items-center space-x-2 mt-4 ">
            <Image
              src={profile1}
              alt={"profile1"}
              width={40}
              className="rounded-full"
            />
            <p className="flex flex-col">
              Satish Patel <span>founder & CEO, Huddle</span>
            </p>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex items-center space-x-2 mt-4">
            <Image
              src={profile2}
              alt={"profile2"}
              width={40}
              className="rounded-full"
            />
            <p className="flex flex-col">
              Bruce McKenzie <span>founder & CEO, Huddle</span>
            </p>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex items-center space-x-2 mt-4 ">
            <Image
              src={profile3}
              alt={"profile3"}
              width={40}
              className="rounded-full"
            />
            <p className="flex flex-col">
              Iva Boyd <span>founder & CEO, Huddle</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
