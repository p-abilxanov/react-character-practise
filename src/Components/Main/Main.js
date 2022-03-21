import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Characters from "../Characters/Characters";
import Episodes from "../Episodes/Episodes";
import CharacterItem from "../Item/CharacterItem";
import EpisodeItem from "../Item/EpisodeItem";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  const link = "https://api.sampleapis.com/simpsons";
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Characters link={link} />} />
        <Route exact path="/episodes" element={<Episodes link={link} />} />
        <Route path="/characters/:id" element={<CharacterItem link={link} />} />
        <Route path="/episodes/:id" element={<EpisodeItem link={link} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Main;
