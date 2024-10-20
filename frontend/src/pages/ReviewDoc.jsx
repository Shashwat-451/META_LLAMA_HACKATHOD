import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot";
import { FaComment } from "react-icons/fa";
import SidebarErrors from "../components/SidebarErrors";
import VersionSidebar from "../components/VersionSidebar";
import { useLocation } from "react-router-dom";
const ReviewDoc = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [versionHistory, setVersionHistory] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentWindow, setCommentWindow] = useState(false);
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 });
  const [selectedText, setSelectedText] = useState("");
  const [versions, setVersions] = useState([]); // Versions array
  const [isEditing, setIsEditing] = useState(false); // Edit mode toggle
  const [currentText, setCurrentText] = useState(""); // Current text to be edited
  const [activeCommentBox, setActiveCommentBox] = useState(false);
  const [activeComments, setActiveComments] = useState([]);
  const [commentBoxPosition, setCommentBoxPosition] = useState({});
  const index = useParams();
  const navigate = useNavigate();

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();

    if (selectedText && newComment) {
      setComments((prevComments) => [
        ...prevComments,
        { text: selectedText, comment: newComment },
      ]);
      setCommentWindow(false); // Close comment window after saving
      setNewComment(""); // Clear the input field
      setIsTextSelected(false); // Reset text selection
    } else {
      alert("Please select text and provide a comment.");
    }
  };
  const location = useLocation();
  const url = location.state?.url;
  const googleDocsViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;

  return (
    <div className="flex h-screen">
      <SidebarErrors />
      {versionHistory && <VersionSidebar versions={versions} />}
      
      <div className="left-0 w-[69%] p-4">
        <iframe
          title="PDF Viewer"
          src={googleDocsViewerUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
        />
      </div>

      <Chatbot index={index} />
      
      {isTextSelected && (
        <button
          onClick={() => setCommentWindow(true)}
          style={{
            position: "absolute",
            top: buttonPosition.top,
            right: "27rem",
          }}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg flex items-center"
        >
          <FaComment />
        </button>
      )}
    </div>
  );
};

export default ReviewDoc;
