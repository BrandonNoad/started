import React from 'react';
import { Link } from 'gatsby';
import { Box, Text, Container, Heading, Button } from '@chakra-ui/react';

import BlogLayout from '../layouts/BlogLayout';

const IndexPage = () => (
    <BlogLayout>
        <Box>
            <Container maxWidth="3xl">
                <Heading as="h1" color="gray.900" size="3xl" align="center" mb={10}>
                    Framework for
                    <br />
                    Rigor and Transparency
                    <br />
                    in Research on Swallowing
                </Heading>
            </Container>
            <Container maxWidth="2xl" centerContent>
                <Text color="gray.500" fontWeight="medium" fontSize="xl" align="center" mb={8}>
                    The FRONTIERS Framework is a tool for dysphagia researchers and research
                    consumers to promote rigor and transparency in study design and reporting,
                    specific to dysphagia research.
                </Text>
                <Box>
                    <Button colorScheme="primary" mr={4} as={Link} to="/app">
                        Get Started
                    </Button>
                    <Button colorScheme="gray" variant="outline" as={Link} to="/about">
                        Learn More
                    </Button>
                </Box>
            </Container>
        </Box>
    </BlogLayout>
);

export default IndexPage;
