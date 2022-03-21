import * as Styles from "../../Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Animation from "../Animation/Animation";

const CharacterItem = ({ link }) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const location = useLocation();

  useEffect(() => {
    let id = location.pathname;
    fetch(link + id)
      .then((req) => req.json())
      .then((res) => {
        setItem(res);
      });
  }, []);

  function Clicker() {
    navigate("/characters");
  }
  return (
    <Animation>
      <Styles.CharacterItem>
        <button onClick={Clicker}>
          <span>{"<"}</span>- Back
        </button>

        <main>
          <div className="section">
            <div className="title">Character</div>
            <div className="name">{item.name}</div>
            <div className="text">{item.normalized_name}</div>
          </div>
        </main>
      </Styles.CharacterItem>
    </Animation>
  );
};

export default CharacterItem;
