import React from "react";

function Modal() {
  return (
    <div>
      <div className="p-6 space-y-6 bg-white">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          bhkbfdjh,fc
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          chdjsbfdjhb cdj{" "}
        </p>
      </div>
      <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 bg-white">
        <button
          data-modal-hide="medium-modal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          I accept
        </button>
        <button
          data-modal-hide="medium-modal"
          type="button"
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default Modal;
