import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({service}) => {
    const {title, price, img} = service
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
       <Image src={img} 
       width={250}
       height={250}
       alt={title}
       >

       </Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between items-center">
           <h2 className="font-bold text-primary">Price: {price}</h2>
          <button className="btn btn-primary btn-outline"><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
