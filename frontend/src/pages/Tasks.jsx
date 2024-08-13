import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, Heading, Input, Select, Text, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getTasks } from '../action/taskAction';
import { DELETE_TASK_RESET, NEW_TASK_RESET, UPDATE_TASK_RESET } from '../constants/taskConstants';
import AddTaskModal from './AddTaskModal';
import { TaskItem } from './TaskItem';
import { FaSearch } from 'react-icons/fa';


export const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error, count } = useSelector(state => state.task);
  const { error: deleteError, isDeleted, isUpdated } = useSelector(state => state.tasks);
  const { token } = useSelector(state => state.user);
  const [searchedText, setSearchedText] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [priorities, setPriorities] = useState('');
  const [size, setSize] = useState(3);
  const [sort, setSort] = useState('');
  const { success } = useSelector(state => state.newTask);
  const params = { search, status, priorities, size, sort };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearError());
    }
    if (success) {
      window.alert("Task Created Successfully");
      dispatch({ type: NEW_TASK_RESET });
    }
    if (deleteError) {
      window.alert(deleteError);
      dispatch(clearError());
    }
    if (isDeleted) {
      window.alert("Task Deleted Successfully");
      dispatch({ type: DELETE_TASK_RESET });
    }
    if (isUpdated) {
      window.alert("Task Updated Successfully");
      dispatch({ type: UPDATE_TASK_RESET });
    }
    dispatch(getTasks(token, params));
  }, [dispatch, token, error, search, status, priorities, size, sort, deleteError, isDeleted, success, isUpdated]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      p={8}
      minHeight="100vh"
      backgroundColor="#ffffff"
      backgroundImage="linear-gradient(315deg, #ffffff 0%, #5899e2 74%)"
      color="black"
    >
      {tasks.length > 0 ? (
        <Box mt={10} mb={5}>
          <Center>
            <Button colorScheme="green" size="lg" onClick={onOpen} mb={5} boxShadow="lg">
              Create Task
            </Button>
          </Center>
          <Center>
            <Flex
              justifyContent="space-between"
              gap={5}
              margin="auto"
              m={5}
              direction={{ base: 'column', md: 'row' }}
              width="100%"
              maxW="container.lg"
            >
              <Flex
                align="center"
                bg="white"
                borderRadius="md"
                overflow="hidden"
                width={{ base: '100%', md: '60%' }}
                boxShadow="md"
              >
                <Input
                  placeholder="Search"
                  onChange={(e) => setSearchedText(e.target.value)}
                  border="none"
                  borderRadius="none"
                  px={4}
                  py={2}
                  fontSize="md"
                  width="100%"
                />
                <Button
                  colorScheme="blue"
                  borderRadius="none"
                  px={4}
                  py={2}
                  onClick={() => setSearch(searchedText)}
                >
                  <FaSearch />
                </Button>
              </Flex>
              <Select
                id="status"
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
                variant="outline"
                mb={{ base: 4, md: 0 }}
                boxShadow="md"
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Select>
              <Select
                id="priorities"
                onChange={(e) => setPriorities(e.target.value)}
                placeholder="Priorities"
                variant="outline"
                mb={{ base: 4, md: 0 }}
                boxShadow="md"
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
              </Select>
              <Select
                id="dates"
                onChange={(e) => setSort(e.target.value)}
                placeholder="Filter By Date"
                variant="outline"
                boxShadow="md"
              >
                <option value="asc">Ascending Order</option>
                <option value="desc">Descending Order</option>
              </Select>
            </Flex>
          </Center>
          <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-around" gap={5} margin="auto" m={10}>
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </Flex>
          <Center>
            <Button onClick={() => setSize(size + 3)} isDisabled={count <= size} colorScheme="teal" size="md" boxShadow="md">
              Show More
            </Button>
          </Center>
        </Box>
      ) : (
        <Box p={8} textAlign="center">
          <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold" color="blue.700">
            Welcome to Task Manager
          </Heading>
          <Text fontSize="xl" mb={8} color="gray.600">
            Currently, you don't have any tasks. Create a new one.
          </Text>
          <Button colorScheme="green" size="lg" onClick={onOpen} boxShadow="lg">
            Create Task
          </Button>
        </Box>
      )}
      <AddTaskModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
