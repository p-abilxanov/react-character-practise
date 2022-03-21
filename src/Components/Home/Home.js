import * as Styles from "../../Styles";
import { Link } from "react-router-dom";
import Animation from "../Animation/Animation";
const Home = () => {
  return (
    <Animation>
      <Styles.Home>
        <Link
          to={"/characters"}
        >
          <span>Characters</span>
          <span className="icon-arrow">{">"}</span>
        </Link>
        <Link
          to={"/episodes"}
        >
          <span>Episodes</span>
          <span className="icon-arrow">{">"}</span>
        </Link>
      </Styles.Home>
    </Animation>
  );
};

export default Home;
