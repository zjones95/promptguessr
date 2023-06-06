import { Button, Stack } from "@mui/material";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { SAMPLE_DATA } from "./sampleData";
import LobbiesGameTable from "./LobbiesGameTable";
import { Game } from "../types/game.types";
import { useSearchParams } from "react-router-dom";
import LobbiesGameInfo from "./LobbiesGameInfo";

const Lobbies = () => {
  const [games, setGames] = useState<Game[]>(SAMPLE_DATA);
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    if (selectedGameId) {
      setQueryParams({ ["gameId"]: selectedGameId || "" });
      setSelectedGame(games.find((game) => game.id === selectedGameId) || null);
    }
  }, [selectedGameId]);

  return (
    <Stack direction="row" flex={1} spacing={4} mt={4}>
      <Card title="Lobbies" flex="unset" width="100%" mt={0}>
        <LobbiesGameTable
          games={games}
          setSelectedGameId={setSelectedGameId}
          selectedGameId={selectedGameId}
        />
      </Card>
      <Stack spacing={2}>
        <Card title="Game Info" flex="unset" width={350} mt={0} height="100%">
          {selectedGame && <LobbiesGameInfo game={selectedGame} />}
        </Card>
        <Button sx={{ minWidth: "10px", height: "60px" }} variant="outlined">
          Create Game
        </Button>
      </Stack>
    </Stack>
  );
};

export default Lobbies;
