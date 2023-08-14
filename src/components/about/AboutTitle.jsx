import { DM_Sans } from "next/font/google";
import React from "react";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const AboutTitle = () => {
  return (
    <div className="about-title">
      <h2 className={DmSans.className}>
        Failure is The Power that Gives <span>Success</span>
      </h2>
    </div>
  );
};

export default AboutTitle;
