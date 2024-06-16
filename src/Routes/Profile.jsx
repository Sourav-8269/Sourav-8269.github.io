import {
    chakra,
    Box,
    Stack,
    Link,
    HStack,
    Text,
    Icon,
    Avatar,
    Tooltip,
    Divider,
    useColorModeValue,
    VStack
  } from '@chakra-ui/react';
  import { AiFillGithub, AiFillLinkedin  } from 'react-icons/ai';
  
  const Profile = () => {
    return (
        <Stack
        cursor="pointer"
        //   w="17rem"
          spacing={2}
          p={4}
          border="1px solid"
          borderColor={useColorModeValue('gray.400', 'gray.600')}
          rounded="3xl"
          margin="0 auto"
          _hover={{
            boxShadow: useColorModeValue(
              '0 4px 6px rgba(160, 174, 192, 0.6)',
              '0 4px 6px rgba(9, 17, 28, 0.4)'
            )
          }}
        >
          <HStack justifyContent="space-between" alignItems="baseline">
            <Tooltip
              label="Gurgaon, India"
              aria-label="Gurgaon, India"
              placement="right-end"
              size="sm"
              // Sizes for Tooltip are not implemented in the default theme. You can extend the theme to implement them
            >
              <Box pos="relative" bg="white" rounded="3xl">
                <Avatar
                  src="/projects-img/sourav.webp"
                  name="Sourav Kumar Sahu"
                  size="full"
                  borderRadius="3xl"
                />
                <Avatar
                  src="https://flagcdn.com/in.svg"
                  name="Indian Flag"
                  size="xs"
                  borderRadius="full"
                  pos="absolute"
                  bottom={0}
                  right="-12px"
                />
              </Box>
            </Tooltip>
            <VStack>
                <Link isExternal href="https://github.com/Sourav-8269">
                <Icon as={AiFillGithub} w={6} h={6} />
                </Link>
                <Link isExternal href="https://www.linkedin.com/in/sourav-kumar-sahu-51b444249/">
                <Icon as={AiFillLinkedin} w={6} h={6} />
                </Link>
            </VStack>
          </HStack>
          <chakra.h1 style={{marginTop:"20px"}} fontSize="xl" fontWeight="bold">
            Sourav Kumar Sahu
          </chakra.h1>
          <Divider />
          <Text fontSize="md">
            Full Stack Developer<br></br> Branding Pioneers
          </Text>
        </Stack>
    );
  };
  
  export default Profile;