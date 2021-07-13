import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Button, Badge } from '@chakra-ui/react';

import Seo from '../components/Seo';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const commonPx = [3, 8, 12];

const BlogLayout = ({ title, children }) => {
    return (
        <>
            <Seo title={title}></Seo>
            <Flex direction="column" minHeight="full">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    px={commonPx}
                    pt={6}
                    pb={4}
                    mb={8}
                >
                    <Logo />
                    <Box>
                        <Button colorScheme="gray" variant="ghost" as={Link} to="/about">
                            About
                        </Button>
                        <Badge colorScheme="orange" variant="solid" fontSize="md">
                            Beta
                        </Badge>
                    </Box>
                </Flex>
                <Box as="main" px={commonPx}>
                    {children}
                </Box>
                <Box px={commonPx} mt="auto">
                    <Footer />
                </Box>
            </Flex>
        </>
    );
};

export default BlogLayout;
