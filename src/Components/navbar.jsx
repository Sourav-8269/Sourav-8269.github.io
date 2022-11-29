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
import { HamburgerIcon, CloseIcon,MoonIcon,SunIcon } from '@chakra-ui/icons';
import {NavLink,Link} from "react-router-dom"

// const Links = ['Dashboard', 'Projects', 'Team'];
const links=[
  {
    to:"/",
    title:"Home"
  },
  {
    to:"/about",
    title:"About"
  },
  {
    to:"/skills",
    title:"Skills"
  },
  {
    to:"/contact",
    title:"Contact"
  },
  {
    to:"/projects",
    title:"Projects"
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

 

  let activeStyle = {
    textDecoration: "none",
    color: "grey"
  };

  let normalStyle = {
    textDecoration: "none",
    color: "black"
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/">
            <Box>Logo</Box>
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
              <NavLink
                key={link.title}
                
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                to={link.to}
                end
              >
                {link.title}
              </NavLink>
      ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
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
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <NavLink
                key={link.title}
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                to={link.to}
                end
              >
                {link.title}
              </NavLink>
      ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}