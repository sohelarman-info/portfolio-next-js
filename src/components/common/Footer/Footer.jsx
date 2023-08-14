"use client";
import { ResourcesData, ServicesData } from "@/data/Footerdata";
import FacebookIcon from "@/svg/Facebook";
import InstagramIcon from "@/svg/Instagram";
import Logo from "@/svg/Logo";
import PinterestIcon from "@/svg/Pinterest";
import SendIcon from "@/svg/SendIcon";
import TwitterIcon from "@/svg/twitter";
import { Bebas_Neue, DM_Sans, Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

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

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={3} className={OpenSans.className}>
            <div className="footer_section">
              <div className="footer_title">
                <Logo />
              </div>
              <div className="footer_content">
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} className={DmSans.className}>
            <div className="footer_section">
              <div className="footer_title">Services</div>
              <div className="footer_content">
                <ul>
                  {ServicesData.map((item, i) => (
                    <li key={i}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} className={DmSans.className}>
            <div className="footer_section">
              <div className="footer_title">Services</div>
              <div className="footer_content">
                <ul>
                  {ResourcesData.map((item, i) => (
                    <li key={i}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} className={DmSans.className}>
            <div className="footer_section">
              <div className="footer_title">Services</div>
              <div className="footer_content">
                <p className={DmSans.className}>
                  Subscribe for our upcoming latest address and resources
                </p>
                <div className="subcription_form d-flex align-item-center justify-content-between">
                  <input type="email" placeholder="email" />
                  <button>
                    <SendIcon />
                  </button>
                </div>
                <motion.div
                  className="footer_social container mt-4 gap-3"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="social_icon item" variants={item}>
                    <Link href="#">
                      <FacebookIcon />
                    </Link>
                  </motion.div>
                  <motion.div className="social_icon item" variants={item}>
                    <Link href="#">
                      <InstagramIcon />
                    </Link>
                  </motion.div>
                  <motion.div className="social_icon item" variants={item}>
                    <Link href="#">
                      <TwitterIcon />
                    </Link>
                  </motion.div>

                  <motion.div className="social_icon item" variants={item}>
                    <Link href="#">
                      <PinterestIcon />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
