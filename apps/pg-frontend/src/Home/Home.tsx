import { Button, Stack, Typography } from "@mui/material";
import HomeImageGallery from "./HomeImageGallery";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ROUTES from "../routes";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const navigate = useNavigate();
  const { user, userIsLoading } = useAuth();

  useEffect(() => {
    if (user && !userIsLoading) {
      navigate(ROUTES.LOBBIES);
    }
  }, [userIsLoading]);

  return (
    <Stack
      direction="row"
      spacing={{ xs: 0, lg: 8 }}
      alignItems={{ xs: "flex-start", md: "center" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      textAlign={{ xs: "center", lg: "left" }}
      flex={1}
      flexWrap="wrap-reverse"
      color="white"
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
          <Link to="/signup">
            <Button variant="contained">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button variant="outlined">Log In</Button>
          </Link>
        </Stack>
      </Stack>
      <HomeImageGallery />
    </Stack>
  );
};

export default Home;
