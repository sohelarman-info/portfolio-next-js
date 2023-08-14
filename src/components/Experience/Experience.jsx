import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Men from "../Images/Experiences/Men.webp";
import { DM_Sans, Open_Sans } from "next/font/google";
import CheckIcon from "@/svg/CheckIcon";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import ExCounterUp, {
  ExClientCounterUp,
  ExMemberCounterUp,
  ExProjectCounterUp,
} from "./ExCounterUp";

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

const Experience = () => {
  const Animation = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // project count animation
  const count = useMotionValue(0);
  const project = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 150, {
      duration: 2,
    });
    return animation.stop;
  }, []);

  return (
    <motion.div
      className="experiences"
      initial="hidden"
      whileInView="visible"
      variants={Animation}
      transition={{
        staggerChildren: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <Container>
        <Row className="justify-content-between">
          <Col lg={5}>
            <div className="experience-left">
              <Image
                src={Men}
                width={496}
                height={569}
                loading="lazy"
                alt="Men"
              />
              <div className="experience-age">
                <div className="ex-age-counter">
                  <h2 className={DmSans.className}>5+</h2>
                  <h2 className={DmSans.className}>Year</h2>
                  <p className={DmSans.className}>Experience</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="experience-right">
              <h2 className={DmSans.className}>
                We <span>Run</span> Agency <span>Smartly</span> With Our{" "}
                <span>Team</span> Member.
              </h2>
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
              <ul>
                <li className={DmSans.className}>
                  <CheckIcon /> There are many variations of passages of.
                </li>
                <li className={DmSans.className}>
                  <CheckIcon /> There are many variations of passages of.
                </li>
                <li className={DmSans.className}>
                  <CheckIcon /> There are many variations of passages of.
                </li>
                <li className={DmSans.className}>
                  <CheckIcon /> There are many variations of passages of.
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                Explore More
              </motion.button>

              <div className="experience-count">
                <Row className="align-items-center">
                  <Col lg={4}>
                    <ExMemberCounterUp number={50} title="Team Members" />
                  </Col>
                  <Col lg={4}>
                    <ExProjectCounterUp
                      number={150}
                      title="Completed Projects"
                    />{" "}
                  </Col>
                  <Col lg={4}>
                    <ExClientCounterUp number={500} title="Satisfied Clients" />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Experience;
