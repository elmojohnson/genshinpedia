import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ViewWeaponLoader from "../components/ViewWeaponLoader";

function ViewArtiact() {
  const { name } = useParams();
  const [artifact, setArtifact] = useState({
    name: "",
    max_rarity: "",
    ["2-piece_bonus"]: "",
    ["4-piece_bonus"]: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArtifact = async () => {
      const data = await axios.get(`https://api.genshin.dev/artifacts/${name}`);
      const a = data.data;
      setArtifact({
        name: a.name,
        max_rarity: a.max_rarity,
        ["2-piece_bonus"]: a["2-piece_bonus"],
        ["4-piece_bonus"]: a["4-piece_bonus"],
      });
      setLoading(false)
    };
    getArtifact();
  }, []);

  return (
    <div>
      <NavBar />
      {loading ? (
        <ViewWeaponLoader />
      ) : (
        <div className="container mt-4 py-3">
          <Row>
            <Col className="text-center" xs={12} md={6} lg={6}>
              <h1 className="display-6 mb-3">{artifact.name}</h1>
              <LazyLoadImage
                src={`https://api.genshin.dev/artifacts/${name}/flower-of-life.png`}
                effect="blur"
                fluid
              />
              <div className="mt-4">
                {Array.from({ length: artifact.max_rarity }).map((_, idx) => (
                  <span
                    key={idx}
                    className="fa fa-star checked text-warning fs-4"
                  ></span>
                ))}
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <p className="lh-1 mb-4">
                2 - Piece Bonus
                <br />
                <b className="fs-5">{artifact["2-piece_bonus"]}</b>
              </p>
              <p className="lh-1 mb-4">
                <span className="small">4 - Piece Bonus</span>
                <br/>
                {artifact["4-piece_bonus"]}
              </p>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default ViewArtiact;
