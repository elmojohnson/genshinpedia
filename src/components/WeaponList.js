import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import WeaponItem from "./WeaponItem";
import WeaponsLoader from "./WeaponsLoader";

export default function WeaponList({ isLimit }) {
  const [weapons, setWeapons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  var whs = weapons.slice(0, 6);

  useEffect(() => {
    const getWeapons = async () => {
      const res = await axios.get(`https://api.genshin.dev/weapons`);
      setWeapons(res.data);
      setLoading(false);
    };
    getWeapons();
  }, []);

  return (
    <div>
      {isLoading && <WeaponsLoader isLimit={isLimit} />}
      <Row>
        {!isLoading && isLimit
          ? whs.map((weapon) => {
              return <WeaponItem key={weapon} name={weapon} />;
            })
          : weapons.map((weapon) => {
              return <WeaponItem key={weapon} name={weapon} />;
            })}
      </Row>
    </div>
  );
}
