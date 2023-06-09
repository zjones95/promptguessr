import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";

const useGameProvider = () => {
  const gameProvider = useContext(GameContext);

  return gameProvider;
};

export default useGameProvider;
