import React from "react";

import Skeleton from "react-loading-skeleton";
import { Col, Row } from "react-bootstrap";
function WeaponsLoader({isLimit}) {
  return (
    <div>
      <Row>
        {Array.from({ length: isLimit ? 6 : 18 }).map((_, idx) => (
          <Col xs={6} lg={4} md={4} className="mb-2" key={idx}>
            <Skeleton height={50}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default WeaponsLoader;
