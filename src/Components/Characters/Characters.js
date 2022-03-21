import React, { useEffect, useState } from "react";
import * as Styles from "../../Styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Animation from "../Animation/Animation";

const Characters = ({ link }) => {
  let location = useLocation();
  const navigate = useNavigate();
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(link + "/products")
      .then((req) => req.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  function Clicker() {
    localStorage.setItem("click-btn-project", "out");
    navigate("/");
  }

  return (
    <Animation>
      <Styles.Characters>
        <button onClick={Clicker}>
          <span>{"<"}</span>- Back
        </button>
        <div>Characters</div>
        <main>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <Link
                  to={location.pathname + "/" + item.id}
                  onClick={() =>
                    localStorage.setItem("click-btn-project", "in")
                  }
                >
                  <span>{item.name}</span>
                  <span className="icon-arrow">{">"}</span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </Styles.Characters>
    </Animation>
  );
};

export default Characters;
