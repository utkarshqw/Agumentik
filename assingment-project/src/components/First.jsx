import { Box, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const First = () => {
    let  firstline_first = localStorage.getItem("firstline_first") || ""
    let  secondline_first = localStorage.getItem("secondline_first") || ""
    let secondline_remaining = localStorage.getItem("secondline_remaining") || ""
    let info = localStorage.getItem("info") || ""

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
    check("firstline_first") && localStorage.setItem("firstline_first","natural antioxidants")
    check("secondline_first") && localStorage.setItem("secondline_first", "apple")
    check("secondline_remaining") && localStorage.setItem("secondline_remaining","and aronia juice")
    check("info") && localStorage.setItem("info", "The delicious blend contains a nutrient punch of soluable fibre and the natural antioxidants that Aronia Berry provides.")
    
  },[])

  return (
   <VStack  align="left" bg="whiteAlpha.400" p="5px" borderRadius={"2px"} gap={"45px"}  w="350px" position={"relative"} top={"10px"} left="40px">
    <Text fontSize={"14px"} fontWeight={500} textTransform={"uppercase"} >{firstline_first}</Text>
    <Text transform={"scale(1, 1.6)"} lineHeight={"50px"} color="#254c53" fontSize={"49px"} textTransform={"uppercase"} fontWeight={600} ><span style={{color: "brown"}}>{secondline_first}</span> {secondline_remaining}</Text>
    <Text fontSize={"19px"} color="#254c53"  fontWeight={500} >{info}</Text>
  
   </VStack>
  )
}

export default First