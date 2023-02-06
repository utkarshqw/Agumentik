import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {RxDotFilled} from "react-icons/rx" 

const Second = () => {
    const firstline = "Ingredients"
    const option1 = "Organic Apple Juice"
    const option2 = "Organic Aronia Juice"
    const option3 = "Organic Orange Juice"
    const option4 = "Organic Pomegranate Juice"
    const option5 = "Organic Mango Juice"
  return (
    <Box  w="260px" bg={"whiteAlpha.400"} padding="10px" borderRadius={"3px"} pos={"absolute"} right="80px" top={"30%"} >
        <Text mb="10px" color={"#254c53"} fontSize={"25px"} fontWeight={500} >{firstline}</Text>
        {option1.length !== 0 && <Flex alignItems={"center"}> <RxDotFilled color='brown' size={"20px"}/> <Text fontSize={"17px"} color={"#254c53"} mb="5px"   fontWeight={500}> {option1}</Text> </Flex>}
        {option2.length !== 0 && <Flex alignItems={"center"}> <RxDotFilled color='brown' size={"20px"}/> <Text fontSize={"17px"} color={"#254c53"} mb="5px"   fontWeight={500}> {option2}</Text> </Flex>}
        {option3.length !== 0 && <Flex alignItems={"center"}> <RxDotFilled color='brown' size={"20px"}/> <Text fontSize={"17px"} color={"#254c53"} mb="5px"   fontWeight={500}> {option3}</Text> </Flex>}
        {option4.length !== 0 && <Flex alignItems={"center"}> <RxDotFilled color='brown' size={"20px"}/> <Text fontSize={"17px"} color={"#254c53"} mb="5px"   fontWeight={500}> {option4}</Text> </Flex>}
        {option5.length !== 0 && <Flex alignItems={"center"}> <RxDotFilled color='brown' size={"20px"}/> <Text fontSize={"17px"} color={"#254c53"} mb="5px"   fontWeight={500}> {option5}</Text> </Flex>}
     
    </Box>
  )
}

export default Second