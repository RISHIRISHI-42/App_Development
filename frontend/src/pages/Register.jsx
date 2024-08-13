import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, VStack, Flex, Text, InputGroup, InputLeftElement, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearError, register } from '../action/userAction';
import { FaUser, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { images } from '../constants/data';

export const Register = () => {
    const dispatch = useDispatch();
    const { loading, isAuthenticated, error } = useSelector(state => state.user);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
    };

    useEffect(() => {
        if (error) setTimeout(() => dispatch(clearError()), 5000);
        if (isAuthenticated) navigate('/task');
    }, [dispatch, error, isAuthenticated, navigate]);

    return (
        <Box p={4} minHeight="100vh" display="flex" justifyContent="center" alignItems="center" bgGradient="linear(315deg, #ffffff 0%, #5899e2 74%)"  backgroundImage={"https://img.freepik.com/free-vector/abstract-blue-background-with-curve-lines_53876-117178.jpg?w=740&t=st=1722590897~exp=1722591497~hmac=c22b3f7c86d03dbeb6bb726d71fa81684f96032054426bd209c77d0537cf7946"}>
            <Flex width="100%" justifyContent="center" alignItems="center" maxW="1200px" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 8px" borderRadius="12px" overflow="hidden">
                <Box flex="1" p={8} display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="lg">
                    <VStack spacing={6} width="80%" maxW="lg" mx="auto" p={8} borderRadius="md" boxShadow="lg" bg="rgba(255, 255, 255, 0.4)">
                        <Text fontSize="3xl" fontWeight="bold" color="#ea1d6f" fontFamily="'Poppins', sans-serif">
                            Register
                        </Text>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <VStack spacing={4} align="stretch">
                                <FormControl id="name">
                                    <FormLabel>Name</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<FaUser color="gray.300" />} />
                                        <Input type="text" placeholder="Enter your name" border="solid black 1px" value={name} onChange={(e) => setName(e.target.value)} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<FaEnvelope color="gray.300" />} />
                                        <Input type="email" placeholder="Enter your email" border="solid black 1px" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
                                        <Input type="password" placeholder="Enter your password" border="solid black 1px" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </InputGroup>
                                </FormControl>
                                <Button type="submit" bg="#ea1d6f" width="100%" isDisabled={loading} leftIcon={<FaUserPlus />}>
                                    {loading ? "Registering" : "Register"}
                                </Button>
                            </VStack>
                        </form>
                        {isAuthenticated && (
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle>Registration Successful</AlertTitle>
                            </Alert>
                        )}
                        {error && (
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>{error}</AlertTitle>
                            </Alert>
                        )}
                        <Box>
                            <p>Already registered? <Link to="/login" style={{ color: '#ea1d6f' }}>Login here</Link></p>
                        </Box>
                    </VStack>
                </Box>
                <Box flex="1" display={{ base: 'none', md: 'block' }}>
                    <img src={images.registerImage} alt="Register Illustration" style={{ width: '100%', objectFit: 'cover' }} />
                </Box>
            </Flex>
        </Box>
    );
};
