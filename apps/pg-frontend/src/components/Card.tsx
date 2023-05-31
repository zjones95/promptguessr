import { Stack, StackProps, Typography } from "@mui/material";

interface CardProps extends StackProps {
  title: string;
}

const Card = ({ children, sx, title, ...props }: CardProps) => {
  return (
    <Stack
      bgcolor="white"
      borderRadius={0}
      sx={{
        filter: "drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25))",
        border: "6px solid",
        borderColor: "primary.main",
        position: "relative",
        ...sx,
      }}
      mt={4}
      flex={1}
      {...props}
    >
      <Typography bgcolor="primary.main" fontSize={24}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default Card;
