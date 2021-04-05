import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

import BlogLayout from '../layouts/BlogLayout';

const AboutPage = () => (
    <BlogLayout title="About">
        <Heading as="h2" size="xl" color="gray.900">
            About
        </Heading>
        <Text>TODO</Text>
    </BlogLayout>
);

export default AboutPage;
