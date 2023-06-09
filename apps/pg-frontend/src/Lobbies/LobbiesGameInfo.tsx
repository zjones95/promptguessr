import { Button, Stack, Typography } from "@mui/material";
import { Game } from "../types/game.types";
import Link from "../components/Link";
import ROUTES from "../routes";

const LobbiesGameInfo = ({ game }: { game: Game }) => {
  return (
    <Stack px={2} py={3} height="100%">
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="body1" color="primary.dark" fontWeight={600}>
            Name
          </Typography>
          <Typography variant="body2">{game.host_name}'s Lobby</Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body1" color="primary.dark" fontWeight={600}>
            Owner
          </Typography>
          <Typography variant="body2">{game.host_name}</Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body1" color="primary.dark" fontWeight={600}>
            Players
          </Typography>
          {game.players.map((player) => {
            return (
              <Typography variant="body2" key={player.id} color="primary.main">
                {player.name}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
      <Link to={ROUTES.lobbyBySlug(game.slug)} mt="auto">
        <Button
          variant="contained"
          sx={{ height: "40px", width: "100%", fontSize: "18px" }}
        >
          Join Game
        </Button>
      </Link>
    </Stack>
  );
};

export default LobbiesGameInfo;
