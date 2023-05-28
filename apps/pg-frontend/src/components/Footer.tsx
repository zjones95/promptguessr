import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      bgcolor="#3E3E3E"
      height={32}
    >
      <Typography variant="body1" fontSize={18}>
        2023 © promptguessr.io
      </Typography>
    </Stack>
  );
};

export default Footer;
