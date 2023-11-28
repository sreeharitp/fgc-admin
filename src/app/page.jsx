import Charts from "@/components/chart/Charts";
import React from "react";
import { FiArrowUpRight,FiArrowDownRight } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <div>
      <h3 className="font-semibold text-[30px] mb-5">Dashboard</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-[10px] p-6 box-shadow flex items-start justify-between">
          <div>
            <p className="font-medium text-[18px] text-gray-500 uppercase">
              Customers
            </p>
            <h1 className="font-bold text-[45px] mt-3 mb-3">2745</h1>
            <span className="font-medium text-[20px] flex items-center gap-2 text-green-600">
              <FiArrowUpRight />
              +16.24 %
            </span>
          </div>
          <div className="h-[70px] w-[70px] flex items-center justify-center rounded-md bg-[#daf4f0]">
            <HiOutlineUserGroup className="text-[#0ab39f]" size={40} />
          </div>
        </div>
        <div className="bg-white rounded-[10px] p-6 box-shadow flex items-start justify-between">
          <div>
            <p className="font-medium text-[18px] text-gray-500 uppercase">
              Customers
            </p>
            <h1 className="font-bold text-[45px] mt-3 mb-3">2745</h1>
            <span className="font-medium text-[20px] flex items-center gap-2 text-green-600">
              <FiArrowUpRight />
              +16.24 %
            </span>
          </div>
          <div className="h-[70px] w-[70px] flex items-center justify-center rounded-md bg-[#fde8e4]">
            <HiOutlineUserGroup className="text-[#f06548]" size={40} />
          </div>
        </div>
        <div className="bg-white rounded-[10px] p-6 box-shadow flex items-start justify-between">
          <div>
            <p className="font-medium text-[18px] text-gray-500 uppercase">
              Customers
            </p>
            <h1 className="font-bold text-[45px] mt-3 mb-3">2745</h1>
            <span className="font-medium text-[20px] flex items-center gap-2 text-red-600">
            <FiArrowDownRight />
              -20.24 %
            </span>
          </div>
          <div className="h-[70px] w-[70px] flex items-center justify-center rounded-md bg-[#dff0fa]">
            <HiOutlineUserGroup className="text-[#2884b7]" size={40} />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 mt-6 rounded-md box-shadow w-2/3">
        <Charts/>
      </div>
    </div>
  );
};

export default Dashboard;
