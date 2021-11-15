import React from "react";
import { Container, Image } from "react-bootstrap";
import ArtifactList from "../components/ArtifactList";
import CharacterList from "../components/CharacterList";
import HomeLinks from "../components/HomeLinks";
import NavBar from "../components/NavBar";
import logo from "../img/genshin_impact_logo_outline.png";
import WeaponList from '../components/WeaponList'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container>
        <div>
          <h1 className="mb-2 mt-5">Characters</h1>
          <CharacterList isLimit={true} />
          <a href="/characters" className="btn btn-sm btn-primary float-end">View more</a>
        </div>
        <div>
          <h1 className="mb-2 mt-5">Artifacts</h1>
          <ArtifactList isLimit={true} />
          <a href="/artifacts" className="btn btn-sm btn-primary float-end mt-4">View more</a>
        </div>
        <div>
          <h1 className="mb-2 mt-5">Weapons</h1>
          <WeaponList isLimit={true} />
          <a href="/weapons" className="btn btn-sm btn-primary float-end mt-4 mb-4">View more</a>
        </div>
      </Container>
      {/* <div className="bg-secondary d-flex align-items-center welcome_cover" style={{height: '92.3vh'}}>
        <Container className="text-center">
            <Image src={logo} alt="Genshin Impact" fluid style={{width: "70%"}} />
            <HomeLinks />
        </Container>
      </div> */}
    </div>
  );
}
