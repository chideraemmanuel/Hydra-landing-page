import React, { useState } from "react";
import "./contact.css";
import { VscLocation } from "react-icons/vsc";
import { BiPhoneCall } from "react-icons/bi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const [activeCarouselItem, setActiveCarouselItem] = useState(1);

  const nextCarousel = () => {
    if (activeCarouselItem === 3) {
      setActiveCarouselItem(1);
    } else {
      setActiveCarouselItem(activeCarouselItem + 1);
    }
  };

  const prevCarousel = () => {
    if (activeCarouselItem === 1) {
      setActiveCarouselItem(3);
    } else {
      setActiveCarouselItem(activeCarouselItem - 1);
    }
  };

  return (
    <div className="container">
      <div
        className="contact"
        id="contact"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <a
          href="https://www.google.com/maps/place/Union+St,+Seattle,+WA+98101,+USA/@47.6099175,-122.3363054,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab465f9a32d:0x2b0d2afe1e719e15!8m2!3d47.6099139!4d-122.3341167"
          className="contact__link"
        >
          <div className="contact__link--icon">
            <VscLocation />
          </div>
          <div className="contact__link--detail">
            <h2>Pay Us a Visit</h2>
            <span>Union St, Seattle, WA 98101, United States</span>
          </div>
        </a>
        <a href="tel:(110) 1111-1010" className="contact__link">
          <div className="contact__link--icon">
            <BiPhoneCall />
          </div>
          <div className="contact__link--detail">
            <h2>Give Us a Call</h2>
            <span>(110) 1111-1010</span>
          </div>
        </a>
        <a href="mailto:Contact@HydraVTech.com" className="contact__link">
          <div className="contact__link--icon">
            <MdOutlineMailOutline />
          </div>
          <div className="contact__link--detail">
            <h2>Send Us a Message</h2>
            <span>Contact@HydraVTech.com</span>
          </div>
        </a>
      </div>

      <div
        className="contact-carousel"
        id="contact"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <BsChevronRight
          className="contact-carousel__btn next"
          onClick={() => nextCarousel()}
        />
        <BsChevronLeft
          className="contact-carousel__btn prev"
          onClick={() => prevCarousel()}
        />

        <a
          href="https://www.google.com/maps/place/Union+St,+Seattle,+WA+98101,+USA/@47.6099175,-122.3363054,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab465f9a32d:0x2b0d2afe1e719e15!8m2!3d47.6099139!4d-122.3341167" /* className="contact-carousel__item active" */
          className={
            activeCarouselItem === 1
              ? "contact-carousel__item active"
              : "contact-carousel__item"
          }
        >
          <VscLocation />
          <span>Union St, Seattle, WA 98101, United States</span>
        </a>

        <a
          href="tel:(110) 1111-1010"
          className={
            activeCarouselItem === 2
              ? "contact-carousel__item active"
              : "contact-carousel__item"
          }
        >
          <BiPhoneCall />
          <span>(110) 1111-1010</span>
        </a>

        <a
          href="mailto:Contact@HydraVTech.com"
          className={
            activeCarouselItem === 3
              ? "contact-carousel__item active"
              : "contact-carousel__item"
          }
        >
          <MdOutlineMailOutline />
          <span>Contact@HydraVTech.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
