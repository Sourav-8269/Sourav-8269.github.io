import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
 
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {EmailIcon} from "@chakra-ui/icons"
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import emailjs from "emailjs-com"

export default function Contact() {
  useEffect(()=>{
    AOS.init({delay:400});
},[])

const sendEmail = (e) => {
  // e.preventDefault();
  console.log(e)

  emailjs.sendForm('gmail', 'template_c4xyocd', e.target, 'SZBvLMLdIX3Rn_hSf')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.reset();
};
  return (
    <Container  name="Contact"  maxW="full" mt="3%" centerContent overflow="hidden" padding="4%"  >
      <Flex>
        <Box
        // boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        data-aos="flip-up"
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading id="heading" style={{color:"white"}}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-9835888269
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        souravsahu70047@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Jharkhand, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    ml="10%"
                    alignItems="flex-start">
                      <a href="https://www.linkedin.com/in/sourav-kumar-sahu-51b444249/" target="_blank">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<FaLinkedin size="28px" />}
                      />
                      </a>
                      <a href="https://github.com/Sourav-8269" target="_blank">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                      />
                      </a>
                      <a href="mailto:souravsahu70047@gmail.com?subject=subject&cc=cc@example.com">
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<EmailIcon boxSize="28px" size="28px" />}
                    />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
                      
               <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5} >
                    

                      <form id="form" action="https://getform.io/f/11050315-1dc2-4dfe-8acc-b47ed919bd74" method="POST" >
                      <FormLabel>Your Name</FormLabel>
                      {/* <Input type="text" name="name" placeholder="Enter Your Name" /> */}
                      <InputGroup borderColor="#E0E1E7" mb="5%">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" name="name" />
                        </InputGroup>
                        {/* <input style={{width:"100%",border:"1px solid #0D74FF",padding:"3%",borderRadius:"5px"}} type="text" name="name" placeholder="Name"/> */}
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7" mb="5%">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" name="email"/>
                        </InputGroup>
                        {/* <input style={{width:"100%",border:"1px solid #0D74FF",padding:"3%",borderRadius:"5px"}} type="text" name="email" placeholder="Email"/> */}
                        <FormLabel>Message</FormLabel>
                        <Textarea
                        mb="5%"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          name="message"
                          placeholder="Your message"
                        />
                        {/* <textarea style={{width:"100%",border:"1px solid #0D74FF",padding:"3%",borderRadius:"5px"}} name="message" id="" cols="30" rows="10" placeholder="Message"></textarea> */}
                        {/* <button style={{width:"70%",backgroundColor:"#0D74FF",color:"white",padding:"3%",fontWeight:"bolder",borderRadius:"5px"}} type="submit" >Send Message</button> */}
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          fontWeight={500}
                          type="submit"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </form>
                   
                    </VStack>
                  </Box>
                </Box>
              </WrapItem> 
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}