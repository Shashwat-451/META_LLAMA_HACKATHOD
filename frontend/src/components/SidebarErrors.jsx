import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarErrors(props) {
  const [activeTab, setActiveTab] = useState("sources");

  const sources = [
    { name: "Source 1", url: "https://source1.com" },
    { name: "Source 2", url: "https://source2.com" },
    { name: "Source 3", url: "https://source3.com" },
  ];

  const recommendations = [
    "Recommendation 1: Review the document carefully.",
    "Recommendation 2: Consider additional sources for better insights.",
    "Recommendation 3: Discuss findings with peers.",
  ];

  return (
    <div className=" hs-overlay hs-overlay-open:translate-x-0 fixed top-0 right-0 transition-all duration-300 transform h-full w-[25vw]  bg-white border-l-2 overflow-y-auto shadow-lg">
      {/* Drawer content */}
      <div className="flex justify-between items-center py-3 px-4 border-b mt-2">
        
          <p className='text-lg font-bold cursor-pointer text-gray-600'>Errors</p>
          <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
            5
          </span>
        
      </div>

      <div className="errors flex flex-col gap-5 p-4">
        <p className="text-black text-justify dar:text-neutral-400 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
        </p>

        <div className="flex gap-4 mb-4 mt-[-10px]">
          <Link
            className={`text-lg font-bold cursor-pointer ${activeTab === "sources" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"}`}
            onClick={() => setActiveTab("sources")}
          >
            Sources
          </Link>
          <Link
            className={`text-lg font-bold cursor-pointer ${activeTab === "recommendations" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"}`}
            onClick={() => setActiveTab("recommendations")}
          >
            Recommendations
          </Link>
        </div>

        {/* Tab Content */}
        <div className="mt-0">
          {activeTab === "sources" && (
            <div>
              
              <ul className="list-disc pl-5 space-y-1">
                {sources.map((source, index) => (
                  <li key={index} className="flex items-center text-blue-700 hover:text-blue-900 transition duration-150">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <a
                      href={source.url}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "recommendations" && (
            <div>
              
              <ul className="list-decimal  space-y-1">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center text-green-700 hover:text-green-900 transition duration-150">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3m0 0h3m-3 0v3m-3-3v-3m0 0h3m-3 0H9" />
                    </svg>
                    <span className="text-black">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarErrors;
