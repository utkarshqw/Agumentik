import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import First from "../components/First";
import Navbar from "../components/Navbar";
import Second from "../components/Second";
import Social from "../components/Social";

const Home = () => {
 
  function check(key)
  {
    var x = localStorage.getItem(key) 
    if(x == null) 
    {
     return true
    }
    else return false
  }

  useEffect(()=>{
  check("backgroundImage") && localStorage.setItem("backgroundImage","https://res.cloudinary.com/dknaigwrs/image/upload/v1675669380/pngtree-fresh-hand-painted-blue-banner-on-fresh-fruits-and-vegetables-picture-image_1095971_gj8hwb.png")
  },[])

  const backgroundImage = localStorage.getItem("backgroundImage") || ""
    

   useEffect(()=>{
   localStorage.setItem("admin",JSON.stringify([{email:"admin@email.com", password:"1234"}])) 
   },[])

  return (
    <Box
      maxHeight={"85vh"}
      minH={"85vh"}
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
