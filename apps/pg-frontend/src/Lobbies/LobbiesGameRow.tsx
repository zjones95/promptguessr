import { TableCell, TableRow, Typography } from "@mui/material";
import { Game } from "../types/game.types";

const LobbiesGameRow = ({
  game,
  setSelectedGameId,
  selected,
  offsetColor,
}: {
  game: Game;
  setSelectedGameId: (gameId: string) => void;
  selected: boolean;
  offsetColor: boolean;
}) => {
  const handleSelectGame = () => {
    setSelectedGameId(game.slug);
  };

  return (
    <TableRow
      sx={{
        cursor: "pointer",
        backgroundColor: selected
          ? "secondary.light"
          : offsetColor
          ? "#fafafa"
          : "white",
        "&:hover": {
          backgroundColor: "secondary.light",
        },
        transition: "background-color 0.1s ease-in-out",
      }}
      onClick={handleSelectGame}
    >
      <TableCell>
        <Typography variant="body1">{game.host_name}'s Lobby</Typography>
      </TableCell>
      <TableCell align="right"></TableCell>
    </TableRow>
  );
};

export default LobbiesGameRow;
