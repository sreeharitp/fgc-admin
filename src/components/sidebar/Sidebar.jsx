"use client";

import Image from "next/image";
import React, { useState } from "react";
import logowhite from "/public/logo-white.svg";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const menus = [
    {
      id: 1,
      title: "Services",
      items: [
        {
          name: "IT Support",
          url: "/services/it_support",
        },
        {
          name: "Project Delivery",
          url: "/services/project_delivery",
        },
        {
          name: "Business Continuity",
          url: "/services/business_continuity",
        },
      ],
    },
    {
      id: 2,
      title: "Solutions",
      items: [
        {
          name: "Managed Services",
          url: "/solution/managed_services",
        },
        {
          name: "IT Support",
          url: "/solution/it_support",
        },
        {
          name: "Communications",
          url: "/solution/communications",
        },
        {
          name: "Professional Services",
          url: "/solution/professional_services",
        },
        {
          name: "Cyber Security",
          url: "/solution/cyber_security",
        },
        {
          name: "MCC Integrator (CCTV)",
          url: "/solution/mcc_integrator",
        },
      ],
    },
    {
      id: 3,
      title: "Company",
      items: [
        {
          name: "About Us",
          url: "/about",
        },
        {
          name: "Our Team",
          url: "/our_team",
        },
        {
          name: "Accreditation",
          url: "/accreditation",
        },
      ],
    },
  ];
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    if (openPanel === panel) {
      setOpenPanel(null);
    } else {
      setOpenPanel(panel);
    }
  };

  return (
    <div className="w-[300px] bg-black h-[100vh] fixed left-0 top-0 z-20">
        <div className="h-[90px] flex items-center px-5 border-b border-[#2c2c2c]">
          <Image height={25} src={logowhite} alt="logo" />
        </div>
      <div className="h-[80vh] overflow-y-scroll scrollbar">
        <div className="px-5 mt-20">
          <Link
            href="/"
            className="w-full text-white text-left text-[24px] font-normal py-4 flex items-center justify-between gap-3    "
          >
            Dashboard
          </Link>
          <Link
            href="/home"
            className="w-full text-white text-left text-[24px]  font-normal py-4 flex items-center justify-between gap-3    "
          >
            Home
          </Link>
          {menus.map((links) => (
            <Disclosure defaultOpen={false} key={links.id}>
              {({ open }) => (
                <>
                  <button
                    className={`w-full text-left  font-normal text-[24px]  text-white py-4 flex items-center justify-between gap-3 ${
                      openPanel == links.id ? "text-[#D02102]" : ""
                    }`}
                    onClick={() => togglePanel(links.id)}
                  >
                    {links.title}
                    <IoIosArrowDown
                      size={20}
                      className={`${
                        openPanel == links.id ? "rotate-180 transform" : ""
                      }  text-white`}
                    />
                  </button>
                  <Disclosure.Panel static={openPanel == links.id}>
                    <ul className="px-5">
                      {links.items.map((item) => (
                        <li
                          key={item.name}
                          className=" text-white font-normal py-2"
                        >
                          <Link href={item.url}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          <Link
            href="/contact"
            className="w-full text-left text-[24px] text-white  font-normal py-4 flex items-center justify-between gap-3    "
          >
            Contact Us
          </Link>
          <Link
            href="/headings"
            className="w-full text-left text-[24px] text-white  font-normal py-4 flex items-center justify-between gap-3    "
          >
Headings          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
