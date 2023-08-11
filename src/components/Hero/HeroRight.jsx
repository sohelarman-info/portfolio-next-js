import Image from "next/image";
import React from "react";
import HeroImage from "../Images/Hero/HeroImage.webp";

const HeroRight = () => {
  return (
    <div className="hero-right">
      <Image
        src={HeroImage}
        width={400}
        height={400}
        loading="lazy"
        alt="Hero"
      />
    </div>
  );
};

export default HeroRight;
