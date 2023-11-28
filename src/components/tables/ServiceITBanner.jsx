import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import demo from "/public/demo.png";
import AddData from "../popups/AddData1";
import EditData1 from "../popups/EditData1";
import AddData12 from "../popups/AddData12";
import EditData12 from "../popups/EditData12";

const ServiceITBanner = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData12 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Image&nbsp;Arabic</th>
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
              <Image
                src={demo}
                height={100}
                width={100}
                className="object-cover"
                alt="image"
              />
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
                <EditData12 />
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
              <Image
                src={demo}
                height={100}
                width={100}
                className="object-cover"
                alt="image"
              />
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
              <EditData12 />
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
              <Image
                src={demo}
                height={100}
                width={100}
                className="object-cover"
                alt="image"
              />
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
              <EditData12 />
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

export default ServiceITBanner;
