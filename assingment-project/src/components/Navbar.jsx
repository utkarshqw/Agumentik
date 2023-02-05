import { Box, Button, Flex, Img, Select, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {

    const logo = "http://logo-logos.com/2017/11/nature-logo.png"
    const navtext1 = "What's an Aronia Berry?"
    const navtext2 = "The Science"
    const selecttext = "The Juice"



  return (
    <Flex
      w={"95%"}
      m="auto"
      h="60px"
      justifyContent={"space-between"}
      alignItems="center"
      fontSize={"14px"}
      fontWeight={500}
      color="#244d54"
    >
      <Img
        h="80%"
        borderRadius={"2px"}
        src={logo}
      />
      <Flex gap={"30px"}>
        <Text _hover={{color:"orange"}}>{navtext1}</Text>
        <Text _hover={{color:"orange"}}>{navtext2}</Text>
      </Flex>
     <Flex
     alignItems={"center"}
     >
      <Select fontSize={"14px"} fontWeight={500} w="auto" variant={"unstyled"} >
        <option value="option1">{selecttext}</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Button fontSize={"14px"} _hover={{bg:"none", color:"orange"}} variant={"ghost"}>Admin</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
