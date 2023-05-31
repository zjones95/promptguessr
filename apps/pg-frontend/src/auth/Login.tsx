import { Button, Stack, TextField, Typography } from "@mui/material";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import { useAuth } from "../contexts/AuthProvider";
import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInWithEmail } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  console.log(getValues());

  const handleSignIn = async (event: SyntheticEvent) => {
    event.preventDefault();
    await signInWithEmail("test@test.com", "test");
    navigate(ROUTES.LOBBIES);
  };

  return (
    <Card
      title="Login"
      width={{ xs: "auto", md: 500 }}
      flex={0}
      margin={{ xs: "auto 0", md: "auto" }}
    >
      <Stack p={4} spacing={3}>
        <Stack spacing={2}>
          <TextField
            variant="outlined"
            label="Username"
            {...register("username")}
          />
          <TextField
            variant="outlined"
            label="Password"
            {...register("password")}
          />
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            style={{
              textDecoration: "none",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography
              color="primary.main"
              sx={{ "&:hover": { color: "primary.dark" } }}
            >
              Forgot Password
            </Typography>
          </Link>
        </Stack>

        <Button
          type="submit"
          // onClick={handleSubmit}
          variant="contained"
          sx={{ height: "40px", fontSize: "18px" }}
          onClick={handleSignIn}
        >
          Log In
        </Button>
      </Stack>
    </Card>
  );
};

export default Login;
