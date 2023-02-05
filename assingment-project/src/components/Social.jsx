import { Box, Button, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
// import { MdContactPhone } from "react-icons/md";
import {PhoneIcon} from "@chakra-ui/icons"

const Social = () => {
    const facebook = "https://www.facebook.com/"
    const linkedin = "https://www.linkedin.com/"
    const instagram = "https://www.instagram.com/"

    const { isOpen, onOpen, onClose } = useDisclosure()
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

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           afsdf1
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  );
};

export default Social;
