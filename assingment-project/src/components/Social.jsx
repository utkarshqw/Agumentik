import { Box, Button, HStack, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
// import { MdContactPhone } from "react-icons/md";
import {PhoneIcon} from "@chakra-ui/icons"

const Social = () => {
    const toast = useToast()
    const newContact = JSON.parse(localStorage.getItem("contacts")) || []
    const facebook = "https://www.facebook.com/"
    const linkedin = "https://www.linkedin.com/"
    const instagram = "https://www.instagram.com/"
    const [init, setInit] = useState({name:"", email:"", number:""})
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleChange = (e) => {
        const {name, value} = e.target
        setInit({
            ...init, 
            [name]:value 
        })
        
    }

   const handleSubmit = () => {
    let existing = newContact.filter((elem)=> elem.number == init.number)
    if(existing.length !== 0)
    {
      return  toast({
       
        description: "contact number already exists",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }

     newContact.push(init) 
     localStorage.setItem("contacts",JSON.stringify(newContact)) 
     setInit({name:"", email:"", number:""})
     onClose()
     toast({
        title: 'Contact added.',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
     
   }

  return (
    <>    <VStack gap={"10px"}   maxW={"40px"} minW="40px" position={"absolute"} right="1px" top="80px">
      <Link target={"_blank"} href={facebook}>
        <BsFacebook size="20px" color="#254c53" />
      </Link>
      <Link target={"_blank"} href={linkedin}>
        <BsLinkedin size="20px" color="#254c53" />
      </Link>
      <Link target={"_blank"} href={instagram} >
        <AiFillInstagram size="20px" color="#254c53" />
      </Link>
      <Tooltip label="Add Contact" fontSize="md">
        <PhoneIcon onClick={onOpen} color="#254c53" />
      </Tooltip>
    </VStack>

    <Modal isOpen={isOpen}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Contacts</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <VStack>
           <Input onChange={handleChange} value={init.name} name="name" placeholder="name" />
           <Input onChange={handleChange} value={init.number} name="number" placeholder="contact number" />
           <Input onChange={handleChange} value={init.email} name="email" placeholder="email" />
           
           </VStack>
           <HStack mt="10px">
           <Button onClick={handleSubmit} colorScheme={"blue"}>Submit</Button>
           <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            </HStack>
          </ModalBody>

         
            
          
         
        </ModalContent>
      </Modal>
    </>

  );
};

export default Social;
