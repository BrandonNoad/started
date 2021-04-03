import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import BlogLayout from '../layouts/BlogLayout';

const AboutPage = () => (
    <BlogLayout title="About">
        <Box px={12}>
            <Heading as="h2" size="xl" color="gray.900">
                About
            </Heading>
            <Text>TODO</Text>
        </Box>
    </BlogLayout>
);

export default AboutPage;
