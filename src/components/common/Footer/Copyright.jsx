"use client";
import { CopyrightData } from "@/data/Footerdata";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Copyright = () => {
  return (
    <div className="copyright">
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
    </div>
  );
};

export default Copyright;
