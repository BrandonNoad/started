import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Button, Heading } from '@chakra-ui/react';
import { Image, Transformation } from 'cloudinary-react';

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
                    <Link to="/">
                        <Image
                            cloudName="noad"
                            publicId="started_logo_u0vxyj.png"
                            alt="STARTED logo"
                        >
                            <Transformation width="40" crop="scale" />
                        </Image>
                    </Link>
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
