import React, { useContext, useState, useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
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

  // Function to handle like/unlike action
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
        setReviewLikes((prev) => ({
          ...prev,
          [index]: prev[index] + 1 // Increase like count by 1
        }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  };

  // Function to render like count for a review
  const renderLikeCount = (index) => {
    return <a className="ml-2" style={{ alignContent: "end" }}>{reviewLikes[index]}</a>;
  };

  // Options for star filter select
  const options = [
    { value: "all", label: "All" },
    { value: "1", label: "1 Star" },
    { value: "2", label: "2 Stars" },
    { value: "3", label: "3 Stars" },
    { value: "4", label: "4 Stars" },
    { value: "5", label: "5 Stars" },
  ];

  // Filtered and sorted reviews based on starFilter
  const filteredReviews = reviews
    .filter((review) => {
      if (starFilter === "all") {
        return true;
      } else {
        return review.rating.toString() === starFilter;
      }
    })
    .sort((a, b) => b.like - a.like); // Sort by review.like in descending order

  return (
    <div>
      <div
        className="hero hero-service "
        style={{ backgroundImage: `url("${media[0]?.link}")` }}
      >
        {/* Hero content */}
      </div>
      <div className="px-24 text-black bg-white pb-10">
        {/* Content related to service details */}
      </div>
      <div className="px-24 text-black bg-zinc-100 pb-4">
        <div className="col-span-2">
          <h2 className="font-semibold text-2xl mb-3 pt-8 ">Reviews ({filteredReviews.length})</h2>
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
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review, index) => (
              <div key={review.id} className="card bg-white shadow-xl my-4">
                <div className="card-body">
                  <div className="avatar text-xl">
                    <FaCircleUser />
                  </div>
                  <p className="card-title text-sm">
                    {review.reviewer}{" "}
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <BsStarFill key={i} className="star-color" />
                    ))}
                  </p>
                  <div className="flex flex-wrap space-between">
                    <div className="w-32 h-32">
                      <img src={review.image_link} alt="" />
                    </div>
                    <div className="w-128 h-24 pl-8">
                      {review.content}
                    </div>
                  </div>
                  <div className="flex justify-end mb-2">
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
            <h4>No reviews matching the filter criteria</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
