import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AddData5 from "../popups/AddData5";
import EditData5 from "../popups/EditData5";
import AddData14 from "../popups/AddData14";
import EditData14 from "../popups/EditData14";

const Headings = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData14 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Home Service</th>
            <th>Home Clients</th>
            <th>Contact Get In Touch</th>
            <th>Meet Team</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <EditData14 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <EditData14 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <p>We manage your IT,</p>
              <p className="arabic">نحن حتى تتمكن من إدارة عملك.</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <EditData14 />
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

export default Headings;
