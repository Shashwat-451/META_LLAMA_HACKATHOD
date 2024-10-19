import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CardKB from "../components/CardKB";
import Search from "../components/Search";
import FileUpload from "../components/FileUpload";
import Upload from "../components/Upload";
import Sidebar from "../components/Sidebar";

const KnowledgeManagement = () => {
  const [modal, setModal] = useState(false);

  const files = [
    { id: 1, name: "Document1.pdf" },
    { id: 2, name: "Image1.png" },
    { id: 3, name: "Presentation.pptx" },
    { id: 4, name: "Spreadsheet.xlsx" },
    { id: 5, name: "Document2.pdf" },
    { id: 6, name: "Image2.png" },
    { id: 7, name: "Presentation2.pptx" },
    { id: 8, name: "Spreadsheet2.xlsx" },
    { id: 9, name: "Document3.pdf" },
    { id: 10, name: "Image3.png" },
    { id: 11, name: "Presentation3.pptx" },
    { id: 12, name: "Spreadsheet3.xlsx" },
  ];

  return (
    <>
      <Navbar />
    <Sidebar/>
      <div className="absolute top-24 right-16 mb-4 flex">
        <Search />
        <button
          onClick={() => setModal(true)}
          className="flex items-center text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
        >
          Upload
        </button>
  <Upload/>
      
      </div>

      {/* Centered and Responsive Grid Layout for Cards */}
      <div className="flex justify-end mt-44">
        <div className="flex flex-wrap gap-4 w-[80%] ">
          {files.map((file) => (
            <CardKB key={file.id} data={file} />
          ))}
        </div>
      </div>

      .

      {/* Modal for File Upload */}
      {modal && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-gray-900 bg-opacity-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-lg w-[50vw] h-[380px]">
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
              <div className="flex justify-center align-middle">
                <FileUpload />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KnowledgeManagement;