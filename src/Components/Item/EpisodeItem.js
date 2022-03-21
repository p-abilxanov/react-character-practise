import * as Styles from "../../Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Animation from "../Animation/Animation";

const EpisodeItem = ({ link, match }) => {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let id = location.pathname;
    console.log(match);
    fetch(link + id)
      .then((req) => req.json())
      .then((res) => {
        setItem(res);
      });
  }, []);

  function Clicker() {
    navigate("/episodes");
  }

  return (
    <Animation>
      <Styles.EpisodeItem>
        <button onClick={Clicker}>
          <span>{"<"}</span>- Back
        </button>

        <main>
          <div className="section">
            <div className="title">Character</div>
            <div className="name">{item.name}</div>
            <div className="text">{item.description}</div>
          </div>
        </main>
      </Styles.EpisodeItem>
    </Animation>
  );
};

export default EpisodeItem;
