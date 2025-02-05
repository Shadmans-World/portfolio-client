import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === parseInt(id));
        setProject(foundProject);
      });
  }, [id]);

  if (!project) {
    return <div className="text-center text-xl font-bold">Project not found!</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-4">{project.title}</h1>
      
      {/* Swiper Image Slider */}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full h-64 rounded-lg overflow-hidden mb-6"
      >
        {project.images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={image}
              alt={`Slide ${idx}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <p className="text-lg mb-6">{project.description}</p>
      
      <h2 className="text-2xl font-semibold border-b-2 pb-2">Technology Stack</h2>
      <ul className="list-disc pl-5 mb-4">
        {project.technologyStack?.map((tech, idx) => (
          <li key={idx} className="my-1">{tech}</li>
        ))}
      </ul>
      
      <h2 className="text-2xl font-semibold border-b-2 pb-2">Challenges Faced</h2>
      <ul className="list-disc pl-5 mb-4">
        {project.challengesFaced?.map((challenge, idx) => (
          <li key={idx} className="my-1">{challenge}</li>
        ))}
      </ul>
      
      <h2 className="text-2xl font-semibold border-b-2 pb-2">Potential Improvements</h2>
      <ul className="list-disc pl-5 mb-4">
        {project.potentialImprovements?.map((improvement, idx) => (
          <li key={idx} className="my-1">{improvement}</li>
        ))}
      </ul>
      
      <div className="flex gap-4 mt-6">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-sereneTeal hover:bg-sunsetOrange text-white"
        >
          Live Project
        </a>
        <a
          href={project.githubClientRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-sereneTeal hover:bg-sunsetOrange text-white"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
