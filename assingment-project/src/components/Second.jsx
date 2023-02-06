import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {RxDotFilled} from "react-icons/rx" 

const Second = () => {
    const firstline = localStorage.getItem("firstline") || ""
    const option1 = localStorage.getItem("option1") || ""
    const option2 = localStorage.getItem("option2") || ""
    const option3 = localStorage.getItem("option3") || ""
    const option4 = localStorage.getItem("option4") || ""
    const option5 = localStorage.getItem("option5") || ""

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
     check("firstline") && localStorage.setItem("firstline", "Ingredients" )
     check("option1") && localStorage.setItem("option1", "Organic Apple Juice" )
     check("option2") && localStorage.setItem("option2", "Organic Aronia Juice" )
     check("option3") && localStorage.setItem("option3", "Organic Orange Juice" )
     check("option4") && localStorage.setItem("option4", "Organic Pomegranate Juice" )
     check("option5") && localStorage.setItem("option5", "Organic Mango Juice" )
    },[])

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