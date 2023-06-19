import { Box, Stack, Typography } from "@mui/material";

interface PlayerProps {
  name: string;
  color: string;
  offsetColor: boolean;
  stage: "waiting" | "prompting" | "guessing" | "finished";
  points: number;
}

const STAGE_COLORS: { [key in PlayerProps["stage"]]: string } = {
  waiting: "#FFC107",
  prompting: "#4CAF50",
  guessing: "#2196F3",
  finished: "#F44336",
};

const Player = ({ name, color, stage, points }: PlayerProps) => {
  return (
    <Stack direction="row" width="100%" height={64}>
      <Box height={32} width={32} borderRadius="50%" bgcolor={color} />
      <Stack spacing={0.5}>
        <Typography color={color}>{name}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography color={STAGE_COLORS[stage]}>{stage}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Player;
