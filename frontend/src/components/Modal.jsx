import React, { useState } from "react";
import FileUpload from "./FileUpload";

const ModalComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        onClick={openModal}
      >
        Vertically centered modal
      </button>

      {/* Vertically Centered Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-gray-900 bg-opacity-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 id="modal-title" className="font-bold text-gray-800">
                Modal title
              </h3>
              <button
                type="button"
                className="inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4">
            <div className="flex justify-center align-middle">
                <FileUpload />
                </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}


     
    </div>
  );
};

export default ModalComponent;
