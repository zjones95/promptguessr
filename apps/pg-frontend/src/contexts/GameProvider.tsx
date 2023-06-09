import React, { createContext, useEffect, useState } from "react";
import { Game } from "../types/game.types";
import { noop } from "lodash";
import useSupabase from "../hooks/useSupabase";
import { getGame, getGames } from "../api/games";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

interface GameContext {
  game: Game | null;
  gameError: boolean;
  gameLoading: boolean;
  games: Game[];
  gamesError: boolean;
  gamesLoading: boolean;
  setGameSlug: (slug: string | null) => void;
}

const DEFAULT_GAME_CONTEXT: GameContext = {
  game: null,
  gameError: false,
  gameLoading: false,
  games: [],
  gamesError: false,
  gamesLoading: false,
  setGameSlug: noop,
};

export const GameContext = createContext(DEFAULT_GAME_CONTEXT);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameSlug, setGameSlug] = useState<string | null>(null);

  const { user } = useAuth();

  const supabase = useSupabase();

  const {
    data: gamesData,
    isError: gamesError,
    isLoading: gamesLoading,
  } = useQuery(["games", user], async () => getGames(supabase), {
    enabled: Boolean(user),
    initialData: [],
  });

  const {
    data: gameData,
    isError: gameError,
    isLoading: gameLoading,
  } = useQuery(
    ["games", user],
    async () => gameSlug && getGame(supabase, gameSlug),
    { enabled: Boolean(gameSlug), refetchInterval: 1000 }
  );

  console.log({ gamesData, gameData: gameData[0] });

  return (
    <GameContext.Provider
      value={{
        game: gameData ?? null,
        gameError,
        gameLoading,
        games: gamesData,
        gamesError,
        gamesLoading,
        setGameSlug,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
