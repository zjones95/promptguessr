import { Box, BoxProps } from "@mui/material";

const HomeImage = ({ src, ...props }: BoxProps<"img">) => {
  return (
    <Box
      component="img"
      src={src}
      width={300}
      height={300}
      border="4px solid"
      borderColor="primary.main"
      position="absolute"
      {...props}
    />
  );
};

export default HomeImage;
