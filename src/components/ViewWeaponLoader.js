import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function ViewWeaponLoader() {
  return (
    <div className="py-3 mt-4">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="text-center">
            <Skeleton height={50} className="mb-4" />
            <Skeleton height={100} width={100} className="mb-4" />
            <Skeleton height={50} className="mb-4" />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Skeleton height={50} className="mb-4" />
            <Skeleton height={50} className="mb-4" />
            <Skeleton height={100} className="mb-4" />
            <Skeleton height={50} className="mb-4" />
            <Skeleton height={50} className="mb-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
