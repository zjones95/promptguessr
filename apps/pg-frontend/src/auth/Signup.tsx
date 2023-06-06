import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "../components/Link";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const { signUpWithEmail, signInWithEmail } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleEmailSignUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { error } = await signUpWithEmail(email, password);

    if (error) {
      return setError(error.message);
    }

    await signInWithEmail(email, password);

    navigate(ROUTES.LOBBIES);
  };

  return (
    <Card
      title="Sign Up"
      width={{ xs: "auto", md: 500 }}
      flex={0}
      margin={{ xs: "auto 0", md: "auto" }}
    >
      <form onSubmit={handleSubmit(handleEmailSignUp)}>
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
            <Typography variant="body2" color="primary.main" textAlign="center">
              Already have an account?{" "}
              <Link
                to={ROUTES.LOGIN}
                sx={{ "&:hover": { color: "primary.dark" } }}
              >
                Log in
              </Link>
            </Typography>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{ height: "40px", fontSize: "18px" }}
          >
            Sign Up
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default Signup;
