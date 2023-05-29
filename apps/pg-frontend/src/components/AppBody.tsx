import { Stack, StackProps } from "@mui/material";

const AppBody = ({ children, ...props }: StackProps) => {
  return (
    <Stack
      maxWidth={1200}
      margin="auto"
      minHeight="calc(100vh - 32px)"
      py={4}
      px={2}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default AppBody;
