import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Button, Heading } from '@chakra-ui/react';

import Seo from '../components/Seo';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const commonPx = [3, 8, 12];

const AppLayout = ({ title, heading, actions = null, children }) => (
    <>
        <Seo title={title}></Seo>
        <Flex direction="column" bg="gray.100" minHeight="full">
            <Box bg="secondary.900" px={commonPx}>
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
                    <Logo />
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
                    <Flex align="center" justify="space-between" wrap="wrap">
                        <Box>
                            <Heading as="h1" size="xl" color="white">
                                {heading}
                            </Heading>
                        </Box>
                        <Box>{actions}</Box>
                    </Flex>
                </Box>
            </Box>
            <Box mt="-100px" as="main" px={commonPx}>
                {children}
            </Box>
            <Box px={commonPx} mt="auto">
                <Footer colors={{ border: 'gray.300', font: 'gray.500' }} />
            </Box>
        </Flex>
    </>
);

export default AppLayout;
