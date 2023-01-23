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
      
      <Heading fontFamily="sans-serif" data-aos="zoom-in-up" fontWeight="500">ABOUT ME</Heading>
      <Stack justifyContent="space-around" direction={{ lg: "row",xl:"row", md: "row",base:"column-reverse"   }} spacing="50px">
        {/* Here is Stack mt=10% was there earlier */}
      <VStack flex="2" data-aos="fade-right">
        <Box  padding="3%" borderRadius="15px" mt="10%">
      <Heading textAlign="left" as="h4" size="md" fontWeight="normal">I am a full-stack web developer from Masai school, a passionate learner who's always willing to learn and work across technology and domains. I love to explore new technologies and leverage them to solve real-life problems. I'm deep into Web Development.</Heading>
{/* Earlier size was lg and fontweight was absent */}
        </Box>
      </VStack>
      <VStack flex={1} data-aos="fade-left">
      <Image  borderRadius="10px" src="https://i.ibb.co/r4SZHR3/28-year-old-software-engineer-removebg-preview.png"></Image>

      </VStack>
      </Stack>
      {/* </Stack> */}
    </Box>
  )
}

export default About