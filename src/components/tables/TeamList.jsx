
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import demo from "/public/demo.png";
import AddData from "../popups/AddData1";
import EditData1 from "../popups/EditData1";
import AddData10 from "../popups/AddData10";
import EditData10 from "../popups/EditData10";
import AddData11 from "../popups/AddData11";
import EditData11 from "../popups/EditData11";

const TeamList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData11 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Image</th>
            <th className="w-1/5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Mat Zalman</p>
            </td>
            <td>
              <p>
               CEO
              </p>
              
            </td>
            
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
                <EditData11 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mat Zalman</p>
            </td>
            <td>
              <p>
               CEO
              </p>
              
            </td>
            
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
              <EditData11 />                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
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

export default TeamList;
