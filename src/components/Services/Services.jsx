import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { DM_Sans, Open_Sans } from "next/font/google";
import WebDevIcon from "@/svg/WebDevIcon";
import GraphicDesignIcon from "@/svg/GraphicDesignIcon";
import ProductDesignIcon from "@/svg/ProductDesignIcon";

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
      className="services"
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
              <div className="service-item">
                <div className="service-item-icon">
                  <div className="service-icon-circle">
                    <WebDevIcon />
                  </div>
                </div>
                <div className="service-item-content">
                  <h2 className={DmSans.className}>Web Development</h2>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-item-icon">
                  <div className="service-icon-circle">
                    <ProductDesignIcon />
                  </div>
                </div>
                <div className="service-item-content">
                  <h2 className={DmSans.className}>
                    Product Design & Development
                  </h2>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-item-icon">
                  <div className="service-icon-circle">
                    <GraphicDesignIcon />
                  </div>
                </div>
                <div className="service-item-content">
                  <h2 className={DmSans.className}>Graphic Design</h2>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Services;
