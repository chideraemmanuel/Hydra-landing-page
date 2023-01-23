import React, { useState } from "react";
import Card from "../card/Card";
import "./cards.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Cards = () => {
  //   const carouselCards = document.querySelectorAll(".cards-carousel__card");
  const [activeSlide, setActiveSlide] = useState(1);
  const nextCarouselSlide = () => {
    if (activeSlide === 4) {
      setActiveSlide(1);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevCarouselSlide = () => {
    if (activeSlide === 1) {
      setActiveSlide(4);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const cards = [
    {
      image: "simulation",
      title: "Simulation",
      detail:
        "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      image: "education",
      title: "Education",
      detail:
        "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      image: "self-care",
      title: "Self-care",
      detail:
        "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      image: "outdoor",
      title: "Outdoor",
      detail:
        "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
  ];

  return (
    <>
      <div className="cards">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              detail={card.detail}
              image={card.image}
            />
          );
        })}
      </div>

      {/* <div className="cards-carousel">
        {cards.map((card) => (
          <div className="cards-carousel__card">
            <Card title={card.title} detail={card.detail} image={card.image} />
          </div>
        ))}
      </div> */}

      <div
        className="cards-carousel"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <BsChevronRight
          className="cards-carousel__button next"
          onClick={() => nextCarouselSlide()}
        />
        <BsChevronLeft
          className="cards-carousel__button prev"
          onClick={() => prevCarouselSlide()}
        />

        <div
          className={
            activeSlide === 1
              ? "cards-carousel__card active"
              : "cards-carousel__card"
          }
        >
          <Card
            title="Simulation"
            detail="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae. Vitae sapien pellentesque habitant morbinunc."
            image="simulation"
          />
        </div>
        <div
          className={
            activeSlide === 2
              ? "cards-carousel__card active"
              : "cards-carousel__card"
          }
        >
          <Card
            title="Education"
            detail="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae. Vitae sapien pellentesque habitant morbinunc."
            image="education"
          />
        </div>
        <div
          className={
            activeSlide === 3
              ? "cards-carousel__card active"
              : "cards-carousel__card"
          }
        >
          <Card
            title="Self-care"
            detail="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
            image="self-care"
          />
        </div>
        <div
          className={
            activeSlide === 4
              ? "cards-carousel__card active"
              : "cards-carousel__card"
          }
        >
          <Card
            title="Outdoor"
            detail="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae. Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor."
            image="outdoor"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
