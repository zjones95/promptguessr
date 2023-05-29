import { Box, BoxProps } from "@mui/material";

const HomeImage = ({ src, ...props }: BoxProps<"img">) => {
  return (
    <Box
      component="img"
      src={src}
      width={{ xs: 150, sm: 200, md: 290 }}
      height={{ xs: 150, sm: 200, md: 290 }}
      border="4px solid"
      borderColor="primary.main"
      position="absolute"
      {...props}
    />
  );
};

export default HomeImage;
