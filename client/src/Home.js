import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic from "./Images/home.png";
import HeroSection from "./Components/Home/HeroSection";
import FeaturesSection from "./Components/Home/FeaturesSection";
import CTASection from "./Components/Home/CTASection";
import Footer from "./Components/Home/Footer";

function Home() {
  return (
    <Container fluid>
       <Row style={{ background: "linear-gradient(to right, #D63484, #1d4ed8)", padding: "20px" }}>
        <div
          style={{
            color: "white",
            background: "linear-gradient(to right, #D63484, #1d4ed8)",
            fontSize: "160%",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          <span style={{fontSize: "130%"}}>GEN-AI </span>(Campus Placement Information & Training Portal)
        </div>
      </Row>
      <Row>
        <HeroSection />
        <FeaturesSection/>
        <CTASection />
        <Footer/>
      </Row>
    </Container>
  );
}

export default Home;
