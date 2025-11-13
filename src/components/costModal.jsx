import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Example({ serviceModal, setServiceModal }) {
  return (
    <Transition.Root show={serviceModal} as={Fragment}>
      <Dialog as="div" className="relative " onClose={setServiceModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute z-[1000px] top-0 left-0  -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-[black] "
                        onClick={() => setServiceModal(false)}
                      >
                        <span className="sr-only">Close panel</span>
                       
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex z-[1000px] h-[270px] flex-col mt-[200px] mr-1 overflow-hidden bg-[#15A7AD] py-6 rounded-md shadow-xl">
                    <div className="container grid grid-cols-1 p-3">
                      <Link to="/cost-estimating-services/">
                        <p className="hover:text-black text-[16px] hover:font-bold font-medium text-white ">
                          COST ESTIMATING
                        </p>
                      </Link>    
                      <Link to="/construction-takeoff-services/">
                        <p className="hover:text-black text-[16px] hover:font-bold font-medium text-white pt-2">
                          CONSTRUCTION TAKEOFF SERVICES
                        </p>
                      </Link>
                      <Link to="/quantity-takeoff-services/">
                        <li className="hover:text-black text-[12px] hover:font-bold font-medium text-white pt-2">
                          QUANTITY TAKEOFF
                        </li>
                      </Link>

                      <Link to="/material-takeoff-services/">
                        <li className="hover:text-black text-[12px] hover:font-bold font-medium text-white pt-2">
                          MATERIAL TAKEOFF
                        </li>
                      </Link>
   
                      <Link to="/cpm-scheduling/">
                        <p className="hover:text-black text-[16px] hover:font-bold font-medium text-white pt-2">
                          SCHEDULING
                        </p>
                      </Link>
                      <Link to="/planning/">
                        <p className="hover:text-black hover:font-bold text-[16px] font-medium text-white pt-2">
                          PLANNING
                        </p>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
