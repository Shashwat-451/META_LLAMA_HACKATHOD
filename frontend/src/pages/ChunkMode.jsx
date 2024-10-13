import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from "flowbite-react";
import { IoCloseCircleOutline } from "react-icons/io5";

const ChunkMode = () => {
    const [drawer, setDrawer] = useState(false);
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

  return (
   
    <>
    <div
          className="hs-overlay hs-overlay-open:translate-x-0 fixed top-0 right-0 transition-all duration-300 transform h-full w-[25vw] z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700 border-l-2 overflow-y-auto"
          role="dialog"
          tabIndex="-1"
        >
          {/* <button
            type="button"
            className="size-8 mt-4 ml-4 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
            onClick={() => {
              setDrawer(false);
            }}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button> */}
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Errors
              <span class="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                5
              </span>
            </button>

            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Recommendations
              <span class="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-yellow-500 text-white">
                10
              </span>
            </button>
          </div>

          <div className="errors flex flex-col gap-5">
            <div className="p-4 border-b-2">
              <p className="text-gray-800 dark:text-neutral-400">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
              <div className="flex gap-3 mt-5 ">
                <Link className="text-blue-500 font-bold">Sources</Link>
                <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-gray-800 dark:text-neutral-400">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-gray-800 dark:text-neutral-400">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-gray-800 dark:text-neutral-400">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-gray-800 dark:text-neutral-400">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-gray-800 dark:text-neutral-400">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-gray-800 dark:text-neutral-400">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            
          </div>
        </div>

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
            <Button onClick={() => {setDrawer(true)}} color="gray">Analyze</Button>
            <Button color="gray">Edit</Button>
            <Button color="gray">Comment</Button>
            <IoCloseCircleOutline onClick={()=>{navigate(-1)}} className='ml-[700px] mt-3 cursor-pointer'/>
          </ButtonGroup>
          
           </div>
           
        {/* Highlighted Current Paragraph */}
        <div className="flex items-center justify-center">
          <p className="relative text-lg leading-relaxed text-gray-800 transition-all duration-300 ease-in-out z-10 opacity-100">
            {paragraphs[currentIndex]}
          </p>
        </div>

        {/* Navigation Buttons at the Bottom */}
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
      <div className="w-[68%] text-center mt-4 text-justify">
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
