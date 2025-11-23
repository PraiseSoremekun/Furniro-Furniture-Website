import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../icons/arrow-right.svg"

function Explore() {
  return (
    // For the explore section
    <div className="flex gap-5 bg-[#FCF8F3] pt-[30px] pb-[30px]">
      {/* Div holding the text and big image because of the text centered */}
      <div className="flex justify-center items-center">
        {/* div holding the text */}
        <div className="pl-25  w-[500px] ">
          <h2 className="text-4xl font-bold mb-1.5">
            50+ Beautiful Rooms <br /> Inspiration
          </h2>
          <p className="text-[#616161] text-[16px] mb-5">
            Our designer already made a lot of beautiful <br/> prototipe of rooms that
            inspire you
          </p>
          <NavLink to={`shop`}>
            <button className="bg-[#B88E2F] px-8 py-2 text-white cursor-pointer">Explore More</button>
          </NavLink>
        </div>
        {/* div holding the big image */}
        <div className="relative ">
          <img src="/images/explore-img1.svg" alt="Explore image 1" />
          <div>
            <img src="/images/Content-explore.svg" alt="Content" className="absolute bottom-7 left-7" />
            <img src={arrow} alt="Arrow" className="absolute bottom-7 right-25.5 bg-[#B88E2F] px-4 py-3"/>
          </div>
        </div>
      </div>
      {/* div holding the carousel */}
      <div className="flex w-[300px] h-[400px] justify-between gap-5 flex-wrap">
        <img src="/images/explore-img2.svg" alt=" Explore image 2" />
        <img src="/images/explore-img3.jpeg" alt="Explore image 3" />
        <img src="/images/explore-img4.jpg" alt="Explore image 4" />
      </div>
    </div>
  );
}

export default Explore;
