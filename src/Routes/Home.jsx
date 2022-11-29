import { Heading,Image,Box } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
        <div >
            <Heading as="h3">Hello, my name is</Heading>
            <Heading>Sourav Kumar Sahu</Heading>
        </div>
        <Box boxSize='sm' display="flex" justifyContent="center" width="90%" ml={50}>
            <Image  borderRadius='full'   src="https://iili.io/HKLa8ba.png"></Image>
        </Box>
        <div>
          {/* <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' /> */}
        </div>
    </>
  )
}

export default Home