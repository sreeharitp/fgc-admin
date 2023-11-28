
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import demo from "/public/demo.png";
import AddData13 from "../popups/AddData13";
import EditData13 from "../popups/EditData13";

const SolutionCommunicationSection1 = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData13 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th className="w-1/3">Points</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>We manage your IT</p>
              <p className="arabic">
                نحن ندير تكنولوجيا المعلومات الخاصة بك، حتى تتمكن من إدارة عملك.
              </p>
            </td>
            <td>
              <p>
                Take charge of your business continuity with innovative IT
                solutions
              </p>
              <p className="arabic">
                تولى مسؤولية استمرارية أعمالك من خلال حلول تكنولوجيا المعلومات
                المبتكرة
              </p>
            </td>
            <td>
              <ul className="list-disc ml-5">
                <li>Take charge of your business continuity</li>
                <li>Take charge of your business continuity</li>
                <li>Take charge of your business continuity</li>
              </ul>
              <ul className="list-disc ml-5">
                <li className="arabic">
                  أعمالك من خلال حلول تكنولوجيا المعلومات
                </li>
                <li className="arabic">
                  أعمالك من خلال حلول تكنولوجيا المعلومات
                </li>
                <li className="arabic">
                  أعمالك من خلال حلول تكنولوجيا المعلومات
                </li>
              </ul>
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
                <EditData13 />
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

export default SolutionCommunicationSection1;
