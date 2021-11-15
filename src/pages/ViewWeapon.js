import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ViewWeaponLoader from '../components/ViewWeaponLoader'

function ViewWeapon() {
  const { name } = useParams();
  const [weapon, setWeapon] = useState({
    baseAttackt: 0,
    location: "",
    name: "",
    passiveDesc: "",
    passiveName: "",
    rarity: "",
    subStat: "",
    type: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeapon = async () => {
      const data = await axios.get(`https://api.genshin.dev/weapons/${name}`);
      const w = data.data;
      setWeapon({
        baseAttack: w.baseAttack,
        location: w.location,
        name: w.name,
        passiveDesc: w.passiveDesc,
        passiveName: w.passiveName,
        rarity: w.rarity,
        subStat: w.subStat,
        type: w.type,
      });
      setLoading(false)
    };
    getWeapon();
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
              <h1 className="display-6 mb-3">{weapon.name}</h1>
              <LazyLoadImage
                src={`https://api.genshin.dev/weapons/${name}/icon.png`}
                effect="blur"
              />
              <div className="mt-4">
                {Array.from({ length: weapon.rarity }).map((_, idx) => (
                  <span
                    key={idx}
                    className="fa fa-star checked text-warning fs-4"
                  ></span>
                ))}
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <p className="lh-1 mb-4">
                Base Attack
                <br />
                <b className="fs-3">{weapon.baseAttack}</b>
              </p>
              <p className="lh-1 mb-4">
                Sub Stat
                <br />
                <b className="fs-3">{weapon.subStat}</b>
              </p>
              <p className="lh-1 mb-4">
                Passive
                <br />
                <b className="fs-3">{weapon.passiveName}</b>
                <br />
                {weapon.passiveDesc}
              </p>
              <p className="lh-1 mb-4">
                Type
                <br />
                <span className="fs-4">{weapon.type}</span>
              </p>
              <p className="lh-1 mb-4">
                Location
                <br />
                <span className="fs-4">{weapon.location}</span>
              </p>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default ViewWeapon;
