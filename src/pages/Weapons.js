import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import WeaponList from "../components/WeaponList";

export default function Weapons() {
  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="mb-4 mt-5">Weapons</h1>
        <WeaponList />
        <br />
      </Container>
    </div>
  );
}
