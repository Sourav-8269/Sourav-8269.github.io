import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Github = () => {
  return (
    <Box w={["100%","100%","100%"]} >
        <Text  
          fontWeight="bold" 
          fontSize="30px"
          p="10px"
          mt="200px"
          >
          GitHub Statistics & Calender section
        </Text>



        <Box align="center" p="10px"   >
            <Box  mt={["50px","70px","100px"]} w={["100%","100%","100%"]} >
                <GitHubCalendar
                    username="Sourav-8269"
                    blockSize={15}
                    blockMargin={5}
                    color="blue"
                    fontSize={15}
                />
            </Box>



            <Box >
            <Image boxShadow='dark-lg' w={["85%","70%","50%"]} borderRadius="2%" mt="50px" src="https://camo.githubusercontent.com/fb78673fd92b1d82683fa499d34f62586094caae8ba1c06d6d456b0dde82c693/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d736f757261762d383236392673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="Sourav-8269" />
            <Image boxShadow='dark-lg' w={["85%","70%","50%"]} borderRadius="2%" mt="50px"  src="https://camo.githubusercontent.com/1b9a9c309d7290f1a0f07c0b7e5ba05ce6061ea129b176c01d428de481ef42bf/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d736f757261762d3832363926" alt="Sourav-8269" />
            <Image boxShadow='dark-lg' w={["85%","70%","50%"]} borderRadius="2%" mt="50px"  src="https://camo.githubusercontent.com/dad36f2cab157989dd52baf3a00fa5566300853aa68fc72af5a7f1178b7985e2/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d736f757261762d383236392673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="Sourav-8269" />
            </Box>

            
           
        
        </Box>



    </Box>
  )
}

export default Github