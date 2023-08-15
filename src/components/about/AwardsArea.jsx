import React, { useState } from "react";
import { AwardsData } from "@/data/AwardsData";
import { DM_Sans } from "next/font/google";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import AwardsTabData from "./AwardsTabData";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const AwardsArea = () => {
  const [active, setActive] = useState(0);

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <div className="awards-area">
      <Row className="justify-content-between align-items-center">
        <Col lg={6}>
          <Row className="gy-4">
            {AwardsData.map((item, i) => (
              <Col lg={6} key={i}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={active == i ? "awards-item active" : "awards-item"}
                  onClick={() => handleActive(i)}
                >
                  <h2 className={DmSans.className}>{item.title}</h2>
                  <p className={DmSans.className}>{item.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={5}>
          {AwardsData.map((item, i) => (
            <div key={i}>
              {active == i && (
                <motion.div
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  transition={{
                    staggerChildren: 0.2,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <AwardsTabData
                    title={item.experience}
                    description={item.details}
                    btn="Visit Now"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AwardsArea;
