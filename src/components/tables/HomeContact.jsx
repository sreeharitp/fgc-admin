import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AddData5 from "../popups/AddData5";
import EditData5 from "../popups/EditData5";

const HomeContact = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[25px] font-semibold ">Data Table</h5>

        <AddData5 />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Email</th>
            <th>Phone</th>
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
             demo@gmail.com
            </td>
            <td>9878767656</td>
            <td>
              <div className="flex items-center gap-3">
              <EditData5 />
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
             demo@gmail.com
            </td>
            <td>9878767656</td>
            <td>
              <div className="flex items-center gap-3">
                <EditData5 />
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
             demo@gmail.com
            </td>
            <td>9878767656</td>
            <td>
              <div className="flex items-center gap-3">
              <EditData5 />
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

export default HomeContact;
