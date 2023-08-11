"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { motion } from "framer-motion";

const Hero = () => {
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
          <Col lg={6}>
            <HeroLeft />
          </Col>
          <Col lg={6}>
            <HeroRight />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Hero;
