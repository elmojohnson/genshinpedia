import React from "react";
import { ListGroup } from "react-bootstrap";

export default function PassiveTalents({ passiveTalents }) {
  return (
    <div>
      <ListGroup variant="flush" className="border border-top-0">
        {passiveTalents.map((talent, index) => {
          return (
            <ListGroup.Item key={index}>
                <h5>{talent.name}</h5>
                <p>{talent.description}</p>
                <small className="text-muted">{talent.unlock}</small>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  );
}
