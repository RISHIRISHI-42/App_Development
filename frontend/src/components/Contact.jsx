import React from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box
      p={8}
      minHeight="100vh"
      
      //backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)"
      backgroundSize="cover"
      backgroundBlendMode="overlay"
      color="black"
      fontFamily="'Montserrat', sans-serif"
      fontWeight="700"
      letterSpacing="1.4px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="rgb(, 62, 51 , 0.33)"
        borderRadius="15px"
        position="relative"
        boxShadow="0 20px 40px rgba(0, 0, 0, 0.4)"
        p={10}
        maxW="700px"
        w="100%"
        minH="500px"
        display="flex"
        flexDirection="column"
      >
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={6}
        >
          <Heading as="h1" size="xl" mb={4} color="#ea1d6f">Contact Us</Heading>
          <Text fontSize="lg" mb={4} color="#fff">
            We'd love to hear from you! Please fill out the form below to get in touch with us.
          </Text>
          <Box
            w="100%"
            maxW="500px"
          >
            <FormControl id="name" mb={4}>
              <FormLabel color="white">Name</FormLabel>
              <Input 
                type="text" 
                placeholder="Enter your name" 
                variant="unstyled"
                borderBottom="1px solid #666"
                color="#ddd"
                _placeholder={{ color: 'Black' }}
                _focus={{ borderBottomColor: '#ddd' }}
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel color="white">Email</FormLabel>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                variant="unstyled"
                borderBottom="1px solid #666"
                color="#ddd"
                _placeholder={{ color: 'Black' }}
                _focus={{ borderBottomColor: '#ddd' }}
              />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel color="white">Message</FormLabel>
              <Textarea 
                placeholder="Enter your message" 
                variant="unstyled"
                borderBottom="1px solid #666"
                color="#ddd"
                _placeholder={{ color: 'Black' }}
                _focus={{ borderBottomColor: '#ddd' }}
              />
            </FormControl>
            <Button
              bg="lightGrey"
              border="none"
              color="#ea1d6f"
              fontSize="14px"
              cursor="pointer"
              _hover={{ color: '#b9134f' }}
              mb={4}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box
          textAlign="center"
          mt="auto"
          color="#ffa4bd"
          fontFamily="'Roboto Condensed', sans-serif"
          fontSize="16px"
          fontWeight="normal"
        >
          
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
