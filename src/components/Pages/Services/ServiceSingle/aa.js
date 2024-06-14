import React, { useContext, useState, useEffect } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import "./ServiceSingle.css";
import { AuthContext } from "../../../../context/AuthProvider";
import { AiFillLike } from "react-icons/ai";
import Select from "react-select";
import { FaCircleUser } from "react-icons/fa6";

const ServiceSingle = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { id, name, rating, reviews, location, media, food_drinks } = service;
  const [starFilter, setStarFilter] = useState("all");
  const [likedItemList, setLikedItemList] = useState([]);
  const [reviewLikes, setReviewLikes] = useState({}); // State to keep track of like counts

  useEffect(() => {
    // Initialize reviewLikes state with initial like counts from reviews
    const initialLikes = {};
    reviews.forEach(review => {
      initialLikes[review.id] = review.like || 0;
    });
    setReviewLikes(initialLikes);
  }, [reviews]);

  const filteredReviews = reviews.filter((review) => {
    if (starFilter === "all") {
      return true;
    } else {
      const rating = review.rating;
      if (starFilter === "5") {
        return rating === 5;
      } else if (starFilter === "4") {
        return rating === 4;
      } else if (starFilter === "3") {
        return rating === 3;
      } else if (starFilter === "2") {
        return rating === 2;
      } else if (starFilter === "1") {
        return rating === 1;
      }
    }
  });

  const options = [
    { value: "all", label: "All" },
    { value: "1", label: "1 Star" },
    { value: "2", label: "2 Stars" },
    { value: "3", label: "3 Stars" },
    { value: "4", label: "4 Stars" },
    { value: "5", label: "5 Stars" },
  ];

  const handleLikedItemList = (index) => {
    if (likedItemList.includes(index)) {
      // Unlike logic
      setLikedItemList((prev) => prev.filter((e) => e !== index));
      fetch(`http://localhost:8000/api/reviews/${index}?type=dislike`, {
        method: "POST",
      })
      .then((response) => response.json())
      .then((data) => {
        setReviewLikes((prev) => ({
          ...prev,
          [index]: prev[index] - 1 // Decrease like count by 1
        }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    } else {
      // Like logic
      setLikedItemList((prev) => [...prev, index]);
      fetch(`http://localhost:8000/api/reviews/${index}?type=like`, {
        method: "POST",
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('====================================');
        console.log("likedItemList: ", likedItemList);
        console.log('====================================');
        setReviewLikes((prev) => ({
          ...prev,
          [index]: prev[index] + 1 
        }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  };

  const renderLikeCount = (index) => {
    return <a className="ml-2" style={{ alignContent: "end" }}>{reviewLikes[index]}</a>;
  };




  return (
    <div>
      <div
        className="hero hero-service "
        style={{ backgroundImage: `url("${media[0]?.link}")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content ml-20 text-neutral-content">
          <div className="my-16 text-white">
            <h1 className="mb-5 text-5xl font-bold ">{name}</h1>
            <div className="flex items-center text-xl font-semibold ">
              {rating >= 1 && (<BsStarFill className="star-color mr-1" />)}
              {rating >= 1.5 && (<BsStarFill className="star-color mr-1" />)}
              {rating >= 2.5 && (<BsStarFill className="star-color mr-1" />)}
              {rating >= 3.5 && (<BsStarFill className="star-color mr-1" />)}
              {rating >= 4.5 && (<BsStarFill className="star-color mr-1" />)}
              {rating}
            </div>
            <div className="pt-10">
              <div className="w-full flex space-between md:w-6/12 my-2">
                <FaLocationDot
                  className="text-xl"
                  style={{ marginRight: "4px", marginTop: "-2px" }}
                />{" "}
                {location}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 text-black bg-white pb-10">
        <div>
          <div className="mb-2">
            <h2 className="font-semibold text-2xl mb-3 pt-8">
              Food and Drinks
            </h2>
            <div className="flex flex-wrap justify-left">
              {food_drinks.map((food_drink, index) => (
                <div
                  key={index}
                  className=" shadow-xl w-48 mt-8 mr-8 rounded-lg">
                  <div className="w-48  rounded-lg border-1 border-zinc-200">
                    <img
                      className="rounded-t-lg object-cover w-full h-48"
                      src={media[1]?.link}
                      alt="Shoes"
                    />
                  </div>
                  <div
                    className="text-black bg-zinc-100 card-body"
                    style={{ padding: "1rem" }}>
                    <p className="card-title text-sm">{food_drink?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 text-black bg-zinc-100 pb-4">
        <div className="col-span-2">
          <h2 className="font-semibold text-2xl mb-3 pt-8 ">Reviews ({reviews.length})</h2>
          <div className="w-80">
            <Select
              options={options}
              name="Rating"
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setStarFilter(e.value)}
            />
          </div>
        </div>
        <div>
          {filteredReviews ? (
            filteredReviews.map((review, index) => (
              <div key={review.id} className="card bg-white shadow-xl my-4">
                <div className="card-body">
                  <>
                    <p className="card-title text-sm">
                      <div className="avatar text-xl">
                          <FaCircleUser/>
                      </div>
                      {review.reviewer}{" "}
                      {review.rating >= 1 && (
                        <BsStarFill className="star-color" />
                      )}
                      {review.rating >= 2 && (
                        <BsStarFill className="star-color" />
                      )}
                      {review.rating >= 3 && (
                        <BsStarFill className="star-color" />
                      )}
                      {review.rating >= 4 && (
                        <BsStarFill className="star-color" />
                      )}
                      {review.rating === 5 && (
                        <BsStarFill className="star-color" />
                      )}
                    </p>
                  </>
                  <div className="flex flex-wrap space-between">
                    <div className="w-32 h-32 ">
                      <img src={review?.image_link} alt="" />
                    </div>
                    <div className="w-128 h-24 pl-8">
                      {review.content}
                    </div>
                  </div>
                  <div
                    className="flex justify-end mb-2"
                    // onClick={handleLike(review.id)}
                  >
                    <AiFillLike
                      size={30}
                      color={likedItemList.includes(review.id) ? "red" : "black"}
                      onClick={() => handleLikedItemList(review.id)}
                    />
                    {renderLikeCount(review.id)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4>No review yet</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
