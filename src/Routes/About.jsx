import React from 'react'
import {Box,VStack, HStack,Heading,Image,Stack,Text } from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    AOS.init({delay:400});
},[])
  return (
    <Box  width="80%" margin="auto" name="About" mt="5%" padding="6%" >
      {/* <Stack> */}
      
      <Text data-aos="zoom-in-up" fontSize="36px" id="heading">ABOUT ME</Text>
      <Stack justifyContent="space-around" direction={{ lg: "row",xl:"row", md: "row",base:"column-reverse"   }} spacing="50px">
        {/* Here is Stack mt=10% was there earlier */}
      <VStack flex="2" data-aos="fade-right">
        <Box  padding="3%" borderRadius="15px" mt="10%">
      <Heading textAlign="left" as="h4" size="md" fontWeight="normal">Energetic and goal-driven Full Stack Web developer
capable of writing production-ready code using HTML,
CSS, and JavaScript with proficiency in Mern Stack.
Enthusiastic and proactive person for learning new

technologies, looking for a challenging role in a growth-
oriented organization.</Heading>
{/* Earlier size was lg and fontweight was absent */}
        </Box>
      </VStack>
      <VStack flex={1} data-aos="fade-left">
      <Image  borderRadius="10px" src="https://i.ibb.co/37WKs1W/1-removebg-preview-2-removebg-preview.png"></Image>

      </VStack>
      </Stack>
      {/* </Stack> */}
    </Box>
  )
}

export default About