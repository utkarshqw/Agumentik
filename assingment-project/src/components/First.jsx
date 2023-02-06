import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const First = () => {
    let  firstline = "natural antioxidants"
    let  secondline_first = "apple"
    let secondline_remaining = "and aronia juice"
    let info = "The delicious blend contains a nutrient punch of soluable fibre and the natural antioxidants that Aronia Berry provides."
  return (
   <VStack  align="left" bg="whiteAlpha.400" p="5px" borderRadius={"2px"} gap={"45px"}  w="350px" position={"relative"} top={"10px"} left="40px">
    <Text fontSize={"14px"} fontWeight={500} textTransform={"uppercase"} >{firstline}</Text>
    <Text transform={"scale(1, 1.6)"} lineHeight={"50px"} color="#254c53" fontSize={"49px"} textTransform={"uppercase"} fontWeight={600} ><span style={{color: "brown"}}>{secondline_first}</span> {secondline_remaining}</Text>
    <Text fontSize={"19px"} color="#254c53"  fontWeight={500} >{info}</Text>
  
   </VStack>
  )
}

export default First