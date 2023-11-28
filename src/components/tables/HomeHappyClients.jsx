import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import demo from "/public/demo.png";
import AddData2 from "../popups/AddData2";
import EditData2 from "../popups/EditData2";

const HomeHappyClients = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData2 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="w-4/5">Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image
                src={demo}
                height={100}
                width={100}
                className="object-cover"
                alt="image"
              />
            </td>
            <td>
              <div className="flex items-center gap-3">
                <EditData2 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image
                src={demo}
                height={100}
                width={100}
                className="object-cover"
                alt="image"
              />
            </td>
            <td>
              <div className="flex items-center gap-3">
                <EditData2 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image
                src={demo}
                height={100}
                width={100}
                className="object-cover"
                alt="image"
              />
            </td>
            <td>
              <div className="flex items-center gap-3">
                <EditData2 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeHappyClients;
