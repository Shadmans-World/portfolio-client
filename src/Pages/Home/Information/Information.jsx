import React from "react";

import { FaFacebook, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { GrDocumentPdf } from "react-icons/gr";
const Information = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-5 items-center pb-10  ">
      <div className=" flex items-center px-2 ">
        {/* Button */}
        <div className="join join-vertical">
          <a href="https://github.com/Shadmans-World" target="_blank" className="btn join-item bg-sereneTeal hover:bg-sunsetOrange ">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shadman-undefined-839b65291/" target="_blank" className="btn join-item bg-sereneTeal hover:bg-sunsetOrange">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/shadman.shoumik.shaon" target="_blank" className="btn join-item bg-sereneTeal hover:bg-sunsetOrange">
            <FaFacebook />
          </a>
          
        </div>
        {/* Intro */}
        <div className="text-deepOcean flex flex-col space-y-4">
          <h3 className="text-3xl text-end">Md. Shadman Shoumik Shaon Pk</h3>
          <h5 className=" text-gray-500 text-2xl font-bold text-end">
            Full Stack Web Developer
          </h5>

          <p className="text-end">
          I'm a passionate Full Stack Web Developer with a strong problem-solving mindset. With hands-on experience in building dynamic, scalable applications, I combine technical expertise with a keen eye for detail. I am dedicated to creating innovative and efficient web solutions that drive results, and I thrive in collaborative environments, delivering high-quality projects that exceed expectations.
          </p>
          <div className="flex justify-end">
          <a href="/ShadmanCV.pdf" className="btn bg-sereneTeal hover:bg-sunsetOrange" download><GrDocumentPdf className="text-[16px]" /> Download CV</a>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="px-5 flex md:justify-start justify-center">
        <div className="lg:ml-40 ">
          <img
            className="h-[454px] w-[330px] rounded-full border-8"
            src="https://i.ibb.co.com/YWX197B/Whats-App-Image-2025-01-04-at-01-44-12-9b527ffe-removebg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
