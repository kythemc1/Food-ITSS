import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import "./HomeServices.css";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomeServices = () => {
  const services = useLoaderData();
  const newData = services.slice(0, 3);

  return (
    <div className=" bg-white p-4">
      <div className="text-center my-12">
        <h2 className="text-4xl font-bold text-black">Gợi ý cho bạn</h2>
        <p className="text-black-500 pt-5">Dễ dàng tìm dược món ăn yêu thích</p>
      </div>
      <div className="mx-auto md:w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newData.length > 0 ? (
            newData.map((service) => (
              <div key={service.id}>
                <div className="card serviceCard w-full md:mx-0 bg-zinc-100 shadow-xl">
                  <PhotoProvider>
                    <PhotoView key={service.id} src={service?.media[0]?.link}>
                      <figure>
                        <img
                          className="rounded-t-lg object-cover w-full h-72"
                          src={service?.media[0]?.link}
                          alt="Shoes"
                        />
                      </figure>
                    </PhotoView>
                  </PhotoProvider>
                  <div className="card-body text-black">
                    <h2 className="card-title text-xl">{service?.name}</h2>
                    <div className="flex items-center">
                      {service.rating >= 1 && (<BsStarFill className="star-color mr-1" />)}
                      {service.rating >= 1.5 && (<BsStarFill className="star-color mr-1" />)}
                      {service.rating >= 2.5 && (<BsStarFill className="star-color mr-1" />)}
                      {service.rating >= 3.5 && (<BsStarFill className="star-color mr-1" />)}
                      {service.rating >= 4.5 && (<BsStarFill className="star-color mr-1" />)}
                      {service?.rating}
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm flex items-center mr-3">
                        <RiEBike2Fill className="color-red mr-2" />
                        {service?.location.slice(0, 40) +
                          (service?.location.length > 40 ? "..." : "")}
                      </span>
                    </div>
                    <p>
                      Nổi bật:
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
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className=" text-xl text-black flex items-center pb-8">
              Không tìm thấy nhà hàng. Hãy kiểm tra lại.
            </h4>
          )}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn red-button">
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
