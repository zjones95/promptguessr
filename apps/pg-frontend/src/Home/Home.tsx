import { Button, Stack, Typography } from "@mui/material";
import HomeImageGallery from "./HomeImageGallery";

const Home = () => {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 0, lg: 8 }}
      alignItems={{ xs: "flex-start", md: "center" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      textAlign={{ xs: "center", lg: "left" }}
      flex={1}
      flexWrap="wrap-reverse"
    >
      <Stack
        maxWidth={{ xs: "100vw", sm: 540 }}
        spacing={4}
        alignItems={{ xs: "center", lg: "flex-start" }}
      >
        <Typography variant="h1">PromptGuessr</Typography>
        <Typography variant="body1" fontSize={28}>
          Use AI to generate images, then have your friends, loved ones, and
          pets try to guess what you wrote.
        </Typography>
        <Stack direction="row" spacing={3} pt={1}>
          <Button variant="contained">Sign Up</Button>
          <Button variant="outlined">Log In</Button>
        </Stack>
      </Stack>
      <HomeImageGallery />
    </Stack>
  );
};

export default Home;
