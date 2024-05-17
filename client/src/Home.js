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
      <Row style={{ backgroundColor: "#ec4899", padding: "20px" }}>
        <div
          style={{
            color: "white",
            backgroundColor: "#ec4899",
            fontSize: "160%",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          GEN-AI
        </div>
      </Row>
      <Row>
        <HeroSection />
        <FeaturesSection/>
        <CTASection />
        <Footer/>
      </Row>
      {/* <Row style={{ display: "flex", marginTop: "2%", marginBottom: "6%" }}>
        <Col style={{ display: "flex", justifyContent: "end" }}>
          <Link to="/companylogin">
            <Button
              style={{
                fontSize: "150%",
                color: "black",
                backgroundColor: "white",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                borderRadius: "17px",
                width: "115%",
              }}
            >
              Company
            </Button>
          </Link>
        </Col>
        <Col style={{ display: "flex", justifyContent: "start" }}>
          <Link to="/institutelogin">
            <Button
              style={{
                fontSize: "150%",
                color: "white",
                backgroundColor: "black",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                borderRadius: "17px",
                width: "115%",
              }}
            >
              Student
            </Button>
          </Link>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Home;
