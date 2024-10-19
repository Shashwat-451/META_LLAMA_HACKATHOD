import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from "flowbite-react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Chatbot from '../components/Chatbot';
import SidebarErrors from '../components/SidebarErrors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChunkMode = () => {
    const [drawer, setDrawer] = useState(false);
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [commentWindow, setCommentWindow] = useState(false);
    const [isTextSelected, setIsTextSelected] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 });
    const [selectedText, setSelectedText] = useState("");
    const [activeCommentBox,setActiveCommentBox]=useState(false)
    const [activeComments, setActiveComments] = useState([]); // Default as empty array
    const [commentBoxPosition, setCommentBoxPosition] = useState({}); // Store position of the comment box
  const navigate=useNavigate()
  const paragraphs = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas incidunt illum consequatur distinctio commodi dignissimos minima ipsam deserunt modi, id dolores perspiciatis perferendis? Veritatis, consequuntur sed nemo animi saepe, repellendus blanditiis corrupti, velit odio esse eos culpa incidunt quaerat unde rerum ad quas expedita non ducimus debitis! Voluptatem beatae deserunt nobis, quae obcaecati laboriosam consequatur rerum corporis necessitatibus animi iure iste hic aliquam quibusdam sed suscipit dolor molestiae sint veniam eveniet nam. Accusantium dolore architecto velit, odio expedita incidunt eum dolorem corrupti eaque, voluptatum praesentium ea saepe eligendi fuga nihil iure quae? Consequuntur impedit tempore enim repellendus reiciendis ipsam ab autem beatae veniam debitis qui, vitae nemo ex libero, natus deserunt? Itaque ea animi cupiditate veritatis autem reprehenderit ad fugit! Doloremque rerum quod esse provident enim! Inventore totam rem repellendus culpa a minima earum laboriosam velit mollitia quam, dignissimos repudiandae perferendis consectetur ratione cumque? Fugiat aliquam, magni quae libero expedita officia, nulla esse voluptate totam sit corrupti nisi dolor enim ut eligendi quo repellat accusamus voluptatum! Quas deserunt adipisci qui eum eius ipsam natus tenetur, minima illum, nulla beatae cum esse dicta soluta neque? Deleniti, architecto, earum, repudiandae voluptates aliquam beatae incidunt impedit explicabo iste omnis nihil aspernatur commodi?",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Tracks current paragraph

  // Handlers for Next and Prev buttons
  const handleNext = () => {
    if (currentIndex < paragraphs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
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

  return (
   
    <>
      <Chatbot/>
      <SidebarErrors/>
     

     <div className="flex flex-col ml-10 min-h-screen p-4 w-[100%]">
      <div className="w-[68%] text-center mb-4 mt-10 text-justify">
        {paragraphs.slice(0, currentIndex).map((para, i) => (
          <p key={i} className="text-gray-500 text-sm opacity-50 text-justify mb-2 ">
            {para}
          </p>
        ))}
      </div>

     
      <div className="relative w-[68%] text-justify pl-6 pr-6 pt-2 pb-16 h-auto flex flex-col gap-5 bg-white rounded-lg shadow-md overflow-hidden">
        
           <div className="buttons ml-0">
           <ButtonGroup className="flex gap-3">
        <button onClick={()=>setDrawer(!drawer)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-700 border border-yellow-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-yellow-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Analyze</button>
        <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-700 border border-green-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-green-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">Edit</button>

          </ButtonGroup>
          
           </div>
           
        <div className="flex items-center justify-center">
          <p className="relative text-lg leading-relaxed text-gray-800 transition-all duration-300 ease-in-out z-10 opacity-100">
            {paragraphs[currentIndex]}
          </p>
        </div>
        <div className="absolute bottom-2 right-0 flex justify-around p-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === paragraphs.length - 1}
            className={`px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 bottom-1 right-0 ml-6 mr-4 ${
              currentIndex === paragraphs.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Display Next Paragraphs */}
      <div className="w-[68%] mt-4 text-justify">
        {paragraphs.slice(currentIndex + 1).map((para, i) => (
          <p key={i} className="text-gray-500 text-sm opacity-50 mb-2">
            {para}
          </p>
        ))}
      </div>
    </div>

    </>
  );
};

export default ChunkMode;
