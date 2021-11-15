import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, Image } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useHistory } from "react-router-dom";

function ArtifactItem({ name }) {
  const history = useHistory();
  const [artifact, setArtifact] = useState("");

  useEffect(() => {
    const getArtifact = async () => {
      const data = await axios.get(`https://api.genshin.dev/artifacts/${name}`);
      const a = data.data;
      setArtifact(a.name);
    };
    getArtifact();
  });

  const viewArtifact = () => {
      history.push(`/artifact/${name}`)
  }

  return (
    <Col xs={6} lg={4} md={4}>
      <Row className="d-flex align-items-center border h-100" onClick={viewArtifact}>
        <Col xs={4} md={4} lg={4}>
          <LazyLoadImage
            src={`https://api.genshin.dev/artifacts/${name}/flower-of-life.png`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/100?text=Artifact";
            }}
            effect="blur"
            className="img-fluid p-1"
          />
        </Col>
        <Col xs={8} md={8} lg={8}>
          {artifact ? (
            <p className="lh-1">{artifact}</p>
          ) : (
            <p className="lh-1 text-capitalize">{name.replace(/-/g, " ")}</p>
          )}
        </Col>
      </Row>
    </Col>
  );
}

export default ArtifactItem;
