import { Stack } from "@mui/material";

import HomeImage from "./HomeImage";

import HomeImage1 from "@app/assets/HomeImage1.png";
import HomeImage2 from "@app/assets/HomeImage2.png";
import HomeImage3 from "@app/assets/HomeImage3.png";

const HomeImageGallery = () => {
  return (
    <Stack
      position="relative"
      maxWidth={500}
      width="100%"
      height={{ xs: 200, sm: 400 }}
      alignItems="center"
      justifyContent="center"
      sx={{
        pointerEvents: { xs: "none", lg: "auto" },
        "& > *:nth-child(1)": {
          transform: "translateX(-100px) rotate(-15deg)",
        },
        "& > *:nth-child(3)": {
          transform: "translateX(100px) rotate(15deg)",
        },
        "&:hover": {
          "& > *:nth-child(1)": {
            transform: "translateX(-175px) rotate(-20deg)",
          },
          "& > *:nth-child(2)": {
            transform: "translateY(-50px)",
          },
          "& > *:nth-child(3)": {
            transform: "translateX(175px) rotate(20deg)",
          },
        },
        "& > *": {
          transition: "transform 0.2s ease",
        },
      }}
    >
      <HomeImage src={HomeImage1} />
      <HomeImage src={HomeImage2} />
      <HomeImage src={HomeImage3} />
    </Stack>
  );
};

export default HomeImageGallery;
