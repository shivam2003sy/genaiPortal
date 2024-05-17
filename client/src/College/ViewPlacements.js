import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CollegeProfile from "./CollegeProfile";
import "../Components/CompanyProfile.css";
import axios from "axios";
import Placement from "./Placement";
import { useNavigate } from "react-router-dom";

function ViewPlacements() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const config = {
    headers: {
      authorization: localStorage.getItem("jwtToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/college/viewPlacement", config)
      .then((resp) => {
        console.log(resp);
        setData(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const gosearch = () => {
    navigate("/clgsearch");
  };
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <CollegeProfile val="6" />
          <Col
            xl="9"
            lg="9"
            md="9"
            sm="12"
            xs="12"
            style={{ marginTop: "1%", marginBottom: "10%" }}
          >
            <Row style={{ display: "flex", justifyContent: "end" }}>
              <Col sm={12} xs={12} md={6} lg={6}>
                <Form style={{ display: "flex" }}>
                  <input placeholder="Search Company" className="inp bg-neutral" />
                  <Button
                    onClick={gosearch}
                    style={{
                      width: "auto",
                      height: "auto",
                      background: "linear-gradient(10deg, #D63484, #1d4ed8)",
                    }}
                  >
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="Heading bg-gradient-to-r text-transparent from-primary to-secondary bg-clip-text">
                Your Placements
              </Col>
            </Row>
            <Row>
              {data.map((d) => (
                <Placement key={data._id} dt={d}></Placement>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ViewPlacements;
