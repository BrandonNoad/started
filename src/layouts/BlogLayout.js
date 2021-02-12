import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Image, Transformation } from 'cloudinary-react';

const BlogLayout = ({ children }) => {
    return (
        <>
            <Flex as="header" align="center" justify="space-between" px={12} pt={6} pb={4} mb={8}>
                <Box>
                    <Link to="/">
                        <Image
                            secure
                            cloudName="noad"
                            publicId="started_logo_u0vxyj.png"
                            alt="STARTED logo"
                        >
                            <Transformation width="40" crop="scale" />
                        </Image>
                    </Link>
                </Box>
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
