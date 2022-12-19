import React from 'react'
import { Box,Stack,HStack,Heading,VStack ,Image,Button,Link} from '@chakra-ui/react'
import About from './About'
import Projects from './Projects'
import { useEffect } from 'react'
import AOS from "aos"
import Typewriter from 'typewriter-effect';
import pdf from "../Downloads/Sourav_Sahu_Resume.pdf"

const Home = () => {
  useEffect(() => {
   AOS.init({delay:400});
  }, []);
  return (
    <Box display="flex" name="Home" padding="5%"  data-aos="fade-right" mt="7%">
      <Stack margin="auto" width="80%" justifyContent="space-between" direction={{ lg: "row",xl:"row", md: "row",base:"column-reverse"   }} >
      <VStack alignItems="self-start"  mt="5%" >
      
        <Heading textAlign="left" mb={3} as="h2" fontSize="27px" >Hello, my name is</Heading>
        <Heading textAlign="left" mb={5} as="h1" size="xl" >Sourav Kumar Sahu</Heading>
        <Heading display="flex" textAlign="left" >I'm a&nbsp;<Heading color="red.500"><Typewriter
  options={{
    
    strings: [' Web Developer.', ' Full Stack Web Developer.'],
    autoStart: true,
    loop: true,
  }}
/></Heading></Heading>
        <HStack>
        {/* <Link href='./Downloads/Sourav_Sahu_Resume.pdf' isExternal>Chkara</Link>
          <a href="./Downloads/Sourav_Sahu_Resume.pdf" download={true}>Resume</a>*/}
          <a href={pdf} download ><Button colorScheme="red">Resume</Button></a> 
          <a href="https://github.com/Sourav-8269" target="_blank"><Button colorScheme="red">GitHub</Button></a>
          <a href="https://www.linkedin.com/in/sourav-kumar-sahu-51b444249/" target="_blank"><Button colorScheme="red">LinkedIn</Button></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        </HStack>
      </VStack>
      <VStack  borderRadius="105px" justifyContent="right" alignContent="right">
        
      <Image src="https://i.ibb.co/37WKs1W/1-removebg-preview-2-removebg-preview.png"></Image>
      </VStack>
      </Stack>
      
      {/* <About/> */}
      {/* <Projects/> */}
    </Box>
  )
}

export default Home