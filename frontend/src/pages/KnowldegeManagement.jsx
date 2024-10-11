import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FileUpload from '../components/FileUpload';

function KnowldegeManagement(props) {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="h-[80%] w-[78%] absolute right-[30px] top-24 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center fileUpload">
                <FileUpload />
            </div>

        </div>
    );
}

export default KnowldegeManagement;