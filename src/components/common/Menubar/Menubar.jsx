"use client";
import MenuData from "@/data/Menudata";
import Logo from "@/svg/Logo";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Menubar = () => {
  return (
    <div>
      <Navbar expand="lg" className="py-3">
        <Container>
          <Link href="/">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {MenuData?.map((menu, i) => (
                <Link
                  className={DmSans.className + " " + "mx-4"}
                  href={menu.url}
                  key={i}
                >
                  {menu.title}
                </Link>
              ))}
            </Nav>
            <Button variant="primary nav-contact-btn">Contact Now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
