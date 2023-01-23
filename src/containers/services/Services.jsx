import React from "react";
// import Card from "../../components/card/Card";
import Cards from "../../components/cards/Cards";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const Services = () => {
  return (
    <section className="services container" id="services">
      <SectionHeader
        title="Why build"
        cont="with Hydra?"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <Cards />
    </section>
  );
};

export default Services;
