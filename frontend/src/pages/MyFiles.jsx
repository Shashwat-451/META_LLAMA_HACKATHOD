import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const myFiles = () => {
    const files = [
        { id: 1, name: 'Document1.pdf' },
        { id: 2, name: 'Image1.png' },
        { id: 3, name: 'Presentation.pptx' },
        { id: 4, name: 'Spreadsheet.xlsx' },
        { id: 1, name: 'Document1.pdf' },
        { id: 2, name: 'Image1.png' },
        { id: 3, name: 'Presentation.pptx' },
        { id: 4, name: 'Spreadsheet.xlsx' },
        { id: 1, name: 'Document1.pdf' },
        { id: 2, name: 'Image1.png' },
        { id: 3, name: 'Presentation.pptx' },
        { id: 4, name: 'Spreadsheet.xlsx' },
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
        <Navbar/>
        <Sidebar/>
        <div className="overflow-x-auto w-[70rem] min-h-[30rem] right-16 top-28 absolute shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500"
                                />
                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="p-4">File Name</th>
                        <th scope="col" className="p-4">Edit</th>
                        <th scope="col" className="p-4">Preview</th>
                        <th scope="col" className="p-4">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file) => (
                        <tr key={file.id} className="border-b hover:bg-gray-100">
                            <td className="p-4 w-4">
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-table-${file.id}`}
                                        type="checkbox"
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500"
                                    />
                                    <label htmlFor={`checkbox-table-${file.id}`} className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{file.name}</th>
                            <td className="px-4 py-3">
                                <button
                                    onClick={() => handleEdit(file.name)}
                                    className="py-2 px-3 flex items-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:outline-none focus:ring-gray-200"
                                >
                                    Edit
                                </button>
                            </td>
                            <td className="px-4 py-3">
                                <button
                                    onClick={() => handlePreview(file.name)}
                                    className="py-2 px-3 flex items-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:outline-none focus:ring-gray-200"
                                >
                                    Preview
                                </button>
                            </td>
                            <td className="px-4 py-3">
                                <button
                                    onClick={() => handleDelete(file.name)}
                                    className="flex items-center text-red-700 border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
       
    );
};

export default myFiles;
