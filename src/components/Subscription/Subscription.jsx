import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { DM_Sans, Open_Sans } from "next/font/google";
import RightArrowIcon from "@/svg/RightArrow";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Subscription = () => {
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
  return (
    <motion.div
      className="subscription"
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
        <div className="subscription-box">
          <Row className="justify-content-between align-items-center">
            <Col lg={5}>
              <div className="subscription-left">
                <h2 className={DmSans.className}>
                  Subscirbe to Our Newsletter
                </h2>
                <p className={OpenSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="subscription-right">
                <div className="subscription-input">
                  <input type="email" placeholder="Email" />
                  <button>
                    <RightArrowIcon />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
};

export default Subscription;
