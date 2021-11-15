import React from "react";
import { Container } from "react-bootstrap";
import ArtifactList from "../components/ArtifactList";
import NavBar from "../components/NavBar";

function Artiacts() {
  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="mb-4 mt-5">Artifacts</h1>
        <ArtifactList />
        <br />
      </Container>
    </div>
  );
}

export default Artiacts;
