import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Square, Icon, Button, Heading, Alert, AlertIcon } from '@chakra-ui/react';
import { SiStripe } from 'react-icons/si';
import { DownloadIcon } from '@chakra-ui/icons';

const AppLayout = ({ children }) => (
    <Box bg="grey.100" height="full" minHeight="100vh">
        <Box bg="grey.800" px={12}>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                pt={6}
                pb={4}
                borderBottom="1px"
                borderBottomColor="grey.600"
                mb={8}
            >
                <Box>
                    <Square
                        borderRadius="xl"
                        size="40px"
                        bg="primary.500"
                        color="white"
                        cursor="pointer"
                        _hover={{ bg: 'primary.600' }}
                        as={Link}
                        to="/"
                    >
                        <Icon as={SiStripe} />
                    </Square>
                </Box>
                <Box>
                    <Button
                        colorScheme="grey"
                        variant="ghost"
                        color="grey.100"
                        _hover={{ color: 'grey.50', backgroundColor: 'grey.700' }}
                        as={Link}
                        to="/about"
                    >
                        About
                    </Button>
                </Box>
            </Flex>
            <Box pb={40}>
                <Flex align="center" justify="space-between">
                    <Box>
                        <Heading as="h1" size="xl" color="#fff">
                            Study Configuration
                        </Heading>
                    </Box>
                    <Box>
                        <Button colorScheme="grey" leftIcon={<DownloadIcon />}>
                            Export
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
        <Box px={12}>
            <Box mt={-28} borderRadius="md" bg="#fff" boxShadow="md">
                <Box py={4} px={6} borderBottom="1px" borderBottomColor="grey.200">
                    <Flex align="center" justify="space-between">
                        <Heading as="h2" color="grey.900" fontSize="3xl">
                            Participants
                        </Heading>
                        <Box>
                            <Button colorScheme="grey" variant="outline">
                                Back
                            </Button>
                        </Box>
                    </Flex>
                </Box>
                <Box height="200px" py={4} px={6}>
                    <Alert
                        status="warning"
                        bg="accent.4.100"
                        color="accent.4.900"
                        fontWeight="medium"
                        py={4}
                        px={6}
                        borderRadius="sm"
                    >
                        <AlertIcon />
                        This tool is not appropriate for the study.
                    </Alert>
                </Box>
                <Box py={4} px={6} borderTop="1px" borderTopColor="grey.200">
                    <Flex align="center">
                        <Button colorScheme="primary" mr={2}>
                            Next
                        </Button>
                        <Button colorScheme="grey" variant="outline">
                            Back
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    </Box>
);

export default AppLayout;
