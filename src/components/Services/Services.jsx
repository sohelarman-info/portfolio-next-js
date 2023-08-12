import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { DM_Sans, Open_Sans } from "next/font/google";

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

const Services = () => {
  return (
    <div className="services">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="service-left">
              <h2 className={DmSans.className}>
                I <span>Run</span> Agency <span>Smartly</span> With My{" "}
                <span>Team</span> Member.
              </h2>
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
              <div className="service-button">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={OpenSans.className}
                >
                  Say Hello
                </motion.button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="service-right">
              <div>hello</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
