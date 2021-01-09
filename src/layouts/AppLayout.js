import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Square, Icon, Button, Heading } from '@chakra-ui/react';
import { SiStripe } from 'react-icons/si';

const AppLayout = ({ heading, actions = null, children }) => (
    <Box bg="gray.100" height="full" minHeight="100vh">
        <Box bg="secondary.900" px={12}>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                pt={6}
                pb={4}
                borderBottom="1px"
                borderBottomColor="secondary.700"
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
                        variant="ghost"
                        color="gray.50"
                        _hover={{ color: 'white', backgroundColor: 'secondary.800' }}
                        as={Link}
                        to="/about"
                    >
                        About
                    </Button>
                </Box>
            </Flex>
            <Box height={186}>
                <Flex align="center" justify="space-between">
                    <Box>
                        <Heading as="h1" size="xl" color="white">
                            {heading}
                        </Heading>
                    </Box>
                    <Box>{actions}</Box>
                </Flex>
            </Box>
        </Box>
        <Box px={12} pb={0}>
            <Box mt="-100px" as="main">
                {children}
            </Box>
        </Box>
    </Box>
);

export default AppLayout;
