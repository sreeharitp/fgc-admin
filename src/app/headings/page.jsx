 
"use client";

import Headings from "@/components/tables/Headings";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Heading() {
  return (
    <div className="w-full ">
      <div>
        <h3 className="font-semibold text-[30px] mb-5">Headings
        </h3>
      </div>
      <div
            className={classNames(
              "rounded-xl bg-white p-6",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <Headings/>
          </div>
    </div>
  );
}
