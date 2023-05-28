import { Button, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Stack direction="row" spacing={8} alignItems="center" flex={1}>
      <Stack maxWidth={580} spacing={4}>
        <Typography variant="h1">PromptGuessr</Typography>
        <Typography variant="body1" fontSize={32}>
          Use AI to generate images, then have your friends, loved ones, and
          pets try to guess what you wrote.
        </Typography>
        <Stack direction="row" spacing={3} pt={1}>
          <Button variant="contained">Sign Up</Button>
          <Button variant="outlined">Log In</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
