import { Stack, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import ROUTES from "../routes";

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
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Typography variant="h1">PG</Typography>
      </Link>
      <Button variant="outlined" sx={{ my: "auto" }} onClick={handleNavAction}>
        {user ? "Sign out" : "Log in"}
      </Button>
    </Stack>
  );
};

export default Nav;
