import React from 'react';
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Importing the icon

export const Home = () => {
  return (
    <Flex
      p={8}
      textAlign="center"
      // bg="white" 
      // backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)"
      //backgroundImage={"https://media.istockphoto.com/id/1494036108/photo/management-analysis-chart-dashboard-progress-planning-task-schedule-growth-team-dashboard.jpg?s=2048x2048&w=is&k=20&c=dpc5GURpkVU3P9nKh8Bw_ACML49gDLZP_mC54NpoJEA="}
        backgroundImage={"https://images.unsplash.com/photo-1652955189360-903b2bf1d4c9?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      bgRepeat={'cover','no-repeat'}
      minHeight="100vh"
      direction={{ base: 'column', md: 'row' }}
      justify="center"
      align="center"
      color="white"
    >
      <Box
        flex={{ base: 'none', md: 1 }}
        textAlign={{ base: 'center', md: 'right' }}
        p={4}
        order={{ base: 2, md: 1 }}
      >
        <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px #000">
          Build your work’s foundation with tasks
        </Heading>
        <Text fontSize="xl" mb={8} textShadow="1px 1px #000">
          Plan, organize, and collaborate on any project with tasks that adapt to any workflow or type of work.
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Button
            as={Link}
            to="/register"
            size="lg"
            bg="black"
            _hover={{ bg: "gray.800", transform: "scale(1.05)", boxShadow: "lg" }}
            colorScheme="blackAlpha"
            rightIcon={<FaArrowRight />} // Adding the icon
            transition="all 0.3s ease"
          >
            Getting Started
          </Button>
        </Box>
      </Box>
      <Box
        flex={{ base: 'none', md: 1 }}
        p={4}
        order={{ base: 1, md: 2 }}
        display="flex"
        justifyContent="center" // Center the image horizontally
      >
        {/* <Image
         src="https://www.productplan.com/uploads/Stages-in-Product-Management-Process-1024x734.png"
          alt="Placeholder Image"
          borderRadius="md"
          maxW={{ base: '80%', md: '50%' }}
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
        /> */}
      </Box>
    </Flex>
  );
};
