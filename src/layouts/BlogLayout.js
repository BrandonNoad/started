import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Square, Icon, Button } from '@chakra-ui/react';
import { SiStripe } from 'react-icons/si';

const BlogLayout = ({ children }) => {
    return (
        <>
            <Flex as="header" align="center" justify="space-between" px={12} pt={6} pb={4} mb={8}>
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
                        <Icon as={SiStripe}></Icon>
                    </Square>
                </Box>
                <Box>
                    <Button colorScheme="grey" variant="ghost" as={Link} to="/about">
                        About
                    </Button>
                </Box>
            </Flex>
            <Box as="main">{children}</Box>
        </>
    );
};

export default BlogLayout;
