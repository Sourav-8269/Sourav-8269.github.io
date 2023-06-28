import React from 'react'
import { Box,Stack,HStack,Heading,VStack ,Image,Button} from '@chakra-ui/react'
import { useEffect } from 'react'
import AOS from "aos"
import Typewriter from 'typewriter-effect';
import pdf from "../Downloads/Sourav_Sahu_Resume.pdf"
import "../CSS/home.css"

const Home = () => {

  const DownloadResume = () => {
  
    // using Java Script method to get PDF file
    fetch(pdf).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = "Sourav_Sahu_Resume.pdf";
            alink.click();
        })
    })
   
}

  useEffect(() => {
   AOS.init({delay:400});
  }, []);
  return (
    <Box display="flex" name="Home" padding="5%"  data-aos="fade-right" mt="7%">
      <Stack margin="auto" width="80%" justifyContent="space-between" direction={{ lg: "row",xl:"row", md: "row",base:"column-reverse"   }} >
      <VStack alignItems="self-start"  mt="5%" >
      
        <Heading textAlign="left" mb={3} as="h2" fontSize="27px" id="about">Hello 👋 my name is</Heading>
        <Heading textAlign="left" mb={5} as="h1" size="xl" id="about">Sourav Kumar Sahu</Heading>
        <Heading display="flex" textAlign="left" id="about">I'm a &nbsp;<Heading color="#1da1f2" id="about"><Typewriter
  options={{
    
    strings: [' Web Developer.', ' Full Stack Web Developer.'],
    autoStart: true,
    loop: true,
  }}
/></Heading></Heading>
        <HStack id="socialButtonsDiv" >
        {/* <Link href='./Downloads/Sourav_Sahu_Resume.pdf' isExternal>Chkara</Link>
          <a href="./Downloads/Sourav_Sahu_Resume.pdf" download={true}>Resume</a>*/}
          <a href="https://drive.google.com/file/d/1OE27SM8HNNpT7K2ud6Ypdcj3pLKZu36J/view?usp=sharing" onClick={DownloadResume} target="blank"><Button id="socialButtons">Resume</Button></a>
          {/* <a href={pdf} download="Sourav_Sahu_Resume"><Button colorScheme="red">Resume</Button></a>  */}
          <a href="https://github.com/Sourav-8269" target="_blank"><Button id="socialButtons">GitHub</Button></a>
          {/* <a href="https://github.com/Sourav-8269" target="_blank"><img src="https://debobrota-haldar.netlify.app/static/media/github.a855c3975c028d8069f5.png" alt="" srcset="" width="100px" /></a> */}
          <a href="https://www.linkedin.com/in/sourav-kumar-sahu-51b444249/" target="_blank"><Button id="socialButtons">LinkedIn</Button></a>
          
        </HStack>
      </VStack>
      <VStack  borderRadius="105px" justifyContent="right" alignContent="right">
      {/* https://i.ibb.co/r4SZHR3/28-year-old-software-engineer-removebg-preview.png */}
      <Image src="https://i.ibb.co/Xz0sBfk/28-year-old-software-engineer-removebg-preview-1.png"></Image>
      {/* <Image  borderRadius="10px" src="https://i.ibb.co/37WKs1W/1-removebg-preview-2-removebg-preview.png"></Image> */}
      </VStack>
      </Stack>
      
      {/* <About/> */}
      {/* <Projects/> */}
    </Box>
  )
}

export default Home