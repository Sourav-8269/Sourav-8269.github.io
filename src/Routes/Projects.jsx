import React from 'react'
// import { Box } from '@chakra-ui/react'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  HStack,
  Image,
} from '@chakra-ui/react';
import { FaInstagram, FaReact, FaTwitter, FaYoutube ,FaHtml5,FaCss3Alt,FaVideo,FaEye,FaGithub} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
// import {AiOutlineHtml5} from "react-icons/fa"
const Projects = () => {
  useEffect(()=>{
    AOS.init({delay:400});
},[])
  // data-aos="zoom-in"
  const navigate=useNavigate();
  const IMAGE =
  [
    "https://camo.githubusercontent.com/6e505c76c0cdae2ac857d99581678922107110efa3d907a56b39ace9d3258619/68747470733a2f2f692e6962622e636f2f4a4267464676712f53637265656e73686f742d323032332d30312d32332d3130343132392e706e67",
    "https://i.ibb.co/q19pM8h/Screenshot-1278.png",
    "https://i.ibb.co/XsmbvDF/Screenshot-2022-12-06-225750.png",
    "https://i.ibb.co/160pYBd/Screenshot-2023-01-23-202548.png",
    "https://i.ibb.co/JyYLtzk/Screenshot-2023-03-03-175205.png"


  ];

  return (
    <div  >
      <Box name="Projects" data-aos="zoom-out-up" width="80%" m="auto" mt="25%" >
      <Heading   padding="6%" fontFamily="sans-serif" fontWeight="500">MY PROJECTS</Heading>
      <Stack direction={{ lg: "row",xl:"row","2xl":"row", md: "column",base:"column",sm:"column" }} spacing="50px">
        {/* center */}
      <Box  >
        <Box data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear" boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" borderRadius="15px"  padding="2%"  mb={10} >
        <Image  src={IMAGE[0]}></Image>

        <HStack height="40px"  m={5}  >
          <FaReact size="fa-lg" />
          <FaHtml5 size="fa-lg" />
          <FaCss3Alt  size="fa-lg"/>
         
          <Image width="35px" borderRadius="18px" color="blackAlpha.500" src="data:image/jpeg;base64,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"></Image>
        </HStack>

        <Heading as="h1" size="lg" m={5}>Adorama Clone</Heading>
        <Heading as="p" size="xs">Adorama is a Ecommerce website which provides DSLR cameras, 4K video gear, and Home Electronics like the latest Smart Home devices.</Heading>
        <HStack m={5} justifyContent="space-around" >
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><FaVideo size="40px"/></a> */}
          <a href="https://adorama-photography.vercel.app/" target="_blank" rel="noopener noreferrer"><FaEye height="20px" size="40px" /></a>
          <a href="https://github.com/gouseimmu/Adorama-Clone" target="_blank" rel="noopener noreferrer"><FaGithub size="40px"/></a>
        </HStack>
        </Box>
      </Box>
      
      <Box  >
        <Box data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear" boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" borderRadius="15px"  padding="3%" mb={10} >
        <Image  src={IMAGE[3]}></Image>
        <HStack height="40px"  m={5}  >
          <FaReact size="fa-lg" />
          <FaHtml5 size="fa-lg" />
          <FaCss3Alt  size="fa-lg"/>
         <Image width="35px" borderRadius="18px" color="blackAlpha.500" src="data:image/jpeg;base64,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"></Image>
          
        </HStack>


        <Heading as="h1" size="lg" m={5}>KFC Clone</Heading>
        <Heading as="p" size="xs">KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken.</Heading>
          <HStack m={5} justifyContent="space-around" >
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><FaVideo size="40px"/></a> */}
          <a href="https://bfc-vivek-bhatt05.vercel.app/" target="_blank" rel="noopener noreferrer"><FaEye height="20px" size="40px" /></a>
          <a href="https://github.com/saurabhsinghmehta/flawless-trick-6809" target="_blank" rel="noopener noreferrer"><FaGithub size="40px"/></a>
        </HStack> 
        </Box>
        
      </Box>
      
      </Stack>
      <Stack direction={{ lg: "row",xl:"row","2xl":"row", md: "column",base:"column",sm:"column" }} spacing="50px" mt={5} >
      {/* center */}
      <Box  >
        <Box data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear" boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" borderRadius="15px"  padding="2%" mb={10}>
        <Image  src={IMAGE[1]}></Image>

        <HStack height="40px"  m={5}  >
          <FaReact size="fa-lg" />
          <FaHtml5 size="fa-lg" />
          <FaCss3Alt  size="fa-lg"/>
         
          <Image width="35px" borderRadius="18px" color="blackAlpha.500" src="data:image/jpeg;base64,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"></Image>
        </HStack>

        <Heading as="h1" size="lg" m={5}>Nykaa Clone</Heading>
        <Heading as="p" size="xs">Nykaa is an Indian e-commerce company, It sells beauty,
          wellness, and fashion products across websites, mobile
          apps, and 100+ offline stores.</Heading>
        <HStack m={5} justifyContent="space-around" >
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><FaVideo size="40px"/></a> */}
          <a href="https://nykaaone.vercel.app/" target="_blank" rel="noopener noreferrer"><FaEye height="20px" size="40px" /></a>
          <a href="https://github.com/Sourav-8269/Nykaa-Clone" target="_blank" rel="noopener noreferrer"><FaGithub size="40px"/></a>
        </HStack>
        </Box>
      </Box>
      
      {/* <Box  >
        <Box data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear" boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" borderRadius="15px"  padding="3%" mb={10}>
        <Image  src={IMAGE[2]}></Image>
        <HStack height="40px"  m={5}  >
          <FaReact size="fa-lg" />
          <FaHtml5 size="fa-lg" />
          <FaCss3Alt  size="fa-lg"/>
         
          
        </HStack>


        <Heading as="h1" size="lg" m={5}>J.Crew Clone</Heading>
        <Heading as="p" size="xs">J.Crew is an e-commerce company, It sells shoes,
          wellness, and fashion products across world, mobile
          apps.</Heading>
          <HStack m={5} justifyContent="space-around" >
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><FaVideo size="40px"/></a> */}
          {/* <a href="https://calm-florentine-38a27c.netlify.app/" target="_blank" rel="noopener noreferrer"><FaEye height="20px" size="40px" /></a>
          <a href="https://github.com/sudiptapramanik209/happy-notebook-3138" target="_blank" rel="noopener noreferrer"><FaGithub size="40px"/></a>
        </HStack> 
        </Box>
        
      </Box> */}

      <Box  >
        <Box data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear" boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" borderRadius="15px"  padding="3%" mb={10}>
        <Image  src={IMAGE[4]}></Image>
        <HStack height="40px"  m={5}  >
          <FaReact size="fa-lg" />
          <FaHtml5 size="fa-lg" />
          <FaCss3Alt  size="fa-lg"/>
          
        </HStack>


        <Heading as="h1" size="lg" m={5}>Todo App</Heading>
        <Heading as="p" size="xs">Todo App is an application specially built to keep track of errands or tasks that need to be done.</Heading>
          <HStack m={5} justifyContent="space-around" >
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><FaVideo size="40px"/></a> */}
          <a href="https://todo-app-2-three.vercel.app/" target="_blank" rel="noopener noreferrer"><FaEye height="20px" size="40px" /></a>
          <a href="https://github.com/Sourav-8269/My-Todo-App" target="_blank" rel="noopener noreferrer"><FaGithub size="40px"/></a>
        </HStack> 
        </Box>
        
      </Box>
      
      </Stack>
      </Box>
</div>
  )
}

export default Projects


{/* <Grid templateColumns='repeat(2, 1fr)' gap={6}>
    <GridItem>
    <Center py={12}>
    <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={400}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </GridItem>
    <GridItem>
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </GridItem>
    </Grid> */}