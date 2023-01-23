import React from "react";
import "./about.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import vrGuy from "../../assets/vr-guy.png";
import Button from "../../components/button/Button";

const About = () => {
  return (
    <section className="about container" id="about">
      <SectionHeader
        title="Introduction"
        cont="to Hyrda VR"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />

      <div className="about__grid">
        <div
          className="about__grid--image"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="50"
        >
          <img src={vrGuy} alt="A guy putting on a VR headset" />
        </div>
        <div
          className="about__grid--content"
          data-aos="fade-up"
          data-aos-duration="3000"
          // data-aos-delay="500"
        >
          <h2>
            About <br />
            <span>Hydra VR</span>
          </h2>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <Button
            href="#opt-in"
            className="btn btn-primary"
            text="Let's get in touch"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
