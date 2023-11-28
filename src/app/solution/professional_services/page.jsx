

"use client";

import { Tab } from "@headlessui/react";
import SolutionProfessionalBanner from "@/components/tables/SolutionProfessionalBanner";
import SolutionProfessionalSection1 from "@/components/tables/SolutionProfessionalSection1";
import SolutionProfessionalSection2 from "@/components/tables/SolutionProfessionalSection2";
import SolutionProfessionalSection3 from "@/components/tables/SolutionProfessionalSection3";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfessionalServices() {
  return (
    <div className="w-full ">
      <div>
        <h3 className="font-semibold text-[30px] mb-5">Professional Services</h3>
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
            Banner Section
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
            Section 1
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2  rounded-lg font-medium mr-2 outline-none",
                selected ? "text-red-600 bg-red-100" : "border border-slate-300"
              )
            }
          >
            Section 2
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2  rounded-lg font-medium mr-2 outline-none",
                selected ? "text-red-600 bg-red-100" : "border border-slate-300"
              )
            }
          >
            Section 3
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-6",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <SolutionProfessionalBanner />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <SolutionProfessionalSection1 />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <SolutionProfessionalSection2 />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <SolutionProfessionalSection3 />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
