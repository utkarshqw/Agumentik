import { Box } from "@chakra-ui/react";
import React from "react";
import First from "../components/First";
import Navbar from "../components/Navbar";
import Second from "../components/Second";
import Social from "../components/Social";

const Home = () => {
  const backgroundImage =
    "https://png.pngtree.com/background/20210711/original/pngtree-fresh-hand-painted-blue-banner-on-fresh-fruits-and-vegetables-picture-image_1095971.jpg";
  return (
    <Box
      height={"85vh"}
      borderRadius="3px"
      m="auto"
      pos={"relative"}
      bgImage={`Url(${backgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
        <Navbar/>
        <First/>
        <Second/>
        <Social/>
    </Box>
  );
};

export default Home;