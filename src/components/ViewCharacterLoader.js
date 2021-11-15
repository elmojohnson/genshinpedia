import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function ViewCharacterLoader() {
  return (
    <div className="py-3">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Skeleton height={30}/>
            <Skeleton height={50}/>
          </Col>
          <Col xs={12} md={4}>
            <Skeleton height={600} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
