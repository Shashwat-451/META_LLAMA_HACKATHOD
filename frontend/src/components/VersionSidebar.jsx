import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function VersionSidebar(props) {
const data=props.versions;
console.log("rere",data)
  return (
    <div className=" hs-overlay hs-overlay-open:translate-x-0 fixed top-0 left-0 transition-all duration-300 transform h-full w-[25vw]  bg-white border-l-2 overflow-y-auto shadow-lg z-30">
      
      <div className="flex justify-between items-center py-3 px-4 border-b mt-2">
          <p className='text-lg font-bold cursor-pointer text-gray-600'>Version History</p> 
      </div>

{/* <div className="versions">
    {
        data.map((version)=>(
            <>
              <h2>{version.title}</h2>
              
            </>
        ))
    }
</div> */}

<div className="versions-container p-4 space-y-4">
      {data.map((version, index) => (
        <div key={index} className="version-item">
          <Link
            to={`/version/${index}`} // Navigate to a unique version page
            className="text-blue-600 hover:underline text-lg font-semibold"
          >
            {version.title}
          </Link>
        </div>
      ))}
    </div>

    </div>
  );
}

export default VersionSidebar;
