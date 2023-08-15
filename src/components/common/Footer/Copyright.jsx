"use client";
import { CopyrightData } from "@/data/Footerdata";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Copyright = () => {
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
      className="copyright"
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
          <Col lg={12}>
            <ul className="d-flex justify-content-center gap-4">
              {CopyrightData.map((item, i) => (
                <li key={i}>
                  <Link className={OpenSans.className} href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Copyright;
