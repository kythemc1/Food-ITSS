import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesCollection = ({ search, setSearch }) => {
  const services = useLoaderData();

  var newData = services.map((item) => {
    const searchKey = `${item.food_drinks.map((fd) => fd.name).join(" ")}`;
    return { ...item, searchKey };
  });

  if (search !== "") {
    newData = newData.filter((item) => item.searchKey.includes(search));
  }

  return (
    <div className="pb-16 pt-16 bg-white">
      <div className="mx-auto md:w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newData.map((service) => (
            <div key={service.id}>
              <div className="card serviceCard w-full md:mx-0 bg-zinc-100 shadow-xl">
                <PhotoProvider>
                  <PhotoView key={service.id} src={service?.media[0]?.link}>
                    <figure>
                      <img src={service?.media[0]?.link} alt="Shoes" />
                    </figure>
                  </PhotoView>
                </PhotoProvider>
                <div className="card-body text-black">
                  <h2 className="card-title text-xl">{service?.name}</h2>
                  <div className="flex items-center">
                    <BsStarFill className="color-red mr-1" />
                    <BsStarFill className="color-red mr-1" />
                    <BsStarFill className="color-red mr-1" />
                    <BsStarFill className="color-red mr-1" />
                    <BsStarHalf className="color-red mr-2" /> {service?.rating}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm flex items-center mr-3">
                      <RiEBike2Fill className="color-red mr-2" />
                      {service?.location.slice(0, 40) +
                        (service?.location.length > 40 ? "..." : "")}
                    </span>
                    <span className="text-sm flex items-center">
                      {/* <IoCart className="color-red mr-2" />
                      {service?.amenities?.takeout} */}
                    </span>
                  </div>
                  <p>
                    Specialties:
                    {" " +
                      service?.food_drinks[0]?.name +
                      (service?.food_drinks[1]?.name
                        ? ", " + service?.food_drinks[1]?.name + ", "
                        : "") +
                      (service?.food_drinks[2]?.name
                        ? service?.food_drinks[2]?.name + ", " + "..."
                        : "")}
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/services/${service.id}`} className="badge">
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCollection;
