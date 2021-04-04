import React from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';

import StudyConfigurationCard from '../StudyConfigurationCard';

const StudyConfiguration = ({ configOptions }) => (
    <Box bg="white" borderRadius="md" boxShadow="md">
        <Box p={[4, 6]}>
            <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={5} color="gray.900">
                How would you like to configure the study?
            </Heading>
            <Stack direction={['column', null, null, null, null, 'row']} spacing={5}>
                {configOptions.map(
                    ({ isRecommended = false, icon, title, description, onClick }) => (
                        <Box flex="1" key={title}>
                            <StudyConfigurationCard
                                isRecommended={isRecommended}
                                icon={icon}
                                title={title}
                                description={description}
                                onClick={onClick}
                            />
                        </Box>
                    )
                )}
            </Stack>
        </Box>
    </Box>
);

export default StudyConfiguration;
