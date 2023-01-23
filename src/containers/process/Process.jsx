import React from "react";
import "./process.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import Steps from "../../components/steps/Steps";
import waveSvg from "../../assets/Vector-15.svg";

const Process = () => {
  return (
    <section className="process" id="process">
      <div className="container">
        <SectionHeader
          title="How we build"
          cont="with Hydra VR?"
          text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
        <Steps />
      </div>
      <img src={waveSvg} alt="Wave" className="wave" />
    </section>
  );
};

export default Process;
