import React from "react";
import { Card, Col } from "react-bootstrap";

function Placement({ dt }) {
  return (
    <Col xl="3" lg="3" md="3" sm="12" xs="12" style={{ marginBottom: "2%" }}>
      <Card style={{ width: "16rem", height: "100%", border: "solid gray" }}>
        <Card.Img
          variant="top"
          src={dt.studentImage}
          style={{ height: "250px", padding: "3%" }}
        />
        <Card.Body style={{ textAlign: "center", backgroundColor: "#f8f9fa" }}>
          <Card.Title>
            <h4 style={{ color: "#d63484", fontWeight: "bold" }}>
              {dt.studentName}
            </h4>
          </Card.Title>
          <Card.Text>
            <h4 style={{ color: "#1d4ed8" }}>{dt.company}</h4>
            {dt.profile === "" ? (
              <h6 style={{ color: "#6c757d" }}>{dt.profile}</h6>
            ) : (
              <h6 style={{ color: "#6c757d" }}>Profile: {dt.profile}</h6>
            )}
            {dt.package === "" ? (
              <h6 style={{ color: "#6c757d" }}>{dt.package}</h6>
            ) : (
              <h6 style={{ color: "#6c757d" }}>Package: {dt.package}</h6>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Placement;
