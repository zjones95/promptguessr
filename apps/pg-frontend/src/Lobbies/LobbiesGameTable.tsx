import { Game } from "../types/game.types";
import { Table, TableBody } from "@mui/material";
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
            key={game.slug}
            game={game}
            setSelectedGameId={setSelectedGameId}
            selected={selectedGameId === game.slug}
            offsetColor={Boolean(i % 2)}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default LobbiesGameTable;
