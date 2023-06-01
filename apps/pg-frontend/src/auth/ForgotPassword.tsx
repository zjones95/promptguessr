import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import Card from "../components/Card";
import ROUTES from "../routes";
import { useAuth } from "../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "../components/Link";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();

  const [error, setError] = useState(null);
  const [successEmail, setSuccessEmail] = useState<string | null>(null);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleResetPassword = async ({ email }: { email: string }) => {
    const { error } = await resetPassword(email);

    if (error) {
      return setError(error.message);
    }

    setError(null);
    setSuccessEmail(email);
  };

  return (
    <Card
      title="Reset Password"
      width={{ xs: "auto", md: 500 }}
      flex={0}
      margin={{ xs: "auto 0", md: "auto" }}
    >
      <form onSubmit={handleSubmit(handleResetPassword)}>
        <Stack p={4} spacing={3}>
          {successEmail && (
            <Alert severity="success">
              <Typography>
                If the email is valid, we've sent a reset password email to{" "}
                {successEmail}
              </Typography>
            </Alert>
          )}
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

            <Typography variant="body2" color="primary.main" textAlign="center">
              <Link to={ROUTES.LOGIN}>Back to Log In</Link>
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

export default ForgotPassword;
