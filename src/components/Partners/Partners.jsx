import DoccoSemimsIcon from "@/svg/DoccoSemims";
import EmadFashionIcon from "@/svg/EmadFashion";
import HappyMartIcon from "@/svg/HappyMart";
import LoriCrackerIcon from "@/svg/LoriCracker";
import { DM_Sans } from "next/font/google";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Partners = () => {
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
      className="partners"
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
        <Row>
          <Col lg={4} className="mx-auto text-center">
            <div className="partner-header">
              <h2 className={DmSans.className}>Reputed Partners</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <div className="partner-item text-center">
              <div className="partner-image">
                <HappyMartIcon />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="partner-item text-center">
              <div className="partner-image">
                <LoriCrackerIcon />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="partner-item text-center">
              <div className="partner-image">
                <EmadFashionIcon />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="partner-item text-center">
              <div className="partner-image">
                <DoccoSemimsIcon />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Partners;
