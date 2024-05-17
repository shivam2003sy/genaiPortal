import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Placement from "../College/Placement";
import { Container, Row, Col } from "react-bootstrap";
import CompanyProfile from "./CompanyProfile";

function Collegefromcomp() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const config = {
    headers: {
      authorization: localStorage.getItem("jwtToken"),
    },
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/company/getAllCollege/placements/${id}`,
        config
      )
      .then((resp) => {
        console.log(resp);
        setData(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <CompanyProfile val="3" />
        <Col
          xl="9"
          lg="9"
          md="9"
          sm="12"
          xs="12"
          style={{ marginTop: "1%", marginBottom: "10%"  }}
        >
          <Row style={{}}>
            <h1 className="bg-gradient-to-r text-transparent from-primary to-secondary bg-clip-text text-center">
              These are this year's placement of this college!
            </h1>
          </Row>
          <Row>
            {data.map((d) => (
              <Placement key={data._id} dt={d}></Placement>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Collegefromcomp;
