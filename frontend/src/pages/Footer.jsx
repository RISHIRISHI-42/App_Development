import React from 'react';
import { Box, Flex, Text, Link, Stack, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaQuestionCircle, FaInfoCircle, FaHandsHelping } from 'react-icons/fa';

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#24262b" color="white" py={16}>
      <Flex direction="row" flexWrap="wrap" justify="space-between">
        <Box width={{ base: "100%", sm: "50%", md: "33%" }} p={4}>
          <Text fontSize="lg" fontWeight="bold" color="white" mb={4} position="relative" _after={{
            content: "''",
            position: "absolute",
            width: "50px",
            height: "2px",
            bg: "#e91e63",
            left: "0",
            bottom: "-10px"
          }}>
            Company
          </Text>
          <Stack spacing={2}>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaInfoCircle style={{ marginRight: '8px' }} /> About Us
              </Flex>
            </Link>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaHandsHelping style={{ marginRight: '8px' }} /> Our Services
              </Flex>
            </Link>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaQuestionCircle style={{ marginRight: '8px' }} /> Privacy Policy
              </Flex>
            </Link>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaHandsHelping style={{ marginRight: '8px' }} /> Affiliate Program
              </Flex>
            </Link>
          </Stack>
        </Box>

        <Box width={{ base: "100%", sm: "50%", md: "33%" }} p={4}>
          <Text fontSize="lg" fontWeight="bold" color="white" mb={4} position="relative" _after={{
            content: "''",
            position: "absolute",
            width: "50px",
            height: "2px",
            bg: "#e91e63",
            left: "0",
            bottom: "-10px"
          }}>
            Get Help
          </Text>
          <Stack spacing={2}>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaQuestionCircle style={{ marginRight: '8px' }} /> FAQ
              </Flex>
            </Link>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaHandsHelping style={{ marginRight: '8px' }} /> Task Management Tips
              </Flex>
            </Link>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaHandsHelping style={{ marginRight: '8px' }} /> Task Tracking
              </Flex>
            </Link>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaHandsHelping style={{ marginRight: '8px' }} /> Support
              </Flex>
            </Link>
            <Link as={RouterLink} to="#" _hover={{ textDecoration: 'underline', color: "#ffffff", transition: "all 0.3s ease" }}>
              <Flex align="center">
                <FaQuestionCircle style={{ marginRight: '8px' }} /> Contact Us
              </Flex>
            </Link>
          </Stack>
        </Box>

        <Box width={{ base: "100%", sm: "50%", md: "33%" }} p={4}>
          <Text fontSize="lg" fontWeight="bold" color="white" mb={4} position="relative" _after={{
            content: "''",
            position: "absolute",
            width: "50px",
            height: "2px",
            bg: "#e91e63",
            left: "0",
            bottom: "-10px"
          }}>
            Follow Us
          </Text>
          <Flex>
            <IconButton
              as="a"
              href="https://facebook.com"
              aria-label="Facebook"
              icon={<FaFacebook />}
              isRound
              bg="rgba(255,255,255,0.2)"
              color="white"
              _hover={{ color: "#24262b", bg: "white" }}
              mr={2}
              transition="all 0.3s ease"
            />
            <IconButton
              as="a"
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter />}
              isRound
              bg="rgba(255,255,255,0.2)"
              color="white"
              _hover={{ color: "#24262b", bg: "white" }}
              mr={2}
              transition="all 0.3s ease"
            />
            <IconButton
              as="a"
              href="https://instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram />}
              isRound
              bg="rgba(255,255,255,0.2)"
              color="white"
              _hover={{ color: "#24262b", bg: "white" }}
              mr={2}
              transition="all 0.3s ease"
            />
            <IconButton
              as="a"
              href="https://linkedin.com"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              isRound
              bg="rgba(255,255,255,0.2)"
              color="white"
              _hover={{ color: "#24262b", bg: "white" }}
              transition="all 0.3s ease"
            />
          </Flex>
        </Box>
      </Flex>
      <Box textAlign="center" mt={8}>
        <Text fontSize="sm">© {new Date().getFullYear()} Task Manager. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
