import React from 'react'
import {Box,VStack,Stack,Text } from '@chakra-ui/react'

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Profile from './Profile';

const About = () => {
  useEffect(()=>{
    AOS.init({delay:400});
},[])
  return (
    <Box  width={["100%","80%"]} margin="auto" name="About" mt="5%" padding="6%" >
      <Text data-aos="zoom-in-up" fontSize="36px" id="heading">ABOUT ME</Text>
      <Stack justifyContent="space-around" alignItems="center" direction={{ lg: "row",xl:"row", md: "column-reverse",base:"column-reverse"   }} spacing="50px" mt="20px">
        {/* Here is Stack mt=10% was there earlier */}
        <VStack flex="2" data-aos="fade-right">
          <Box  padding="3%" borderRadius="15px" mt="3%">
        <Text textAlign="left" fontSize="18px">Full Stack Developer with a passion for building robust and scalable web applications. I thrive in fast-paced environments and enjoy solving complex problems through innovative solutions. With a strong foundation in frontend and backend development, I excel in creating seamless user experiences and optimizing performance.</Text>
        {/* Earlier size was lg and fontweight was absent */}
          </Box>
          <Box  padding="3%" borderRadius="15px" mt="10%">
          <Text textAlign="left" fontSize="18px">Passionate about staying up-to-date with the latest industry trends, tools, and technologies. Strong problem-solving abilities, with a focus on finding innovative solutions to challenging technical problems. Looking for a challenging role in a growth-oriented organization and to help drive success.</Text>
          </Box>
        </VStack>
        <VStack flex={1} data-aos="fade-left">
        <Profile/>
        </VStack>
      </Stack>
    </Box>
  )
}

export default About