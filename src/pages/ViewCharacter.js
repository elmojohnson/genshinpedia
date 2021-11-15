import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Table, Tabs, Tab } from "react-bootstrap";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import dateFormat from "dateformat";
import SkillTalents from "../components/SkillTalents";
import PassiveTalents from "../components/PassiveTalents";
import Constellations from "../components/Constellations";
import ViewCharacterLoader from "../components/ViewCharacterLoader";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ViewCharacter() {
  const { name } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    vision: "",
    weapon: "",
    nation: "",
    affiliation: "",
    rarity: 0,
    constellation: "",
    birthday: "",
    description: "",
    skillTalents: [],
    passiveTalents: [],
    constellations: [],
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getChar = async () => {
      const res = await axios.get(`https://api.genshin.dev/characters/${name}`);
      setCharacter({
        name: res.data.name,
        vision: res.data.vision,
        weapon: res.data.weapon,
        nation: res.data.nation,
        affiliation: res.data.affiliation,
        rarity: res.data.rarity,
        constellation: res.data.constellation,
        birthday: res.data.birthday,
        description: res.data.description,
        skillTalents: res.data.skillTalents,
        passiveTalents: res.data.passiveTalents,
        constellations: res.data.constellations,
      });
      setLoading(false);
    };
    getChar();
  }, []);

  return (
    <div>
      <NavBar />
      {isLoading && <ViewCharacterLoader />}

      {!isLoading && (
        <div>
          <div
            // className={
            //   !character.nation
            //     ? "view_bg " + character.vision +
            //       " blend_bg text-shadow pt-4 pb-4 character_info d-flex align-items-center"
            //     : character.nation + " " + character.vision +
            //       " blend_bg text-shadow pt-4 pb-4 character_info d-flex align-items-center"
            // }

            className={
              character.vision +
              " blend_bg text-shadow pt-4 pb-4 character_info d-flex align-items-center"
            }
          >
            <Container>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  className="d-flex align-items-center"
                >
                  <div className="w-100">
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <Image
                          src={`https://api.genshin.dev/elements/${character.vision.toLocaleLowerCase()}/icon.png`}
                          fluid
                        />
                        <h1 className="ms-2 display-4 text-uppercase">
                          {character.name}
                        </h1>
                      </div>
                      {character.description && (
                        <div>
                          <p className="mb-4 lead">{character.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="text-center d-flex align-items-center"
                >
                  <center>
                    <LazyLoadImage
                      src={`https://api.genshin.dev/characters/${name}/portrait.png`}
                      className="img-fluid"
                      style={{ height: "100%" }}
                      effect="blur"
                    />
                  </center>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="py-4 mb-5">
            <Table className="w-100 mb-4" bordered striped>
              <tbody>
                <tr>
                  <th>Vision</th>
                  <td>{character.vision}</td>
                </tr>
                <tr>
                  <th>Weapon</th>
                  <td>{character.weapon}</td>
                </tr>
                <tr>
                  <th>Nation</th>
                  <td>{character.nation ? character.nation : "-"}</td>
                </tr>
                <tr>
                  <th>Afiliation</th>
                  <td>{character.affiliation ? character.affiliation : "-"}</td>
                </tr>
                <tr>
                  <th>Rarity</th>
                  <td>
                    <div>
                      {Array.from({ length: character.rarity }).map(
                        (_, idx) => (
                          <span key={idx} className="fa fa-star checked"></span>
                        )
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Constellation</th>
                  <td>{character.constellation}</td>
                </tr>
                <tr>
                  <th>Birthday</th>
                  <td>{dateFormat(character.birthday, "mmmm dS")}</td>
                </tr>
              </tbody>
            </Table>
            <Tabs
              defaultActiveKey="constellations"
              id="uncontrolled-tab-example"
              className="mb-3"
              className="nav-fill"
            >
              <Tab eventKey="constellations" title="Constellations">
                <Constellations
                  constellations={character.constellations}
                  cons={character.constellation}
                />
              </Tab>
              <Tab eventKey="skills" title="Skill Talents">
                <SkillTalents skillTalents={character.skillTalents} />
              </Tab>
              <Tab eventKey="passive" title="Passive Talents">
                <PassiveTalents passiveTalents={character.passiveTalents} />
              </Tab>
            </Tabs>
          </Container>
        </div>
      )}
    </div>
  );
}
