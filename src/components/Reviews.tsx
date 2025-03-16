import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/Reviews.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface Review {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const reviews: Review[] = [
  {
    name: "Judelyne Valladares",
    role: "Patient",
    rating: 4,
    content:
      "My experience at the UCDC Physiotherapist Dr Devi was extremely good. She not only detected the cause of my back pain but a solution too. At every session she taught me different exercises and slowly relieved me of my pain. Her friendly nature helped me be open and get well soon. The UCDC clinic is well equipped and well maintained. The office staff is very helpful and friendly too. The overall management is very good.",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocIbH-6VZbFwfM2oamhB63C7ykJVebscpy-eHy5ZJTApgMDlQQ=w120-h120-p-rp-mo-br100",
  },
  {
    name: "Rosy Mathew",
    role: "Patient",
    rating: 5,
    content:
      "I visited UCDC Physiotherapy section with severe pain due to Cervical spondylosis and was attended by Devi, the physiotherapist. I appreciate the vibrancy, pleasant nature and positive attitude with which she treated me. Various exercises and IFT helped me a lot in the reduction of pain on my neck. I feel much better now. As a whole it was a great experience.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUP0T7W5oogAT1uyWBgmVCoJYVrE4v0T-MfQwOdWAC3Tw-MGqI=w120-h120-p-rp-mo-br100",
  },
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={
          index < fullStars
            ? "star-filled"
            : index === fullStars && hasHalfStar
            ? "star-half"
            : "star-empty"
        }
      />
    ));
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Start auto-scrolling
    if (!isPaused) {
      autoScrollInterval.current = setInterval(nextReview, 5000);
    }

    // Cleanup function
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="reviews-container" id="reviews">
      <h1>Patient Reviews</h1>
      <div
        className="reviews-carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="nav-button prev" onClick={prevReview}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="review-card">
          <div className="review-content">
            <div className="reviewer-image">
              {reviews[currentIndex].image ? (
                <img
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].name}
                />
              ) : (
                <div className="default-avatar">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              )}
            </div>
            <div className="stars-container">
              {renderStars(reviews[currentIndex].rating)}
            </div>
            <p className="review-text">"{reviews[currentIndex].content}"</p>
            <div className="reviewer-info">
              <h3>{reviews[currentIndex].name}</h3>
              <p>{reviews[currentIndex].role}</p>
            </div>
          </div>
        </div>

        <button className="nav-button next" onClick={nextReview}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="dots-container">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
