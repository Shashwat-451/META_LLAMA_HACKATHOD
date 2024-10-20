// import React from 'react';

// function Preview({ pdfPath }) {
//   return (
//     <div style={{ height: '100vh' }}>
//         <h1>h1</h1>
//       <iframe
//         src="https://crimson-danit-63.tiiny.site/" // Use the passed PDF path
//         width="100%"
//         height="100%"
//         style={{ border: 'none' }}
//         title="PDF Viewer"
//       />
//     </div>
//   );
// }

// export default Preview;
import React from 'react';

const Preview = ({ pdfUrl }) => {
    // Create a Google Docs viewer URL from the PDF URL
    const googleDocsViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent("https://biosimilar-documents.s3.amazonaws.com/contact/module_1.pdf?AWSAccessKeyId=AKIA3CMCCCHW5UYU4YXW&Signature=zMvcOQvuNo7fsp28%2BjRF8IVJTJk%3D&Expires=1729468165")}&embedded=true`;

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                title="PDF Viewer"
                src={googleDocsViewerUrl}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
            />
        </div>
    );
};

export default Preview;
