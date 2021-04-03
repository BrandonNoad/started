import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Button } from '@chakra-ui/react';

import Seo from '../components/Seo';
import Logo from '../components/Logo';

const BlogLayout = ({ title, children }) => {
    return (
        <>
            <Seo title={title}></Seo>
            <Flex as="header" align="center" justify="space-between" px={12} pt={6} pb={4} mb={8}>
                <Logo />
                <Box>
                    <Button colorScheme="gray" variant="ghost" as={Link} to="/about">
                        About
                    </Button>
                </Box>
            </Flex>
            <Box as="main">{children}</Box>
        </>
    );
};

export default BlogLayout;
