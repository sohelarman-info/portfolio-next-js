import React from "react";
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const AwardsTabData = ({ title, description, btn }) => {
  return (
    <div className="awards-content">
      <h2 className={DmSans.className}>{title}</h2>
      <p className={DmSans.className}>{description}</p>
      <motion.button
        className={DmSans.className}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {btn}
      </motion.button>
    </div>
  );
};

export default AwardsTabData;
