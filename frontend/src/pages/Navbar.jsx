import React from 'react';
import { Box, Flex, Spacer, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../action/userAction';
import { FaClipboardList, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus, FaTachometerAlt } from 'react-icons/fa';

export const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Flex 
      align="center" 
      justify="space-between" 
      p="4" 
      bg="rgba(0, 0, 0, 0.5)" // Transparent background
      color="white" 
      border="1px solid black" // Solid black border
      boxShadow="0px 3px 10px rgba(0, 0, 0, 0.1)"
      position="fixed"
      width="100%"
      zIndex="100"
      top="0"
    >
      <Box>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Flex align="center">
            <FaClipboardList size="1.5rem" color="white" />
            <Text 
              fontSize="2xl" 
              fontWeight="bold" 
              color="white" 
              ml={2} 
              fontFamily="'Poppins', sans-serif"
              _hover={{ color: "#ddd" }}
            >
              Taskz
            </Text>
          </Flex>
        </Link>
      </Box>
      <Spacer />
      <Flex alignItems="center" gap={4}>
        <Link to='/about' style={{ fontFamily:"'Poppins', sans-serif" }}>
          <Flex 
            align="center" 
            p="2"
            borderRadius="md"
            _hover={{ 
              bg: "linear-gradient(45deg, #f857a8, #ff5858)", 
              color: "white",
              boxShadow: "md"
            }}
          >
            <FaInfoCircle size="1.2rem" />
            <Text ml={2}>ABOUT</Text>
          </Flex>
        </Link>
        <Link to='/contact' style={{ fontFamily: "'Poppins', sans-serif" }}>
          <Flex 
            align="center" 
            p="2"
            borderRadius="md"
            _hover={{ 
              bg: "linear-gradient(45deg, #f857a8, #ff5858)", 
              color: "white",
              boxShadow: "md"
            }}
          >
            <FaEnvelope size="1.2rem" />
            <Text ml={2}>CONTACT</Text>
          </Flex>
        </Link>
        {isAuthenticated ? (
          <Flex alignItems="center" gap={4}>
            <Text>WELCOME , {user.name}</Text>
            <Link to="/dashboard" style={{ fontFamily: "'Poppins', sans-serif"  }}>
              <Flex 
                align="center" 
                p="2"
                borderRadius="md"
                _hover={{ 
                  bg: "linear-gradient(45deg, #f857a8, #ff5858)", 
                  color: "white",
                  boxShadow: "md"
                }}
              >
                <FaTachometerAlt size="1.2rem" />
                <Text ml={2}>DASHBOARD</Text>
              </Flex>
            </Link>
            <Button 
              colorScheme="whiteAlpha" 
              variant="outline" 
              onClick={() => dispatch(logout())}
              _hover={{ 
                bg: "linear-gradient(45deg, #f857a8, #ff5858)", 
                borderColor: "transparent",
                color: "white",
                boxShadow: "md"
              }}
            >
              Logout
            </Button>
          </Flex>
        ) : (
          <Flex gap={4}>
            <Link to='/login' style={{ fontFamily: "'Poppins', sans-serif"  }}>
              <Flex 
                align="center" 
                p="2"
                borderRadius="md"
                _hover={{ 
                  bg: "linear-gradient(45deg, #f857a8, #ff5858)", 
                  color: "white",
                  boxShadow: "md"
                }}
              >
                <FaSignInAlt size="1.2rem" />
                <Text ml={2}>LOGIN</Text>
              </Flex>
            </Link>
            <Link to='/register' style={{ fontFamily: "'Poppins', sans-serif"  }}>
              <Flex 
                align="center" 
                p="2"
                borderRadius="md"
                _hover={{ 
                  bg: "linear-gradient(45deg, #f857a8, #ff5858)", 
                  color: "white",
                  boxShadow: "md"
                }}
              >
                <FaUserPlus size="1.2rem" />
                <Text ml={2}>REGISTER</Text>
              </Flex>
            </Link>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
