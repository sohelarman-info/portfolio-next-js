import React from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const AboutText = () => {
  return (
    <div className="about-text">
      <p className={DmSans.className}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised.
      </p>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={DmSans.className}
      >
        Download Now
      </motion.button>
    </div>
  );
};

export default AboutText;
