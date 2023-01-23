import React from "react";
import "./tech.css";
import { BsChevronDown } from "react-icons/bs";
import unrealEngine from "../../assets/unreal-engine.png";
import unity from "../../assets/unity.png";
import oculus from "../../assets/oculus.png";
import vive from "../../assets/vive.png";
import techBg from "../../assets/tech-bg.png";

const Tech = () => {
  return (
    <section
      className="tech container"
      id="technologies"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="400"
    >
      <div
        className="tech__header"
        style={{ background: `url(${techBg}) no-repeat center center/cover` }}
      >
        <h2 className="tech__header--text">
          Technologies & Hardware
          <br />
          <span>used by Hydra VR</span>
        </h2>
        <BsChevronDown className="tech__header--icon" />
      </div>
      <div className="tech__details">
        <div className="tech__details--image">
          <img src={unrealEngine} alt="Unreal engine Logo" />
        </div>
        <div className="tech__details--image">
          <img src={unity} alt="unity Logo" />
        </div>
        <div className="tech__details--image">
          <img src={oculus} alt="oculus Logo" />
        </div>
        <div className="tech__details--image">
          <img src={vive} alt="VIVE Logo" />
        </div>
      </div>
    </section>
  );
};

export default Tech;
