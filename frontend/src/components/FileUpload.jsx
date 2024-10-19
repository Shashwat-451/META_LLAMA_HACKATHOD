import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-hot-toast';
import axios from 'axios';  // You'll use axios for the API request

const FileUpload = () => {
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);

    // Simulate file upload progress
    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);
      if (uploadProgress >= 100) {
        clearInterval(interval);
        toast.success('File uploaded successfully!');
        
        // Post file to the backend API after the upload is complete
        postFileToAPI(file);

        // Reset the form after a short delay
        setTimeout(() => {
          removeFile();
        }, 2000); // Adjust the delay as needed
      }
    }, 200);
  };

  // Function to post file to the backend API
  const postFileToAPI = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // Append the file to formData

    try {
      // Sending the file to the backend API
      const response = await axios.post('https://your-backend.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File successfully posted to API:', response.data);
      toast.success('File posted to the API successfully!');
    } catch (error) {
      console.error('Error posting file to API:', error);
      toast.error('Failed to post the file to the API.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const removeFile = () => {
    setUploadedFile(null);
    setProgress(0);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {uploadedFile ? (
        <div className="w-[30vw] h-[15rem] p-3 bg-white border border-solid border-gray-300 rounded-xl dar:border-neutral-600 flex align-middle justify-center flex-col">
          <div className="mb-1 flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <span
                className="size-10 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dar:border-neutral-700 dar:text-neutral-500"
                data-hs-file-upload-file-icon=""
              >
                <img className="rounded-lg hidden" alt="" />
              </span>
              <div>
                <p className="text-sm font-medium text-gray-800 dar:text-black">
                  <span className="truncate inline-block max-w-[300px] align-bottom">
                    {uploadedFile.name}
                  </span>
                  .<span>{uploadedFile.name.split('.').pop()}</span>
                </p>
                <p className="text-xs text-gray-500 dar:text-neutral-500">
                  {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800 dar:text-neutral-500 dar:hover:text-neutral-200"
                onClick={removeFile}
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dar:bg-neutral-700" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
              <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="w-10 text-end">
              <span className="text-sm text-gray-800 dar:text-black">{progress}%</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[30vw] h-[15rem] mt-10 cursor-pointer p-12 flex justify-center align-middle bg-white border border-dashed border-gray-300 rounded-xl dar:border-neutral-600" onClick={() => document.getElementById('fileInput').click()}>
          <div className="text-center">
            <h1><FontAwesomeIcon icon={faUpload} size="2x" /></h1>
            <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600 align-middle">
              <span className="pe-1 font-medium text-black">Drop your file here or </span>
              <span className="bg-white font-semibold text-blue-600 hover:text-blue-700 dar:text-blue-500 ml-1"> browse</span>
            </div>
            <p className="mt-1 text-xs text-gray-400 dar:text-neutral-400">Pick a file up to 2MB.</p>
          </div>
          <input type="file" id="fileInput" className="hidden" onChange={(e) => handleFileUpload(e.target.files[0])} />
        </div>
      )}
      <div className="mt-4 space-y-2 empty:mt-0"></div>
    </div>
  );
};

export default FileUpload;
