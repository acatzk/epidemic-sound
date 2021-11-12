import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface CreateModalProps {
  isOpen: boolean
  setIsOpen: Function
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 pb-10 md:pb-0 text-center bg-modern-black bg-opacity-60">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white inline-block w-full max-w-[90rem] h-[80vh] p-6 my-8 overflow-hidden text-left align-middle transition-all transform border-2 border-honey bg-modern-black text-modern-white shadow-xl rounded-md">
              <Dialog.Title
                as="h1"
                className="flex flex-row items-center justify-between w-full text-lg font-medium leading-6 text-modern-white border-b pb-2"
              >
                <span className="font-semibold text-2xl">Sound Registration</span>
                <button
                  className="focus:outline-none bg-indigo-500 py-1.5 px-4 text-base font-medium text-white rounded-md hover:bg-indigo-600 transition ease-in-out duration-150"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Save
                </button>
              </Dialog.Title>
              <div className="mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis itaque quam
                earum laboriosam, quaerat quos blanditiis nihil et, illum, sequi veritatis. Autem et
                quibusdam quisquam deserunt eaque porro impedit quam.
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CreateModal
