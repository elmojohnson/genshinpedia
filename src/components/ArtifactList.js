import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtifactItem from "./ArtifactItem";
import WeaponsLoader from "./WeaponsLoader";
import { Row } from "react-bootstrap";

function ArtifactList({ isLimit }) {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  var ahs = artifacts.slice(0, 6);

  useEffect(() => {
    const getArtifacts = async () => {
      const data = await axios.get("https://api.genshin.dev/artifacts");
      const a = data.data;
      setArtifacts(a);
      setLoading(false);
    };
    getArtifacts();
  }, []);

  return (
    <div>
      {loading && <WeaponsLoader isLimit={isLimit} />}
      <Row>
        {!loading && isLimit
          ? ahs.map((a, i) => {
              return <ArtifactItem key={i} name={a} />;
            })
          : artifacts.map((a, i) => {
              return <ArtifactItem key={i} name={a} />;
            })}
      </Row>
    </div>
  );
}

export default ArtifactList;
