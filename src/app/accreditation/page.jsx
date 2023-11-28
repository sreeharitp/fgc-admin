"use client";

import { Tab } from "@headlessui/react";
import AccreditationHero from "@/components/tables/AccreditationHero";
import AccreditationTimeline from "@/components/tables/AccreditationTimeline";
import AccreditationTextSection from "@/components/tables/AccreditationTextSection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Accreditation() {
  return (
    <div className="w-full ">
      <div>
        <h3 className="font-semibold text-[30px] mb-5">Accreditation Page</h3>
      </div>
      <Tab.Group>
        <Tab.List className="flex mb-4">
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2  rounded-lg  font-medium mr-2 outline-none",
                selected
                  ? "text-red-600  bg-red-100"
                  : "border border-slate-300"
              )
            }
          >
           Hero Section
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2  rounded-lg  font-medium mr-2 outline-none",
                selected
                  ? "text-red-600  bg-red-100"
                  : "border border-slate-300"
              )
            }
          >
          Timeline
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2  rounded-lg font-medium mr-2 outline-none",
                selected ? "text-red-600 bg-red-100" : "border border-slate-300"
              )
            }
          >
       Text Section
          </Tab>
         
          
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-6",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AccreditationHero/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AccreditationTimeline/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
           <AccreditationTextSection/>
          </Tab.Panel>
          
          
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
