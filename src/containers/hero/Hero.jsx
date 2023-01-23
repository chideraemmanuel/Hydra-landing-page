import React from "react";
import "./hero.css";
import vrGirl from "../../assets/vr-girl.png";
import Button from "../../components/button/Button";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__text" data-aos="fade-up" data-aos-duration="1500">
        <h1>
          <span>Dive</span> Into The Depths <br /> Of
          <span> Virtual Reality</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>

        <div className="cta">
          <Button
            href="#opt-in"
            className="btn btn-primary"
            text="Build your world"
          />
          <BsArrowRight />
        </div>
      </div>
      <div className="hero__image" data-aos="fade-up" data-aos-duration="1500">
        <img src={vrGirl} alt="A girl putting on a VR headset" />
      </div>
    </section>
  );
};

export default Hero;
