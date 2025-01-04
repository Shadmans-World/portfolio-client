import React, { useState } from "react";
import { FaBootstrap, FaHtml5, FaJs, FaPython } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
  const [modalData, setModalData] = useState({ isOpen: false, title: "", description: "" });

  const skills = [
    { 
      title: "HTML", 
      icon: <FaHtml5 className="text-2xl" />, 
      description: "HTML was my first step into web development. It allowed me to structure content and create the foundation of every web page. Starting with HTML sparked my passion for coding." 
    },
    { 
      title: "CSS", 
      icon: <FaCss3 className="text-2xl" />, 
      description: "CSS introduced me to the world of design and styling. Through CSS, I learned to create visually stunning, responsive web pages that adapt seamlessly to any device." 
    },
    { 
      title: "React", 
      icon: <RiReactjsFill className="text-2xl" />, 
      description: "React revolutionized how I build user interfaces. Learning React opened up possibilities for creating dynamic, component-based applications with ease and efficiency." 
    },
    { 
      title: "Bootstrap", 
      icon: <FaBootstrap className="text-2xl" />, 
      description: "Bootstrap taught me how to quickly prototype and develop responsive websites. It streamlined my workflow and helped me maintain consistent designs." 
    },
    { 
      title: "Tailwind", 
      icon: <RiTailwindCssFill className="text-2xl" />, 
      description: "Tailwind CSS introduced me to utility-first design. Its customizable classes made building unique and scalable designs much more efficient and enjoyable." 
    },
    { 
      title: "Node.js", 
      icon: <FaNodeJs className="text-2xl" />, 
      description: "Node.js empowered me to dive into backend development. It was exciting to use JavaScript for server-side programming and build scalable APIs and services." 
    },
    { 
      title: "Express", 
      icon: <SiExpress className="text-2xl" />, 
      description: "Express provided a structured approach to backend development. It simplified routing and middleware management, enabling me to build robust web applications." 
    },
    { 
      title: "MongoDB", 
      icon: <SiMongodb className="text-2xl" />, 
      description: "MongoDB made data storage and retrieval intuitive. Its flexible document-based structure allowed me to handle large datasets with ease." 
    },
    { 
      title: "JavaScript", 
      icon: <FaJs className="text-2xl" />, 
      description: "JavaScript is the core of my development journey. From adding interactivity to building full-stack applications, it has been my most reliable tool." 
    },
    { 
      title: "Python", 
      icon: <FaPython className="text-2xl" />, 
      description: "Python broadened my horizons beyond web development. It introduced me to data analysis, scripting, and automation, enhancing my versatility as a programmer." 
    },
    { 
      title: "Firebase", 
      icon: <IoLogoFirebase className="text-2xl" />, 
      description: "Firebase has been invaluable for backend-as-a-service. It helped me implement real-time databases, authentication, and hosting for projects quickly and effectively." 
    },
  ];
  

  const openModal = (title, description) => {
    setModalData({ isOpen: true, title, description });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: "", description: "" });
  };

  return (
    <div className="my-5">
      <h3 className="text-center text-3xl font-bold pb-10">Skills</h3>
      <p className="text-center">Click on each skill to view its description.</p>
      <div className="w-full flex justify-evenly p-10 flex-wrap gap-5">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="relative w-[80px] bg-sereneTeal hover:bg-sunsetOrange text-white px-7 pb-3 text-center rounded-lg h-[80px]"
            onClick={() => openModal(skill.title, skill.description)}
          >
            {skill.icon}
            <span className="absolute bg-deepOcean text-white text-sm px-2 py-1 rounded-md bottom-0 left-0 w-full">
              {skill.title}
            </span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalData.isOpen && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-5 w-[300px] text-center shadow-lg">
            <h3 className="text-xl font-bold mb-3">{modalData.title}</h3>
            <p className="text-sm text-gray-700 mb-5">{modalData.description}</p>
            <button
              className="bg-sereneTeal hover:bg-sunsetOrange text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
