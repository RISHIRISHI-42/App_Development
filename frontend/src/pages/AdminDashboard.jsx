import React from 'react';
import { Box, Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useColorModeValue, Heading, Spinner, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const statBg = useColorModeValue('white', 'gray.800');
  const { tasks, loading, error } = useSelector(state => state.task);

  // Calculate task counts
  const newTasks = tasks.filter(tasks => tasks.status === 'new').length;
  const inProgressTasks = tasks.filter(tasks => tasks.status === 'inProgress').length;
  const completedTasks = tasks.filter(tasks => tasks.status === 'completed').length;

  if (loading) {
    return (
      <Box p={8} height="90vh" display="flex" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={8} height="90vh" display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="xl" color="red.500">Error: {error.message}</Text>
      </Box>
    );
  }

  return (
    <Box p={8} backgroundColor="#ffffff" height="90vh" backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)" color="black">
      <Heading as="h2" size="lg" mb={6} textAlign="center" textShadow="2px 2px #000">Admin Dashboard</Heading>
      <Flex justify="space-around" flexWrap="wrap" gap={5}>
        <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
          <StatLabel>Total Tasks</StatLabel>
          <StatNumber>{tasks.length}</StatNumber>
        </Stat>
        <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
          <StatLabel>New Tasks</StatLabel>
          <StatNumber>{tasks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" /> New this month
          </StatHelpText>
        </Stat>
        <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
          <StatLabel>In Progress</StatLabel>
          <StatNumber>{tasks.status}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" /> In progress
          </StatHelpText>
        </Stat>
        <Stat p={4} bg={statBg} shadow="md" borderRadius="md">
          <StatLabel>Completed Tasks</StatLabel>
          <StatNumber>{completedTasks}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" /> Completed this month
          </StatHelpText>
        </Stat>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
