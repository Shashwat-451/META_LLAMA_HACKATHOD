import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
const CardGuideline = (props) => {
  const data = props.data;
  const navigate=useNavigate()
console.log("dataaa",data)
  const handlePreview = () => {
    // Navigate to the preview page with the document URL
    navigate(`/preview`, { state: { documentUrl: "https://biosimilar-documents.s3.amazonaws.com/contact/module_1.pdf" } });
  };
  const handleReview = () => {
    // Navigate to /myFiles/:index dynamically
    // navigate(`/myFiles/${data.index}`);
    navigate(`/myFiles/${data.index}`, { state: { url: data.url } });
  };

  return (
    <div className="w-[70rem] shadow-lg max-w-sm p-6 bg-white border border-gray-200 rounded-lg  dar:bg-gray-800 dar:border-gray-700">
      <a>
        <h5 className="mb-2 text-2xl h-[80px] font-bold tracking-tight text-gray-900 dar:text-white">
          {data.index}
        </h5>
      </a>
      <div className="btns flex gap-4">
        <button onClick={handlePreview}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-700 border border-green-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-green-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Preview</button>
        <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-red-700 border border-red-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Delete</button>
        <button onClick={()=>navigate("/guidelines")}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 border border-blue-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Guideline <span onClick={(e)=>{e.stopPropagation();  window.open("/myFiles/3", "_blank"); }} className="ml-2"><FaArrowUpRightFromSquare/></span></button>
      </div>
    </div>
  );
};

export default CardGuideline;
