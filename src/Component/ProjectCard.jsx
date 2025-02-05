import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg p-4">
      {/* Swiper for Project Images */}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full h-48 rounded-lg overflow-hidden"
      >
        {project.images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={image}
              alt={`Slide ${idx}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Project Name */}
      <h2 className="text-xl font-bold mt-4 text-center">{project.title}</h2>

      {/* "View More / Details" Button */}
      <Link
        to={`/project/${project.id}`} 
        className="btn bg-sereneTeal hover:bg-sunsetOrange text-white mt-4 w-full"
      >
        View More / Details
      </Link>
    </div>
  );
};

export default ProjectCard;
