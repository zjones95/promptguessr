import { Game } from "../types/game.types";
import { Button, Stack, Table, TableBody } from "@mui/material";
import LobbiesGameRow from "./LobbiesGameRow";

const LobbiesGameTable = ({
  games,
  selectedGameId,
  setSelectedGameId,
}: {
  games: Game[];
  selectedGameId: string | null;
  setSelectedGameId: (gameId: string) => void;
}) => {
  return (
    <Table>
      <TableBody>
        {games.map((game, i) => (
          <LobbiesGameRow
            key={game.id}
            game={game}
            setSelectedGameId={setSelectedGameId}
            selected={selectedGameId === game.id}
            offsetColor={Boolean(i % 2)}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default LobbiesGameTable;
