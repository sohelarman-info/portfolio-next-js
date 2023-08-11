import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutTitle from "./AboutTitle";
import AboutText from "./AboutText";
import { motion } from "framer-motion";

const About = () => {
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
      className="about"
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
            <AboutTitle />
          </Col>
          <Col lg={6}>
            <AboutText />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
