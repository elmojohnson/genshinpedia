import React from "react";
import { Container, Image } from "react-bootstrap";
import NavBar from "../components/NavBar";
import paimon from "../img/unnamed.png";

function About() {
  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="mt-5">Genshin Impact Library App</h1>
        <p className="lead">
          This is an unofficial Genshin Impact Website and is only intended for
          personal and educational purposes.
        </p>
        <h3>Technologies and API used</h3>
        <ul>
          <li>React</li>
          <li>Axios</li>
          <li>Bootstrap</li>
          <li>
            API -{" "}
            <a href="https://genshin.dev/" className="link-primary">
              https://genshin.dev/
            </a>
          </li>
        </ul>
        <h5>Developer</h5>
        <p>John Elmo Johnson - Information Technology Graduate</p>
      </Container>
    </div>
  );
}

export default About;
