"use client";
import { DM_Sans } from "next/font/google";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";
import BlogOne from "../Images/Blog/blog-1.png";
import BlogTwo from "../Images/Blog/blog-2.png";
import BlogThree from "../Images/Blog/blog-3.png";
import BlogFour from "../Images/Blog/blog-4.png";
import BlogFive from "../Images/Blog/blog-5.png";
import CalendarIcon from "@/svg/CalendarIcon";
import Link from "next/link";
import Slider from "react-slick";
import LeftArrowIcon from "@/svg/LeftArrow";
import RightArrowIcon from "@/svg/RightArrow";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// next slide
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RightArrowIcon />
    </div>
  );
}

// Previous Slide
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <LeftArrowIcon />
    </div>
  );
}

const Blog = () => {
  // slick slider
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Page animation
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
      className="blog"
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
            <div className="blog-header text-center">
              <Row>
                <Col className="mx-auto" lg={7}>
                  <h2 className={DmSans.className}>Latest Blog</h2>
                </Col>
              </Row>
              <Row>
                <Col className="mx-auto" lg={7}>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="blog-slider">
              <Row>
                <Slider {...settings}>
                  <Col lg={4}>
                    <div className="blog-slide-item">
                      <Image src={BlogOne} alt="blog-01" />
                      <h6 className={DmSans.className}>
                        <CalendarIcon /> 10 January 2023
                      </h6>
                      <h4 className={DmSans.className}>
                        Bitcoin and Economic Freedom
                      </h4>
                      <Link className={DmSans.className} href="#">
                        Read More
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="blog-slide-item">
                      <Image src={BlogTwo} alt="blog-01" />
                      <h6 className={DmSans.className}>
                        <CalendarIcon /> 10 January 2023
                      </h6>
                      <h4 className={DmSans.className}>
                        Permalink to New World Wide Payment
                      </h4>
                      <Link className={DmSans.className} href="#">
                        Read More
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="blog-slide-item">
                      <Image src={BlogThree} alt="blog-01" />
                      <h6 className={DmSans.className}>
                        <CalendarIcon /> 10 January 2023
                      </h6>
                      <h4 className={DmSans.className}>
                        Bitcoin and EconExchange Rate of Bitcoin system
                      </h4>
                      <Link className={DmSans.className} href="#">
                        Read More
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="blog-slide-item">
                      <Image src={BlogFour} alt="blog-01" />
                      <h6 className={DmSans.className}>
                        <CalendarIcon /> 10 January 2023
                      </h6>
                      <h4 className={DmSans.className}>
                        Bitcoin and Economic Freedom mainly across
                      </h4>
                      <Link className={DmSans.className} href="#">
                        Read More
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="blog-slide-item">
                      <Image src={BlogOne} alt="blog-01" />
                      <h6 className={DmSans.className}>
                        <CalendarIcon /> 10 January 2023
                      </h6>
                      <h4 className={DmSans.className}>
                        Bitcoin and Economic Freedom
                      </h4>
                      <Link className={DmSans.className} href="#">
                        Read More
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="blog-slide-item">
                      <Image src={BlogFive} alt="blog-01" />
                      <h6 className={DmSans.className}>
                        <CalendarIcon /> 10 January 2023
                      </h6>
                      <h4 className={DmSans.className}>
                        Bitcoin and Economic Freedom
                      </h4>
                      <Link className={DmSans.className} href="#">
                        Read More
                      </Link>
                    </div>
                  </Col>
                </Slider>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Blog;
