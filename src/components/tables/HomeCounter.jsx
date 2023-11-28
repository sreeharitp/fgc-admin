import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AddData5 from "../popups/AddData5";
import EditData5 from "../popups/EditData5";
import AddData15 from "../popups/AddData15";
import EditData15 from "../popups/EditData15";

const HomeCounter = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData15 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Customers</th>
            <th>Track Record</th>
            <th>Clients</th>
            <th>Projects</th>
            <th>Reviews</th>
            <th className="w-1/5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23</td>
            <td>54</td>
            <td>67 </td>
            <td>34</td>
            <td>54</td>
            <td>
              <div className="flex items-center gap-3">
                <EditData15 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>54</td>
            <td>67 </td>
            <td>34</td>
            <td>54</td>
            <td>
              <div className="flex items-center gap-3">
              <EditData15 />
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

export default HomeCounter;
