import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [init, setinit] = useState({
    email: "admin@email.com",
    password: "1234",
  });
  const logo = localStorage.getItem("logo") || "" ;
  const navtext1 = localStorage.getItem("navtext1") || "" ;
  const navtext2 = localStorage.getItem("navtext2") || "" ;
  const selecttext = localStorage.getItem("selecttext") || "" ;

  useEffect(()=>{
   
    localStorage.setItem("logo", "https://res.cloudinary.com/dknaigwrs/image/upload/v1675668698/nature-logo-removebg-preview_2_ikaa2w.png" )
    localStorage.setItem("navtext1", "What's an Aronia Berry?")
    localStorage.setItem("navtext2", "The Science")
    localStorage.setItem("selecttext","The Juice")

  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinit({ ...init, [name]: value });
  };

  const handleSubmit = () => {
    const adminArray = JSON.parse(localStorage.getItem("admin"));
    var adminuser = adminArray?.filter((elem) => elem.email == init.email);
    //  console.log(adminuser)

    if (adminuser.length == 0) {
      return toast({
        title: "Access denied.",
        description: "Add correct credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    if (adminuser[0].password == init.password) {
      toast({
        title: "Login Successful",

        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/admin");
    }
  };

  return (
    <>
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
        <Img h="80%" borderRadius={"2px"} src={logo} />
        <Flex gap={"30px"}>
          <Text _hover={{ color: "orange" }}>{navtext1}</Text>
          <Text _hover={{ color: "orange" }}>{navtext2}</Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Select
            fontSize={"14px"}
            fontWeight={500}
            w="auto"
            variant={"unstyled"}
          >
            <option value="option1">{selecttext}</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Button
            onClick={() => onOpen()}
            fontSize={"14px"}
            _hover={{ bg: "none", color: "orange" }}
            variant={"ghost"}
          >
            Admin
          </Button>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Admin login</ModalHeader>

          <ModalBody>
            <VStack>
              <Input
                placeholder="username"
                value={init.email}
                name="email"
                onChange={handleChange}
              />
              <Input
                placeholder="password"
                value={init.password}
                name="password"
                onChange={handleChange}
              />
            </VStack>

            <HStack>
              <Button onClick={handleSubmit} colorScheme={"blue"}>
                Login
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
