

"use client";

import { Tab } from "@headlessui/react";
import ServiceProjectBanner from "@/components/tables/ServiceProjectBanner";
import ServiceProjectSection1 from "@/components/tables/ServiceProjectSection1";
import ServiceProjectSection2 from "@/components/tables/ServiceProjectSection2";
import ServiceProjectSection3 from "@/components/tables/ServiceProjectSection3";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectDelivery() {
  return (
    <div className="w-full ">
      <div>
        <h3 className="font-semibold text-[30px] mb-5">Project Delivery</h3>
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
            <ServiceProjectBanner/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <ServiceProjectSection1/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
           <ServiceProjectSection2/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <ServiceProjectSection3/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
