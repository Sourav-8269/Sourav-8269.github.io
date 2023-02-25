import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Image,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { HamburgerIcon, CloseIcon,MoonIcon,SunIcon } from '@chakra-ui/icons';
import {NavLink} from "react-router-dom"
import pdf from "../Downloads/Sourav_Sahu_Resume.pdf"
// const Links = ['Dashboard', 'Projects', 'Team'];
const links=[
  {
    // to:"/",
    id:1,
    title:"Home"
  },
  {
    // to:"/about",
    id:2,
    title:"About"
  },
  {
    id:3,

    // to:"/skills",
    title:"Skills"
  },
  {
    id:4,

    // to:"/contact",
    title:"Projects"
  },
  {
    id:5,
    // to:"/project",
    title:"Contact"
  },

]

// const NavLink = () => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {Links}
//   </Link>
// );

export default function Simple() {

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
 

  let activeStyle = {
    textDecoration: "none",
    color: "red"
  };

  let normalStyle = {
    textDecoration: "none",
    // color: "black"
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('#FFFFFF', 'gray.900')} px={4} position="fixed" overflow="visible" top="0" zIndex="1" width="100%" mb="15%" boxShadow="lg" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            
          />
          <HStack spacing={8} alignItems={'center'} >
            <Link to="/">
            <Box fontWeight="bold" color="red.400" >Sourav</Box>
            </Link>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink 
                key={link}
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                ></NavLink>
              ))}
            </HStack> */}
            <HStack
             as={'nav'}
             px={2}
             py={1}
             
             spacing={4}
             display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              // <NavLink
              <Link
              smooth duration={1000}
              
            
              as={NavLink}
              
                key={link.id}
                
                // {({ _Active }) => (isActive ? activeStyle : normalStyle)}
                to={link.title}
                _activeLink={{
                  color:"red.800",
                  bgColor:"blue"
                  }}
                // end
              >
                
                <Box _hover={{color:"red.500",cursor:"pointer",textUnderlinePosition:"#2D3748"}}
                fontWeight="bold"
    _groupHover={{ color: 'tomato' }}>
                  {link.title}
                  </Box>
              </Link>
              // </NavLink>
              ))}
              <a href="https://drive.google.com/file/d/1OE27SM8HNNpT7K2ud6Ypdcj3pLKZu36J/view?usp=sharing" onClick={DownloadResume} target="blank"><Button fontWeight="bold" >Resume</Button></a>
              {/* <Button fontWeight="bold" onClick={pdf} ><a download="Sourav_Sahu_Resume"  href="https://drive.google.com/file/d/1OE27SM8HNNpT7K2ud6Ypdcj3pLKZu36J/view?usp=sharing"   target="_blank" >Resume</a></Button> */}
             {/* <a href={pdf} download="Sourav_Sahu_Resume" ><Button fontWeight="bold" >Resume</Button></a>  */}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} >
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                
                

              </MenuButton>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <Link
              smooth duration={1000}

                key={link.id}
                _hover={{ bg: '#0D74FF' }}
                // style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                to={link.title}
                // end
              >
                {link.title}
              </Link>
      ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}