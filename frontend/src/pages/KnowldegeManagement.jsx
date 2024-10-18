import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Search from "../components/Search";
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import ModalComponent from "../components/Modal";
import FileUpload from "../components/FileUpload";
import CardKB from "../components/CardKB";
const KnowledgeManagement = () => {
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
  
      <div className="absolute top-24 right-16 mb-10 flex">
        <Search />

        <button
          onClick={() => setModal(true)}
          className="flex items-center text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
        >
          Upload
        </button>
      </div>
      <div className="flex flex-wrap w-[80%] absolute right-1 top-52 gap-2">
        {files.map((file) => (
          <CardKB data={file} />
        ))}
      </div>

      <div className="modal">
        <div>
          {modal && (
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-gray-900 bg-opacity-50"
              role="dialog"
              aria-labelledby="modal-title"
              aria-modal="true"
            >
              <div className="bg-white rounded-xl shadow-lg w-[50vw] h-[380px] ">
                <div className="flex justify-between items-center py-3 px-4 border-b bg-gray-800 text-white">
                  <h3 id="modal-title" className="font-bold text-white">
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
                <div className="p-4 h-[270px]">
                  <div className="flex justify-center align-middle ">
                    <FileUpload />
                  </div>
                </div>
           
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default KnowledgeManagement;
