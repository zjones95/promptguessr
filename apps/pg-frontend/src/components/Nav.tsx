import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from "./Link";
import ROUTES from "../routes";
import useAuth from "../hooks/useAuth";

const Nav = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleNavAction = () => {
    if (user) {
      signOut();
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      height={64}
      align-items="center"
    >
      <Link
        to={user ? ROUTES.LOBBIES : ROUTES.HOME}
        sx={{ textDecoration: "none", color: "white" }}
      >
        <Typography variant="h1">PG</Typography>
      </Link>
      <Button variant="outlined" sx={{ my: "auto" }} onClick={handleNavAction}>
        {user ? "Sign out" : "Log in"}
      </Button>
    </Stack>
  );
};

export default Nav;
