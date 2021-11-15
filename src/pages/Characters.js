import React from "react";
import { Container } from "react-bootstrap";
import CharacterList from "../components/CharacterList";
import NavBar from "../components/NavBar";

export default function Characters() {
  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="mb-4 mt-5">Characters</h1>
        <CharacterList isLimit={false} />
      </Container>
    </div>
  );
}
