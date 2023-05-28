import { Stack, Typography, Button } from "@mui/material";

const Nav = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      height={64}
      align-items="center"
    >
      <Typography variant="h1">PG</Typography>
      <Button variant="outlined" sx={{ my: "auto" }}>
        Log In
      </Button>
    </Stack>
  );
};

export default Nav;
