import React, { useState } from 'react';

// Updated sample data
const generated_guideline = [
    {
        "category": "Mandatory Attachments:",
        "guideline_list": [
            { "id": 1, "guideline": "3.2.S.2.2 Description of Manufacturing Process and Process Controls (name, manufacturer) - Flow diagram of the synthetic process(es)" },
            { "id": 2, "guideline": "3.2.S.2.3 Control of Materials (name, manufacturer) - List of materials used in the manufacture of the drug substance" },
            { "id": 3, "guideline": "3.2.S.2.4 Controls of Critical Steps and Intermediates (name, manufacturer) - Tests and acceptance criteria for critical steps and intermediates" },
            { "id": 4, "guideline": "3.2.S.2.5 Process Validation and/or Evaluation (name, manufacturer) - Process validation and/or evaluation studies" },
            { "id": 5, "guideline": "3.2.P.3.3 Description of Manufacturing Process and Process Controls (name, dosage form) - Flow diagram of the process" },
            { "id": 6, "guideline": "3.2.P.3.4 Controls of Critical Steps and Intermediates (name, dosage form) - Tests and acceptance criteria for critical steps and intermediates" },
            { "id": 7, "guideline": "3.2.A.1 Facilities and Equipment (name, manufacturer) - Diagram illustrating the manufacturing flow" },
            { "id": 8, "guideline": "3.2.A.2 Adventitious Agents Safety Evaluation (name, dosage form, manufacturer) - Detailed information on the avoidance and control of non-viral adventitious agents" },
            { "id": 9, "guideline": "3.2.A.2 Adventitious Agents Safety Evaluation (name, dosage form, manufacturer) - Detailed information from viral safety evaluation studies" },
            { "id": 10, "guideline": "3.2.A.3 Excipients - Full details of manufacture, characterisation, and controls for novel excipients" }
        ]
    },
    {
        "category": "Mandatory Coordinates (contact information required):",
        "guideline_list": [
            { "id": 1, "guideline": "3.2.S.2.1 Manufacturer(s) (name, manufacturer) - Name, address, and responsibility of each manufacturer" },
            { "id": 2, "guideline": "3.2.P.3.1 Manufacturer(s) (name, dosage form) - Name, address, and responsibility of each manufacturer" },
            { "id": 3, "guideline": "3.2.A.1 Facilities and Equipment (name, manufacturer) - Name, address, and responsibility of each manufacturer" },
            { "id": 4, "guideline": "3.2.A.2 Adventitious Agents Safety Evaluation (name, dosage form, manufacturer) - Name, address, and responsibility of each manufacturer" }
        ]
    },
    {
        "category": "Mandatory Drug Product Information:",
        "guideline_list": [
            { "id": 1, "guideline": "3.2.P.1 Description and Composition of the Drug Product (name, dosage form) - Description of the drug product and its composition" },
            { "id": 2, "guideline": "3.2.P.2 Pharmaceutical Development (name, dosage form) - Information on the development studies conducted to establish the dosage form, formulation, manufacturing process, container closure system, microbiological attributes, and usage instructions" },
            { "id": 3, "guideline": "3.2.P.2.1 Components of the Drug Product (name, dosage form) - Compatibility of the drug substance with excipients" },
            { "id": 4, "guideline": "3.2.P.2.2 Drug Product (name, dosage form) - Formulation development, overages, physicochemical and biological properties" },
            { "id": 5, "guideline": "3.2.P.3 Manufacture (name, dosage form) - Information on the manufacturer, batch formula, and description of the manufacturing process and process controls" },
            { "id": 6, "guideline": "3.2.P.4 Control of Excipients (name, dosage form) - Specifications, analytical procedures, and validation for excipients" },
            { "id": 7, "guideline": "3.2.P.5 Control of Drug Product (name, dosage form) - Specification(s), analytical procedures, and validation for the drug product" },
            { "id": 8, "guideline": "3.2.P.6 Reference Standards or Materials (name, dosage form) - Information on the reference standards or reference materials used for testing of the drug product" },
            { "id": 9, "guideline": "3.2.P.7 Container Closure System (name, dosage form) - Description of the container closure system(s)" },
            { "id": 10, "guideline": "3.2.P.8 Stability (name, dosage form) - Results of the stability studies" }
        ]
    },
    {
        "category": "Mandatory Experimental Studies Information:",
        "guideline_list": [
            { "id": 1, "guideline": "3.2.S.2.5 Process Validation and/or Evaluation (name, manufacturer) - Process validation and/or evaluation studies" },
            { "id": 2, "guideline": "3.2.S.7.1 Stability Summary and Conclusions (name, manufacturer) - Summary of the studies undertaken, protocols used, and the results of the studies" },
            { "id": 3, "guideline": "3.2.S.7.2 Post-approval Stability Protocol and Stability Commitment (name, manufacturer) - Post-approval stability protocol and stability commitment" },
            { "id": 4, "guideline": "3.2.S.7.3 Stability Data (name, manufacturer) - Results of the stability studies" },
            { "id": 5, "guideline": "3.2.P.8.1 Stability Summary and Conclusion (name, dosage form) - Summary of the studies conducted, protocols used, and the results of the studies" },
            { "id": 6, "guideline": "3.2.P.8.2 Post-approval Stability Protocol and Stability Commitment (name, dosage form) - Post-approval stability protocol and stability commitment" },
            { "id": 7, "guideline": "3.2.P.8.3 Stability Data (name, dosage form) - Results of the stability studies" }
        ]
    },
    {
        "category": "Mandatory Manufacturing Information:",
        "guideline_list": [
            { "id": 1, "guideline": "3.2.S.2.2 Description of Manufacturing Process and Process Controls (name, manufacturer) - Flow diagram of the synthetic process(es)" },
            { "id": 2, "guideline": "3.2.S.2.3 Control of Materials (name, manufacturer) - List of materials used in the manufacture of the drug substance" },
            { "id": 3, "guideline": "3.2.S.2.4 Controls of Critical Steps and Intermediates (name, manufacturer) - Tests and acceptance criteria for critical steps and intermediates" },
            { "id": 4, "guideline": "3.2.S.2.5 Process Validation and/or Evaluation (name, manufacturer) - Process validation and/or evaluation studies" },
            { "id": 5, "guideline": "3.2.P.3.3 Description of Manufacturing Process and Process Controls (name, dosage form) - Flow diagram of the process" },
            { "id": 6, "guideline": "3.2.P.3.4 Controls of Critical Steps and Intermediates (name, dosage form) - Tests and acceptance criteria for critical steps and intermediates" }
        ]
    },
    {
        "category": "Mandatory Manufacturer Information:",
        "guideline_list": [
            { "id": 1, "guideline": "3.2.S.2.1 Manufacturer(s) (name, manufacturer) - Name, address, and responsibility of each manufacturer" },
            { "id": 2, "guideline": "3.2.P.3.1 Manufacturer(s) (name, dosage form) - Name, address, and responsibility of each manufacturer" },
            { "id": 3, "guideline": "3.2.A.1 Facilities and Equipment (name, manufacturer) - Name, address, and responsibility of each manufacturer" },
            { "id": 4, "guideline": "3.2.A.2 Adventitious Agents Safety Evaluation (name, dosage form, manufacturer) - Name, address, and responsibility of each manufacturer" }
        ]
    }
];

const Guidelines2 = () => {
    const [filter, setFilter] = useState('All');

    // Extract unique categories from the data
    const categories = ['All', ...generated_guideline.map(g => g.category)];

    // Filter guidelines based on selected category
    const filteredGuidelines = filter === 'All'
        ? generated_guideline
        : generated_guideline.filter(g => g.category === filter);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Guidelines</h1>
            <div className="flex mb-4 justify-center">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-lg mx-1 transition duration-300 
                        ${filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="overflow-x-auto">
                {filteredGuidelines.map((category, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="py-2 px-4 border-b">ID</th>
                                    <th className="py-2 px-4 border-b">Guideline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.guideline_list.map((guideline) => (
                                    <tr key={guideline.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b">{guideline.id}</td>
                                        <td className="py-2 px-4 border-b">{guideline.guideline}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guidelines2;
