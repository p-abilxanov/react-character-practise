import React, { useEffect, useState } from "react";
import * as Styles from "../../Styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Animation from "../Animation/Animation";

const Episodes = ({ link }) => {
  let location = useLocation();
  const navigate = useNavigate();
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(link + "/episodes/?_limit=10")
      .then((req) => req.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  function Back() {
    navigate("/");
  }

  return (
    <Animation>
      <Styles.Episodes>
        <button onClick={Back}>
          <span>{"<"}</span>- Back
        </button>

        <div>Episodes</div>

        <main>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <Link
                  to={location.pathname + "/" + item.id}
                >
                  <span>{item.name}</span>
                  <span className="icon-arrow">{">"}</span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </Styles.Episodes>
    </Animation>
  );
};

export default Episodes;
