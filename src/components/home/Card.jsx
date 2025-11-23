import React from "react";
import product1 from "/images/products/product-1.svg";
import product2 from "/images/products/product-2.svg";
import product3 from "/images/products/product-3.svg";
import product4 from "/images/products/product-4.svg";
import product5 from "/images/products/product-5.svg";
import product6 from "/images/products/product-6.svg";
import product7 from "/images/products/product-7.svg";
import product8 from "/images/products/product-8.svg";
import { NavLink } from "react-router-dom";

function Card() {
  const products = [
    {
      id: 1,
      image: product1,
      path: "/product-details/:id",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      previous: "Rp 3,500,000",
      discount: 10,
    },
    {
      id: 2,
      image: product2,
      path: "/product-details/:id",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      previous: "",
    },
    {
      id: 3,
      image: product3,
      path: "/product-details/:id",
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      previous: "Rp 14,000,000",
      discount: 50,
    },
    {
      id: 4,
      image: product4,
      path: "/product-details/:id",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      newItem: "New",
    },
    {
      id: 5,
      image: product5,
      path: "/product-details/:id",
      name: "Grifo",
      description: "Night lamp",
      price: 1500000,
      
    },
    {
      id: 6,
      image: product6,
      path: "/product-details/:id",
      name: "Muggo",
      description: "Small mug",
      price: 150000,
      newItem: "New",
    },
    {
      id: 7,
      image: product7,
      path: "/product-details/:id",
      name: "Pingky",
      description: "Cute bed set",
      price: 7000000,
      previous: "Rp 14,000,000",
      discount: 50,
    },
    {
      id: 8,
      image: product8,
      path: "/product-details/:id",
      name: "Potty",
      description: "Minimalist flower pot",
      price: 500000,
      newItem: "New",
    },
  ];
  return (
    <div className="mt-15 mb-15">
      <h2 className="text-center text-[25px] font-bold">Our Products</h2>
      <div className="flex flex-wrap justify-around w-[80%] gap-5 m-auto mt-5 ">
        {products.map((product) => {
          return (
            <div className="w-[23%] bg-[#F4F5F7] group relative overflow-hidden">
              <NavLink to={`product-details/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <div className="p-2">
                  <h3 className="mb-1 text-[20px] font-bold">{product.name}</h3>
                  <p className="text-[#898989] text-[15px] mb-1">
                    {product.description}
                  </p>
                  {/* For the Price */}
                  <div className="flex gap-2 justify-items-center items-center">
                    <h4 className="text-[17px] font-bold"> {product.price}</h4>
                    <h5 className="text-[#898989] text-[12px] line-through">
                      {product.previous}
                    </h5>
                  </div>
                  {/* For the discpunt side */}
                  {product.discount ? (
                    <span className="bg-[#E97171] rounded-full w-10 h-10 text-[15px] flex items-center justify-center absolute top-2 right-3">-{product.discount}%</span>
                  ) : product.newItem ? (
                    <span className="bg-[#2EC1AC] rounded-full w-10 h-10 text-[14px] flex items-center justify-center absolute top-2 right-3">{product.newItem}</span>
                  ) : null}

                  {/* The hover effect */}
                  <div className="absolute w-full h-full bg-black/60 flex items-center justify-center -bottom-0 -right-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-amber-50 text-[#B88E2F] text-[15px] py-3 px-10 cursor-pointer">
                      Add to Cart
                    </button>
                    <div>
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
      <NavLink to={`shop`}>
        <div className="flex justify-center mt-6">
          <button className="border-1 border-[#B88E2F] py-2 px-15 text-[#B88E2F] text-[12px] font-bold cursor-pointer">
            Show More
          </button>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
