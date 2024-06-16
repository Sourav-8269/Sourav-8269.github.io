import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"


const Github = () => {
  useEffect(()=>{
    AOS.init({delay:400});
},[])
  return (
    <Box w={["100%","100%","100%"]} >
        <Text  
          fontWeight="bold" 
          fontSize="30px"
          p="10px"
          mt="200px"
          color="#1da1f2"
          >
          GitHub Statistics & Calender section
        </Text>



        <Box align="center" p="10px" >
            <Box  mt={["50px","70px","100px"]} w={["100%","100%","100%"]} data-aos="zoom-in-down"   >
                <GitHubCalendar
                    username="Sourav-8269"
                    blockSize={15}
                    blockMargin={5}
                    color="blue"
                    fontSize={15}
                />
            </Box>
            <Box >
              <Image data-aos="flip-left" boxShadow='dark-lg' w={["85%","70%","50%"]} borderRadius="2%" mt="50px" src="https://camo.githubusercontent.com/6d006b1c0512db6c27d23e65fe55ac590cbe90f6bc4aef7c384c3b0e681dee4b/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d736f757261762d3832363926" alt="Sourav-8269" />
              <Image data-aos="flip-right" boxShadow='dark-lg' w={["85%","70%","50%"]} borderRadius="2%" mt="50px"  src="https://camo.githubusercontent.com/8b78ec78ee40adc49dc39996c19b3b89797beda0c35bda75bc907e9f733415fa/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d736f757261762d383236392673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="Sourav-8269" />
              <Image data-aos="flip-left" boxShadow='dark-lg' w={["85%","70%","50%"]} borderRadius="2%" mt="50px"  src="https://camo.githubusercontent.com/e2da50ae98efce299d14a79752b609fa5478abe4ef46596b4e58bacf1d478b99/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d736f757261762d383236392673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="Sourav-8269" />
            </Box>
        </Box>



    </Box>
  )
}

export default Github