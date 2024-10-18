import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot";
import { FaComment } from "react-icons/fa";
import SidebarErrors from "../components/SidebarErrors"
const ReviewDoc = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentWindow, setCommentWindow] = useState(false);
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 });
  const [selectedText, setSelectedText] = useState("");
  const [activeCommentBox,setActiveCommentBox]=useState(false)
  const [activeComments, setActiveComments] = useState([]); // Default as empty array
  const [commentBoxPosition, setCommentBoxPosition] = useState({}); // Store position of the comment box
  const navigate = useNavigate();

  useEffect(() => {
    const cardData = {
      1: { id: 1, title: "Card 1", description: "Detailed info about Card 1" },
      2: { id: 2, title: "Card 2", description: "Detailed info about Card 2" },
    };
    setCard(cardData[id]);
  }, [id]);

  // Handle text selection and button positioning
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        setSelectedText(selection.toString());
        setButtonPosition({ top: rect.top + window.scrollY, right: rect.right });
        setIsTextSelected(true);
      } else {
        setIsTextSelected(false);
      }
    };

    document.addEventListener("mouseup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
    };
  }, []);

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

  const renderParagraphs = () => {
    const paragraphs = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
    ];

    return paragraphs.map((para, index) => {
      const relatedComments = comments.filter((comment) =>
        para.includes(comment.text)
      );

      // const handleShowComments = (event) => {
      //   // Display comment box when count is clicked
      //   const rect = event.target.getBoundingClientRect();
      //   setCommentBoxPosition({ top: rect.top + window.scrollY, left: rect.right });
      //   setActiveComments(relatedComments.length > 0 ? relatedComments : []);
      // };

    const handleShowComments = (event) => {
      // Get the button's position
      setActiveCommentBox(!activeCommentBox)
      const rect = event.target.getBoundingClientRect();

    
      setCommentBoxPosition({
          top: rect.bottom + window.scrollY, 
          left: rect.left + window.scrollX, 
      });

      // Toggle the comment box display
      if (activeComments === relatedComments) {
          setActiveComments([]); // Close the comment box
      } else {
          setActiveComments(relatedComments); // Show the comment box
      }
  };

      return (
        <div key={index} className="relative mb-4">
          <p className="text-justify">
            {para}{" "}
            {relatedComments.length > 0 && (
              <button className="relative inline ml-2">
                <span
                  onClick={handleShowComments}
                  className="cursor-pointer absolute -top-1 -right-1 bg-blue-600 text-white rounded-full p-1 text-xs ml-3 mt-[-10px]"
                >
                  {relatedComments.length}
                </span>
              </button>
            )}
          </p>
          {/* Render comment box next to the paragraph if comments are active */}
          {activeCommentBox && (
            <div
              className="absolute bg-gray-100 border border-gray-300 shadow-md p-2 rounded-md mt-[-10rem]"
              style={{
                position: "absolute",
                top: buttonPosition.top,
                right: "1rem",
                zIndex: 10,
              }}
            >
              {activeComments.map((comment, i) => (
                <div key={i} className="text-sm mb-2">
                  <strong>Selected Text:</strong> {comment.text}
                  <br />
                  <strong>Comment:</strong> {comment.comment}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex">
      <SidebarErrors/>
      {commentWindow && (
        <div
          className="commentWindow shadow-lg p-4 bg-white rounded-lg flex flex-col justify-center z-50"
          style={{
            position: "absolute",
            top: buttonPosition.top,
            right: "15rem",
            width: "300px",
            zIndex: 10,
          }}
        >
        <form onSubmit={addComment} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/40" // Placeholder for user avatar
      alt="User Avatar"
      className="rounded-full mr-2"
    />
    <h1 className="text-lg font-semibold">Shashwat Mishra</h1>
  </div>
  <textarea
    onChange={handleCommentChange}
    value={newComment}
    className="border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    placeholder="Write your comment here..."
    rows={4}
  />
  <div className="flex justify-end gap-2">
    <button
      type="button"
      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition duration-200 hover:bg-gray-400"
      onClick={() => setCommentWindow(false)}
    >
      Cancel
    </button>
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600"
    >
      Save
    </button>
  </div>
</form>

        </div>
      )}

      <Chatbot />
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

      <div className="w-[70%]">
        <div className="heading">
          <h2 className="ml-10 mt-16 text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl">
            Document Review
          </h2>
        </div>

        <div className="flex justify-center items-center min-h-[50vh]">
          <div style={{ padding: "20px", margin: "20px" }}>
            <div className="buttons flex justify-end gap-3 mb-4">
              <button
                onClick={() => setDrawer(!drawer)}
                className="px-3 py-2 text-yellow-700 border border-yellow-700 rounded-lg"
              >
                Analyze
              </button>
              <button className="px-3 py-2 text-green-700 border border-green-700 rounded-lg">
                Edit
              </button>
              <button
                onClick={() => setCommentWindow(true)}
                className="px-3 py-2 text-red-700 border border-red-700 rounded-lg"
              >
                Comment
              </button>
              <button
                onClick={() => {
                  navigate("/chunkmode");
                }}
                className="px-3 py-2 text-blue-700 border border-blue-700 rounded-lg"
              >
                Chunk
              </button>
            </div>

            <div className="para">{renderParagraphs()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDoc;
