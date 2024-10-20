import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Search from "../components/Search";
import FileUpload from "../components/FileUpload";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
const MyFiles = () => {
  const [modal, setModal] = useState(false);
  const [files, setFiles] = useState([]);
const navigate=useNavigate()
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('https://status-peoples-upgrading-recognised.trycloudflare.com/fetch-document-list');
        setFiles(response.data);
        console.log("files", response);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleEdit = (fileName) => {
    console.log(`Editing ${fileName}`);
    // Implement edit functionality here
  };

  const handlePreview = (fileName) => {
    console.log(`Previewing ${fileName}`);
    // Open the file link in a new tab
    window.open(fileName, '_blank');
  };

  const handleDelete = async (fileId) => {
    try {
      // Make DELETE request to your API to delete the file
      await axios.delete(`YOUR_API_ENDPOINT/${fileId}`); // Replace with your actual endpoint

      // Remove the deleted file from the UI
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      {/* Search and Upload */}
      <div className="absolute top-24 right-16 mb-4 flex">
        <Search />
        <button
          onClick={() => setModal(true)}
          className="flex items-center text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
        >
          Upload
        </button>
        <button
          onClick={() => navigate("/create")}
          className="ml-3 mr-9 flex items-center text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
        >
          Create
        </button>
        {/* <button
          onClick={navigate("/create")}
          className="flex items-center text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
        >
          Create
        </button> */}
      </div>

      {/* Files Representation */}
      <div className="flex flex-wrap w-[80%] absolute right-1 top-52 gap-2">
        {files.map((file) => (
          file.type === "My-files" && (
            <Card
              key={file.id}
              data={file}
              onEdit={() => handleEdit(file.link)}
              onPreview={() => handlePreview(file.link)}
              onDelete={() => handleDelete(file.id)} // Pass file.id to the delete handler
            />
          )
        ))}
      </div>

      {/* Modal Code */}
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
                    <FileUpload data="My-files"/>
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

export default MyFiles;
