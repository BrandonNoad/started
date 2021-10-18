import React from 'react';
import {
    SimpleGrid,
    Box,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    Avatar,
    Link
} from '@chakra-ui/react';

import BlogLayout from '../layouts/BlogLayout';

const contributors = [
    'Amber Anderson',
    'Ashwini Namasivayam-MacDonald',
    'Atsuko Kurosu',
    'Brandon Noad',
    'Catriona Steele',
    'Danielle Brates',
    'Joanne Yee',
    'Justine Dallal York',
    'Matina Balou',
    'Nicole Rogus-Pulia',
    'Pooja Gandhi',
    'Rebecca Affoo',
    'Renata Mancopes',
    'Rodolfo Peña-Chávez',
    'Ryan Burdick',
    'Sana Smaoui',
    'Sophia Werden Abrams',
    'Yael Shapira-Galitz'
];

const AboutPage = () => (
    <BlogLayout title="About">
        <Heading as="h2" size="xl" color="gray.900" mb={5}>
            The STARTED Framework
        </Heading>
        <Text mb={4}>
            The newly developed STARTED (
            <Text as="span" fontWeight="semibold">
                STA
            </Text>
            ndards for{' '}
            <Text as="span" fontWeight="semibold">
                R
            </Text>
            igor and{' '}
            <Text as="span" fontWeight="semibold">
                T
            </Text>
            ranspar
            <Text as="span" fontWeight="semibold">
                E
            </Text>
            ncy in{' '}
            <Text as="span" fontWeight="semibold">
                D
            </Text>
            ysphagia Research) Framework is an evidence-based, preferred set of recommendations for
            reporting dysphagia research involving human subjects. This interactive, web-based
            application has been designed to appraise the rigor and transparency of peer-reviewed
            dysphagia articles. The application allows clinicians and researchers alike to easily
            determine strengths and weaknesses in design and/or reporting of dysphagia research by
            asking key questions to assess rigor and transparency across the following categories:
        </Text>
        <UnorderedList mb={4}>
            <ListItem>Participants and baseline characteristics</ListItem>
            <ListItem>Non-instrumental assessment and screening</ListItem>
            <ListItem>Videofluoroscopic swallowing studies and associated measures</ListItem>
            <ListItem>
                Fiberoptic endoscopic evaluations of swallowing and associated measures
            </ListItem>
            <ListItem>Other instrumental techniques and measures</ListItem>
            <ListItem>Dysphagia treatment</ListItem>
            <ListItem>Patient reported outcome measures</ListItem>
        </UnorderedList>
        <Text mb={4}>
            The application can be used when preparing manuscripts for submission, for critical
            appraisal and review activities, or during study design. Upon completion of the
            checklist questions, the software will output a report identifying aspects of a
            manuscript or research study that meet minimum reporting standards as well as aspects
            where greater detail is needed. Manuscripts are currently in preparation that will
            further describe the framework and provide examples of its utilization.
        </Text>
        <Text mb={4}>
            If you have questions, comments, or feedback about the STARTED Framework, please email
            us at{' '}
            <Link
                color="secondary.600"
                href="mailto:startedcollaborative@gmail.com"
                isExternal={true}
            >
                startedcollaborative@gmail.com
            </Link>
            .
        </Text>
        <Heading as="h2" size="xl" color="gray.900" mb={5}>
            Contributors
        </Heading>
        <SimpleGrid columns={[3, null, 4, 5, 6]} spacing={5}>
            {contributors.map((name) => (
                <Box textAlign="center" key={name}>
                    <Avatar name={name} src="" size="lg" mb={1}></Avatar>
                    <Text fontSize="sm" fontWeight="medium">
                        {name}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    </BlogLayout>
);

export default AboutPage;
