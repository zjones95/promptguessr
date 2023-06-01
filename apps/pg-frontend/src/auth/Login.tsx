import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import { useAuth } from "../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "../components/Link";

const Login = () => {
  const { signInWithEmail } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleEmailSignIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { error } = await signInWithEmail(email, password);

    if (error) {
      return setError(error.message);
    }

    navigate(ROUTES.LOBBIES);
  };

  return (
    <Card
      title="Login"
      width={{ xs: "auto", md: 500 }}
      flex={0}
      margin={{ xs: "auto 0", md: "auto" }}
    >
      <form onSubmit={handleSubmit(handleEmailSignIn)}>
        <Stack p={4} spacing={3}>
          {error && (
            <Alert severity="error">
              <Typography>{error}</Typography>
            </Alert>
          )}
          <Stack spacing={2}>
            <TextField
              variant="outlined"
              type="email"
              label="Email"
              {...register("email")}
            />
            <TextField
              variant="outlined"
              type="password"
              label="Password"
              {...register("password")}
            />
            <Stack alignItems="center" spacing={1}>
              <Typography variant="body2" color="primary.main">
                Don't have an account?{" "}
                <Link
                  sx={{ "&:hover": { color: "primary.dark" } }}
                  to={ROUTES.SIGNUP}
                >
                  Sign up
                </Link>
              </Typography>
              <Link
                to={ROUTES.FORGOT_PASSWORD}
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  color="primary.main"
                  variant="body2"
                  sx={{ "&:hover": { color: "primary.dark" } }}
                >
                  Forgot Password
                </Typography>
              </Link>
            </Stack>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{ height: "40px", fontSize: "18px" }}
          >
            Log In
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default Login;
