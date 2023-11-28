import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import demo from "/public/demo.png";
import Image from "next/image";
import AddData8 from "../popups/AddData8";
import EditData8 from "../popups/EditData8";

const ContactHero = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData8 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>We manage your IT, so you can manage your business.</p>
              <p className="arabic">
                نحن ندير تكنولوجيا المعلومات الخاصة بك، حتى تتمكن من إدارة عملك.
              </p>
            </td>
            <td>87887878787</td>
            <td>demo@gmail.com</td>
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
                <EditData8 />
                <button className="text-[#f06548] px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 bg-[#fde8e4] flex items-center gap-2">
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>We manage your IT, so you can manage your business.</p>
              <p className="arabic">
                نحن ندير تكنولوجيا المعلومات الخاصة بك، حتى تتمكن من إدارة عملك.
              </p>
            </td>
            <td>87887878787</td>
            <td>demo@gmail.com</td>
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
              <EditData8 />
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

export default ContactHero;
