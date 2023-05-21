import React from "react";
import minsoo from "../public/minsoo.png";
import paulian from "../public/paulian.png";
import mika from "../public/mika.jpeg";

import Image from "next/image";

const Contact = () => {
  return (
    <div className="h-full gap-y-0 flex flex-col justify-center items-start text-2xl pt-20 p-40">
      <h1 className="font-extrabold tracking-tight leading-none text-gray-900 text-7xl dark:text-white mb-8">
        Contact us today to discover the power of personalized healthcare and
        unlock the potential for a healthier, happier life.
      </h1>
      <div className="flex gap-x-10">
        <div className="flex w-[400px] flex-col items-center justify-center">
          <Image src={minsoo} />
          <p className="text-xl text-black pt-3 font-semibold">Minsoo Kim</p>
          <p className="text-xl font-normal text-black">minsoo@climbs.com</p>
        </div>
        <div className="flex w-[400px] flex-col items-center justify-center rounded-full">
          <Image src={mika} className="rounded-[80px]" />
          <p className="text-xl text-black pt-3 font-semibold">Mika Shanela</p>
          <p className="text-xl font-normal text-black">mika@gradpics.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
