import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeLinks() {
  const myBg = "dark";
  return (
    <div className="mb-4 home_links mt-4 w-100">
      <Container className="text-center">
        <Row>
          <Col xs={12} lg={4} md={12} className="mb-4">
            <Link to="/characters" className="h3 link-shadow">
              Characters
            </Link>
          </Col>
          <Col xs={12} lg={4} md={12} className="mb-4">
            <Link to="/artifacts" className="h3 link-shadow">
              Artifacts
            </Link>
          </Col>
          <Col xs={12} lg={4} md={12} className="mb-4">
            <Link to="/weapons" className="h3 link-shadow">
              Weapons
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
