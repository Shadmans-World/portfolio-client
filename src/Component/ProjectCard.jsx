import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Pages/Home/Projects/projectCard.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { p } from "motion/react-client";
const ProjectCard = ({ project }) => {
  const {
    title,
    images,
    liveLink,
    githubClientRepo,
    githubServerRepo,
    details,
    features
  } = project;
  return (
    <div className="card bg-base-100  shadow-xl">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image} alt={`Slide ${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-body flex flex-col gap-y-4 justify-center items-center">
        <div className="flex justify-center">
          <h2 className="card-title ">{title}</h2>
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <a
            className="btn bg-sereneTeal hover:bg-sunsetOrange"
            href={liveLink}
          >
            Live LInk
          </a>
          <a
            className="btn bg-sereneTeal hover:bg-sunsetOrange"
            href={githubClientRepo}
          >
            Github Client Repo
          </a>

          {githubServerRepo ? (
            <a
              className="btn bg-sereneTeal hover:bg-sunsetOrange"
              href={githubServerRepo}
            >
              Github Server Repo
            </a>
          ) : (
            ""
          )}
        </div>

        <div className="card-actions ">
          <button  onClick={() => document.getElementById("my_modal_5").showModal()} className="btn bg-sereneTeal hover:bg-sunsetOrange">
            See Details
          </button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
     
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <h3 className="text-center text-3xl font-bold mb-6">{title}</h3>
          <p>{details}</p>
          <div>
            <h4 className="text-3xl mt-5 border-b-2 mb-2">Features</h4>
            <ul class="list-disc pl-5">
                {
                    features.map((feature,idx)=> <li className="my-2" key={idx}>{feature}</li>)
                }
            </ul>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-sereneTeal hover:bg-sunsetOrange">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectCard;
