import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const Links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="border-t border-gray-300">
      {/* first column */}
      <div className="w-[80%] m-auto mt-10">
        <div className=" flex gap-30 border-b-2 border-gray-200 pb-10">
          <div className="">
            <h2 className="mb-10 text-2xl font-bold">Furniro.</h2>
            <p className="text-[#9F9F9F] text-[13px]">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </div>

          {/* second column */}
          <div>
            <p className="mb-12 text-[#9F9F9F]">Links</p>

            <ul className="flex flex-col gap-7 text-[13px]">
              {Links.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* third column */}
          <div>
            <p className="mb-12 text-[#9F9F9F]">Help</p>

            <ul className="flex flex-col gap-7 text-[13px] ">
              <li>
                <NavLink>Payment Options</NavLink>
              </li>
              <li>
                <NavLink>Returns</NavLink>
              </li>
              <li>
                <NavLink>Privacy Policies</NavLink>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <p className="mb-11 text-[#9F9F9F]">Newsletter</p>

            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="border-b border-black text-[13px] outline-none"
              />
              <button className=" ml-4 border-b border-black text-[13px] font-bold cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <p className="mt-6 mb-6 text-[13px]">2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};
export default Footer;
