import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import default_img from "../img/unnamed.png";
import { Img } from "react-image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useHistory } from "react-router-dom";

export default function WeaponItem({ name }) {
  const history = useHistory();

  const [weapon, setWeapon] = useState({
    name: "",
    rarity: 0,
  });

  const img = `https://api.genshin.dev/weapons/${name}/icon.png`
    ? `https://api.genshin.dev/weapons/${name}/icon.png`
    : default_img;

  useEffect(() => {
    const getWeapon = async () => {
      const res = await axios.get(`https://api.genshin.dev/weapons/${name}`);
      setWeapon({
        name: res.data.name,
        rarity: res.data.rarity,
      });
    };
    getWeapon();
  }, []);

  const viewWeapon = () => {
    history.push(`/weapon/${name}`);
  };

  return (
    <Col xs={6} lg={4} md={4}>
      <Row
        className="d-flex align-items-center border h-100"
        onClick={viewWeapon}
      >
        <Col xs={4} md={4} lg={4}>
          <LazyLoadImage
            src={img}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/100?text=Weapon";
            }}
            effect="blur"
            className="img-fluid"
          />
        </Col>
        <Col xs={8} md={8} lg={8}>
          <p className="lh-1">{weapon.name}</p>
        </Col>
      </Row>
    </Col>
  );
}
