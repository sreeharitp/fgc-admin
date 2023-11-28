"use client";

import TeamHero from "@/components/tables/TeamHero";
import TeamList from "@/components/tables/TeamList";
import TeamTextSection from "@/components/tables/TeamTextSection";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OurTeam() {
  return (
    <div className="w-full ">
      <div>
        <h3 className="font-semibold text-[30px] mb-5">Our Team Page</h3>
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
            Team List
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
            <TeamHero />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <TeamList />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <TeamTextSection />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
