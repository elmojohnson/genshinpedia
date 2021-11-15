import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function CharacterItem({ name }) {
  const history = useHistory();

  const [character, setCharacter] = useState({
    name: "",
    vision: "",
    rarity: "bg-white",
  });

  useEffect(() => {
    const getChar = async () => {
      const res = await axios.get(`https://api.genshin.dev/characters/${name}`);
      setCharacter({
        name: res.data.name,
        vision: res.data.vision,
        rarity: res.data.rarity === 4 ? "four_star" : "five_star",
      });
    };

    getChar();
  }, []);

  function viewCharacter() {
    history.push(`/character/${name}`);
  }

  return (
    <Col xs={6} lg={2} md={4} className="mb-4">
      <div
        className="text-center h-100 border-0"
        title={"Click to view " + name.toUpperCase()}
        onClick={viewCharacter}
      >
        {/* <Image
          src={`https://api.genshin.dev/elements/${character.vision.toLocaleLowerCase()}/icon.png`}
          className="w-25 bg-dark"
          roundedCircle
        /> */}
        <LazyLoadImage
          src={`https://api.genshin.dev/characters/${name}/icon.png`}
          alt={name}
          className={character.vision + " img-fluid rounded-circle transition"}
          effect="blur"
        />
        
        <p className="text-capitalize">{name}</p>
      </div>
    </Col>
  );
}
