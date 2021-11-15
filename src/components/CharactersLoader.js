import React from "react";
import Skeleton from "react-loading-skeleton";
import {Col, Row} from 'react-bootstrap'

export default function CharactersLoader({isLimit}) {
  return (
    <div>
      <Row>
        {Array.from({ length: isLimit ? 6 : 18 }).map((_, idx) => (
          <Col xs={4} md={2} className="mb-4" key={idx}>
            <Skeleton height={100} width={100} circle />
          </Col>
        ))}
      </Row>
    </div>
  );
}
