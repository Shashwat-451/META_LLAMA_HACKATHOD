import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import CardKB from "../components/CardKB";
import FileUpload from "../components/FileUpload";
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useState } from "react";

function KnowldegeManagement(props) {
  const [modal, setModal] = useState(false);
  const files = [
    { id: 1, name: "Document1.pdf" },
    { id: 2, name: "Image1.png" },
    { id: 3, name: "Presentation.pptx" },
    { id: 4, name: "Spreadsheet.xlsx" },
    { id: 1, name: "Document1.pdf" },
    { id: 2, name: "Image1.png" },
    { id: 3, name: "Presentation.pptx" },
    { id: 4, name: "Spreadsheet.xlsx" },
    { id: 1, name: "Document1.pdf" },
    { id: 2, name: "Image1.png" },
    { id: 3, name: "Presentation.pptx" },
    { id: 4, name: "Spreadsheet.xlsx" },
  ];

  const handleEdit = (fileName) => {
    console.log(`Editing ${fileName}`);
  };

  const handlePreview = (fileName) => {
    console.log(`Previewing ${fileName}`);
  };

  const handleDelete = (fileName) => {
    console.log(`Deleting ${fileName}`);
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="absolute top-24 right-24 mb-16 flex">
        <Search />

        <button
          onClick={() => setModal(true)}
          className="flex items-center text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2"
        >
          Upload
        </button>
      </div>
      <div className="overflow-x-auto w-[75%] min-h-[30rem] right-16 top-48 absolute shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="p-4">
                File Name
              </th>
              <th scope="col" className="p-4">
                Edit
              </th>
              <th scope="col" className="p-4">
                Preview
              </th>
              <th scope="col" className="p-4">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="border-b hover:bg-gray-100">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-${file.id}`}
                      type="checkbox"
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500"
                    />
                    <label
                      htmlFor={`checkbox-table-${file.id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                >
                  {file.name}
                </th>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEdit(file.name)}
                    className="py-2 px-3 flex items-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:outline-none focus:ring-gray-200"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handlePreview(file.name)}
                    className="py-2 px-3 flex items-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:outline-none focus:ring-gray-200"
                  >
                    Preview
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(file.name)}
                    className="flex items-center text-red-700 border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="flex flex-wrap w-[80%] absolute right-1 top-52 gap-2">
        {files.map((file) => (
          <CardKB data={file} />
        ))}
      </div> */}

      <div className="modal">
        <div className="modal">
          <div>
            {/* Button to trigger the modal */}
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => setModal(false)}
            >
              Vertically centered modal
            </button>

            {modal && (
              <div
                className="fixed inset-0 z-[80] flex items-center justify-center bg-gray-900 bg-opacity-50"
                role="dialog"
                aria-labelledby="modal-title"
                aria-modal="true"
              >
                <div className="bg-white rounded-xl shadow-lg w-[50vw] h-[400px]">
                  <div className="flex justify-between items-center py-3 px-4 border-b">
                    <h3 id="modal-title" className="font-bold text-gray-800">
                      Upload Document
                    </h3>
                    <button
                      type="button"
                      className="inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
                      onClick={() => setModal(false)}
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
                    <div className="flex justify-center align-middle h-[250px]">
                      <FileUpload />
                    </div>
                  </div>
                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                    <button
                      type="button"
                      className="py-2 px-3 text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 rounded-lg"
                      onClick={() => setModal(false)}
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
        </div>
      </div>
    </>
  );
}

export default KnowldegeManagement;
