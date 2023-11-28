
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiTwotoneEdit } from "react-icons/ai";
import EditForm2 from '../forms/EditForm2';


export default function EditData2() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
      <button onClick={openModal} className=" px-4 py-1 text-[18px]  rounded-lg font-medium mr-2 text-[#0ab39c] bg-[#daf4f0] flex items-center gap-2">
                  <AiTwotoneEdit size={20} />
                  Edit
                </button>
      </div>

      <Transition  show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[26px] font-semibold leading-6 text-gray-900"
                  >
                    Edit Data
                  </Dialog.Title>
                  <div className="mt-5">
                   <EditForm2/>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
