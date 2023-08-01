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
            The FRONTIERS Framework
        </Heading>
        <Text mb={4}>
            The newly developed FRONTIERS (
            <Text as="span" fontWeight="semibold">
                F
            </Text>
            ramework for{' '}
            <Text as="span" fontWeight="semibold">
                R
            </Text>
            ig
            <Text as="span" fontWeight="semibold">
                O
            </Text>
            r a
            <Text as="span" fontWeight="semibold">
                N
            </Text>
            d{' '}
            <Text as="span" fontWeight="semibold">
                T
            </Text>
            ransparency{' '}
            <Text as="span" fontWeight="semibold">
                I
            </Text>
            n R
            <Text as="span" fontWeight="semibold">
                E
            </Text>
            sea
            <Text as="span" fontWeight="semibold">
                R
            </Text>
            ch on{' '}
            <Text as="span" fontWeight="semibold">
                S
            </Text>
            wallowing) Framework is a tool for dysphagia researchers and research consumers to
            promote rigor and transparency in study design and reporting, specific to dysphagia
            research.
        </Text>
        <Text mb={4}>
            This interactive, web-based application has been designed to enhance the accessibility
            and usability of the FRONTIERS Framework. The application allows clinicians and
            researchers alike to easily plan for and appraise rigor and transparency in study design
            and reporting by asking key questions across the following categories:
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
            checklist questions, the software will output a report of the questions and responses.
            Manuscripts are currently in preparation that will further describe the framework and
            provide examples of its utilization.
        </Text>
        <Text mb={4}>
            If you have questions, comments, or feedback about the FRONTIERS Framework, please email
            us at{' '}
            <Link
                color="secondary.600"
                href="mailto:frontiersframework@gmail.com"
                isExternal={true}
            >
                frontiersframework@gmail.com
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
