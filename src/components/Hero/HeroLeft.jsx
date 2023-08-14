import React from "react";
import RightTopArrow from "@/svg/Right-Top-Arrow";
import Link from "next/link";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
import BehanceIcon from "@/svg/Behance";
import DribbleIcon from "@/svg/Dribble";
import InstagramHeroIcon from "@/svg/InstagramHero";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const HeroLeft = () => {
  return (
    <div className="hero-left">
      <h2 className={DmSans.className}>
        <span className="span-creative">Creative</span> Design and Work
        <span className="span-solution">Solution</span>
      </h2>
      <p className={DmSans.className}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered.
      </p>
      <div className="hero-button d-flex gap-4 align-items-center">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={OpenSans.className}
        >
          Say Hello
        </motion.button>
        <Link className={DmSans.className} href="#">
          My Work <RightTopArrow />
        </Link>
      </div>
      <div className="follow-button d-flex gap-5 align-items-center mt-5">
        <span className={DmSans.className}>Follow me on</span>
        <ul className="d-flex gap-4">
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link href="#">
              <BehanceIcon />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link href="#">
              <DribbleIcon />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link href="#">
              <InstagramHeroIcon />
            </Link>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default HeroLeft;
