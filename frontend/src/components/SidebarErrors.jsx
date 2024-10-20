import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import { TbLayoutBottombarCollapseFilled } from "react-icons/tb";
function SidebarErrors(props) {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [expandedItems, setExpandedItems] = useState(new Array(3).fill(false)); // Adjust according to your data length

  const data = [
    {
      id: "Drug Product Information_1",
      guideline_id: 1,
      guideline: "**Composition and Description**: Describe the composition and appearance of the drug product, including its color, odor, and texture.",
      guideline_validation_score: 0,
      errors: [
        "In the Clinical Overview (2.5.1), the draft does not clearly state the pharmacological class of the medicinal product.",
        "In the Clinical Summary (2.7.1.1), the draft does not provide a clear overview of the formulation development process and the approach used in developing the bioavailability (BA), comparative BA, bioequivalence (BE), and in vitro dissolution profile database.",
        "In the Clinical Pharmacology Studies section (2.7.2.2), the draft does not provide a clear summary of the results of individual studies, including critical design features and critical results.",
        "In the Adverse Events section (2.7.4.2.1), the draft does not clearly explain the methodology used for pooling results across studies."
      ],
      recommendations: [
        "For better clarity, consider adding headings and subheadings to separate sections within the Clinical Overview (e.g., 2.5.1 Product Development Rationale).",
        "In the Clinical Summary (2.7), ensure that each section (e.g., 2.7.1, 2.7.2, etc.) is clearly labeled and follows the guideline's structure.",
        "In the Clinical Pharmacology Studies section (2.7.2), consider including a brief overview of the human biomaterial studies conducted to help interpret PK or PD data.",
        "For better readability, consider embedding tables and figures within the text of the appropriate sections when they enhance readability.",
        "Ensure that all adverse events are described using standardized terms, such as the MedDRA terminology, and that frequencies are presented for preferred terms and appropriately defined groupings."
      ],
      explanation: "The draft document generally aligns with the provided guideline, following its structure and requirements. However, there are a few instances where the draft could be improved for better clarity and compliance."
    },
    {
      id: "Manufacturing Information_4",
      guideline_id: 4,
      guideline: "**Critical Steps and Intermediates**: Identify critical steps and intermediates in the manufacturing process, including any potential sources of contamination.",
      guideline_validation_score: 0,
      errors: [
        "Lack of detailed discussion on the manufacturing process.",
        "Insufficient information on critical steps and intermediates.",
        "Inadequate alignment with the guideline's requirements.",
        "Some sections appear to be incomplete or lacking in detail."
      ],
      recommendations: [
        "Provide a detailed discussion on the manufacturing process, including critical steps and intermediates.",
        "Ensure that all sections are comprehensive and align with the guideline's requirements.",
        "Include specific examples or case studies to illustrate key concepts and make the document more engaging.",
        "Use clear headings and subheadings to organize the content and improve readability."
      ],
      explanation: "The draft document does not fully align with the provided guideline. Specifically, it lacks detailed discussions on certain sections such as the manufacturing process, critical steps, and intermediates, which are crucial for the guideline's 'Manufacturing Information' category."
    },
    {
      id: "Manufacturing Information_5",
      guideline_id: 5,
      guideline: "**Facilities and Equipment Information**: Describe the facilities and equipment used for manufacturing, including their qualification and maintenance.",
      guideline_validation_score: 0,
      errors: [],
      recommendations: [],
      explanation: "(Detailed explanation of the validation score)"
    }
  ];

  const toggleExpand = (index) => {
    setExpandedItems(prev => {
      const newExpandedItems = [...prev];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  return (
    <div className="hs-overlay fixed top-0 right-0 transition-all duration-300 transform h-full w-[25vw] bg-white border-l-2 overflow-y-auto shadow-lg">
      <div className="flex justify-between items-center py-3 px-4 border-b mt-2">
        <p className='text-lg font-bold cursor-pointer text-gray-600'>Errors</p>
        <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
          {data.reduce((acc, item) => acc + item.errors.length, 0)}
        </span>
      </div>

      <div className="flex flex-col gap-5 p-4">
        {data.map((item, itemIndex) => (
          <div key={itemIndex} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FaExclamationCircle className="text-red-500 mr-2" />
                <h3 className="text-lg font-semibold">{item.id}</h3>
              </div>
              <button onClick={() => toggleExpand(itemIndex)} className="text-gray-600 hover:text-blue-500">
                {expandedItems[itemIndex] ? <TbLayoutNavbarCollapseFilled /> : <TbLayoutBottombarCollapseFilled />}
              </button>
            </div>

            {expandedItems[itemIndex] && (
              <>
                <p className="text-black text-justify mt-2 mb-4 ">
                  {item.errors.length > 0 ? (
                    item.errors.map((error, index) => (
                      <p className='mb-2 border-b border-gray-300 ' key={index}>
                        {`${index + 1}. ${error}`}<br />
                      </p>
                    ))
                  ) : (
                    "No errors."
                  )}
                </p>

                <div className="flex gap-4 mb-4">
                  <Link
                    className={`text-lg font-bold cursor-pointer ${activeTab === "guidelines" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"}`}
                    onClick={() => setActiveTab("guidelines")}
                  >
                    Guidelines
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
                  {activeTab === "guidelines" && (
                    <p>{item.guideline}</p>
                  )}
                  {activeTab === "recommendations" && (
                    <p className="text-black text-justify">
                      {item.recommendations.length > 0 ? (
                        item.recommendations.map((recommendation, index) => (
                          <p className='mb-2' key={index}>
                            <FaCheckCircle className="text-green-500 inline mr-2" />
                            {`${index + 1}. ${recommendation}`}<br />
                          </p>
                        ))
                      ) : (
                        "No recommendations."
                      )}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarErrors;
