import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
const Card = (props) => {
  const data = props.data;
  const navigate=useNavigate()
  return (
    <div className="w-[80rem] shadow-lg max-w-sm p-6 bg-white border border-gray-200 rounded-lg  dar:bg-gray-800 dar:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dar:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dar:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>

      <div className="btns flex gap-4">
        {/* <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Update</button>
        <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Preview</button>
        <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Delete</button>
        <button onClick={()=>navigate("/myFiles/3")}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Review <span onClick={(e)=>{e.stopPropagation();  window.open("/myFiles/3", "_blank"); }} className="ml-2"><FaArrowUpRightFromSquare/></span></button>
         */}
        {/* <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-700 border border-yellow-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-yellow-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Update</button> */}
        <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-700 border border-green-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-green-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Preview</button>
        <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-red-700 border border-red-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Delete</button>
        <button onClick={()=>navigate("/guideline2")}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 border border-blue-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Guideline<span onClick={(e)=>{e.stopPropagation();  window.open("/guideline2", "_blank"); }} className="ml-2"><FaArrowUpRightFromSquare/></span></button>
        
      </div>
    </div>
  );
};

export default Card;
