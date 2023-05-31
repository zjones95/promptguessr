import { Stack, StackProps } from "@mui/material";

const AppBody = ({ children, ...props }: StackProps) => {
  return (
    <Stack
      maxWidth={1200}
      height="100%"
      margin="auto"
      minHeight="calc(100vh - 32px)"
      pb={8}
      pt={4}
      px={{ xs: 1, md: 2 }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default AppBody;
